import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  PropsWithChildren,
  useCallback,
} from 'react';

import {
  FiPlayCircle,
  FiPauseCircle,
  FiEdit3,
  FiCheckCircle,
} from 'react-icons/fi';
import { useTheme } from 'styled-components';

import { useTask } from '~/context/task';
import { padLeft } from '~/utils';
import { ITask } from '~/context/task';

import { Container, StartStopButton, EditButton, FinishButton } from './styles';

interface IProps {
  task: ITask;
  handleEditTask: (task: ITask) => void;
}

const Task = ({ task, handleEditTask }: PropsWithChildren<IProps>) => {
  const { updateTask } = useTask();
  const { colors } = useTheme();
  const [lapse, setLapse] = useState(task.time);
  const intervalRef = useRef(0);

  const updateTaskBeforeClose = useCallback(() => {
    updateTask({
      ...task,
      time: lapse,
      backgroundStartedAt: Date.now(),
    });
  }, [lapse, task, updateTask]);

  useEffect(() => {
    if (task.isRunning && task.backgroundStartedAt !== null) {
      const startTime =
        Date.now() - (Date.now() - task.backgroundStartedAt + task.time);

      intervalRef.current = setInterval(() => {
        setLapse(Date.now() - startTime);
      }, 0);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []); // eslint-disable-line

  useEffect(() => {
    const cleanup = () => {
      if (task.isRunning && !task.done) {
        updateTaskBeforeClose();
      }
    };

    window.addEventListener('beforeunload', cleanup);

    return () => {
      window.removeEventListener('beforeunload', cleanup);
    };
  }, [updateTaskBeforeClose, task]);

  const handleRunClick = useCallback(() => {
    if (task.isRunning) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - lapse;
      intervalRef.current = setInterval(() => {
        setLapse(Date.now() - startTime);
      }, 0);
    }

    updateTask({
      ...task,
      isRunning: !task.isRunning,
      time: lapse,
    });
  }, [lapse, task, updateTask]);

  const handleFinishTask = useCallback(() => {
    updateTask({
      ...task,
      done: true,
      isRunning: false,
      time: lapse,
    });
  }, [updateTask, task, lapse]);

  const setEditingTask = useCallback(() => {
    handleEditTask(task);
  }, [handleEditTask, task]);

  const time = useMemo(() => {
    let seconds = lapse / 1000;

    if (task.done) {
      seconds = task.time / 1000;
    }

    const min = Math.floor(seconds / 60).toString();
    const sec = Math.floor(seconds % 60).toString();

    return `${padLeft(Number(min))}:${padLeft(Number(sec))}`;
  }, [lapse, task]);

  return (
    <>
      <Container>
        <h3>{task.title}</h3>
        <strong>{time}</strong>
        <div>
          {!task.done && (
            <>
              <StartStopButton
                onClick={handleRunClick}
                variant="transparent"
                color={colors.darkerGrey}
              >
                {task.isRunning ? (
                  <FiPauseCircle size={18} />
                ) : (
                  <FiPlayCircle size={18} />
                )}
              </StartStopButton>

              <EditButton
                onClick={setEditingTask}
                variant="transparent"
                color={colors.grey}
              >
                <FiEdit3 size={18} />
              </EditButton>
              <FinishButton
                onClick={handleFinishTask}
                variant="transparent"
                color={colors.done}
              >
                <FiCheckCircle size={18} />
              </FinishButton>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default Task;
