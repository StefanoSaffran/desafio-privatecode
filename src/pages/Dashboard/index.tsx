import React from 'react';

import SideBar from './SideBar';
import MainContent from './MainContent';
import DefaultLayout from '../_layouts/default';

import { Container, Wrapper } from './styles';

const Dashboard: React.FC = () => {
  return (
    <DefaultLayout>
      <Container>
        <Wrapper>
          <SideBar />
          <MainContent />
        </Wrapper>
      </Container>
    </DefaultLayout>
  );
};

export default Dashboard;
