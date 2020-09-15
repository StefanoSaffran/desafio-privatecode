import React from 'react';

import DefaultLayout from '../_layouts/default';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <DefaultLayout>
      <Container>Hello World!!</Container>
    </DefaultLayout>
  );
};

export default Dashboard;
