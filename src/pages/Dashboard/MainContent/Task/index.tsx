import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  PropsWithChildren,
} from 'react';

import {
  FiPlayCircle,
  FiPauseCircle,
  FiEdit3,
  FiCheckCircle,
} from 'react-icons/fi';
import { useTheme } from 'styled-components';

import { padLeft } from '~/utils';
import { ITask } from '~/context/task';

import { Container, StartStopButton } from './styles';

interface IProps {
  task: ITask;
}

const Task = ({ task }: PropsWithChildren<IProps>) => {
  const { colors } = useTheme();
  const [isRunning, setIsRunning] = useState(false);
  const [lapse, setLapse] = useState(task.time);
  const intervalRef = useRef(0);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  function handleRunClick() {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - lapse;
      intervalRef.current = setInterval(() => {
        setLapse(Date.now() - startTime);
      }, 0);
    }
    setIsRunning(!isRunning);
  }

  const time = useMemo(() => {
    const seconds = lapse / 1000;
    const min = Math.floor(seconds / 60).toString();
    const sec = Math.floor(seconds % 60).toString();

    return `${padLeft(Number(min))}:${padLeft(Number(sec))}`;
  }, [lapse]);

  return (
    <Container>
      <h3>{task.title}</h3>
      <strong>{time}</strong>
      <div>
        <StartStopButton
          onClick={handleRunClick}
          variant="transparent"
          color={colors.darkerGrey}
        >
          {isRunning ? <FiPauseCircle size={18} /> : <FiPlayCircle size={18} />}
        </StartStopButton>
        <StartStopButton variant="transparent" color={colors.grey}>
          <FiEdit3 size={18} />
        </StartStopButton>
        <StartStopButton variant="transparent" color={colors.done}>
          <FiCheckCircle size={18} />
        </StartStopButton>
      </div>
    </Container>
  );
};

export default Task;
