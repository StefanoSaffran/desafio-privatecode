import React from 'react';

import SideBar from './SideBar';
import DefaultLayout from '../_layouts/default';
import { Container, Wrapper } from './styles';

const Dashboard: React.FC = () => {
  return (
    <DefaultLayout>
      <Container>
        <Wrapper>
          <SideBar />
        </Wrapper>
      </Container>
    </DefaultLayout>
  );
};

export default Dashboard;
