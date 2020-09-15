import React from 'react';

import { Container } from './styles';

const Summary: React.FC = () => {
  return (
    <Container>
      <h3>Resumo</h3>

      <div>
        <strong>Total: </strong>
        <span>10</span>
      </div>
      <div>
        <strong>Concluidas: </strong>
        <span>8</span>
      </div>
      <div>
        <strong>Em andamento: </strong>
        <span>2</span>
      </div>
    </Container>
  );
};

export default Summary;
