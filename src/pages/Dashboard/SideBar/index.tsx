import React from 'react';

import { FiPlus } from 'react-icons/fi';

import Summary from './Summary';
import { Container, Wrapper, TaskButton } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <TaskButton variant="primary">
          <FiPlus size={18} />
          Nova tarefa
        </TaskButton>

        <Summary />
      </Wrapper>
    </Container>
  );
};

export default SideBar;
