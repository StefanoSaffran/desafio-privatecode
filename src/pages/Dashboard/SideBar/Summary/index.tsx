import React from 'react';

import { useTask } from '~/context/task';

import { Container } from './styles';

const Summary: React.FC = () => {
  const { getTotal, getInProgress, getDone, getTotalTime } = useTask();
  return (
    <Container>
      <h3>Resumo</h3>

      <h4>Tarefas</h4>
      <div>
        <strong>Total: </strong>
        <span>{getTotal()}</span>
      </div>
      <div>
        <strong>Concluidas: </strong>
        <span>{getDone()}</span>
      </div>
      <div>
        <strong>Em andamento: </strong>
        <span>{getInProgress()}</span>
      </div>

      <h4>Tempo Trabalhado</h4>
      <div>
        <strong>Total: </strong>
        <span>{getTotalTime()}</span>
      </div>
    </Container>
  );
};

export default Summary;
