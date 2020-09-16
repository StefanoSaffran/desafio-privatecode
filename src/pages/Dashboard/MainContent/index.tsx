import React, { useState, useMemo } from 'react';

import { HiSwitchHorizontal } from 'react-icons/hi';
import { useTheme } from 'styled-components';

import Task from './Task';

import { useTask } from '~/context/task';
import { ITask } from '~/context/task';

import { Container, Wrapper, SwitchButton } from './styles';

const MainContent: React.FC = () => {
  const { tasks } = useTask();
  const { colors } = useTheme();
  const [isDone, setIsDone] = useState(false);

  const tasksToShow = useMemo(() => {
    let result = [] as ITask[];
    result = tasks.filter((task: ITask) => task.done === isDone);
    console.log(result);
    return result;
  }, [tasks, isDone]);

  return (
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
          <Task key={task.id} task={task} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default MainContent;
