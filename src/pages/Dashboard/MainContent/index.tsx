import React from 'react';

import Task from './Task';

import { useTask } from '~/context/task';

import { Container, Wrapper } from './styles';

const MainContent: React.FC = () => {
  const { tasks } = useTask();

  return (
    <Container>
      <Wrapper>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default MainContent;
