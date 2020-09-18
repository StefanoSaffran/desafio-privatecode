import React, { useState, useMemo, useCallback } from 'react';

import { HiSwitchHorizontal } from 'react-icons/hi';
import { useTheme } from 'styled-components';

import Task from './Task';

import { useTask } from '~/context/task';
import { ITask } from '~/context/task';
import ModalEditTask from '~/components/Modal/ModalEditTask';

import { Container, Wrapper, SwitchButton } from './styles';

const MainContent: React.FC = () => {
  const { tasks } = useTask();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const { colors } = useTheme();
  const [isDone, setIsDone] = useState(false);
  const [editingTask, setEditingTask] = useState<ITask>({} as ITask);

  const toggleEditModal = useCallback(() => {
    setEditModalOpen(state => !state);
  }, []);

  const handleEditTask = useCallback(
    (task: ITask) => {
      setEditingTask(task);
      toggleEditModal();
    },
    [toggleEditModal],
  );

  const tasksToShow = useMemo(() => {
    let result = [] as ITask[];
    result = tasks.filter((task: ITask) => task.done === isDone);
    return result;
  }, [tasks, isDone]);

  return (
    <>
      <Container>
        <div>
          <h1>{isDone ? 'Concluidas' : 'Em andamento'}</h1>
          <SwitchButton
            onClick={() => setIsDone(!isDone)}
            color={colors.primary}
            variant="transparent"
          >
            <HiSwitchHorizontal size={28} />
          </SwitchButton>
        </div>
        <Wrapper>
          {tasksToShow.map(task => (
            <Task key={task.id} task={task} handleEditTask={handleEditTask} />
          ))}
        </Wrapper>
      </Container>
      <ModalEditTask
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        task={editingTask}
      />
    </>
  );
};

export default MainContent;
