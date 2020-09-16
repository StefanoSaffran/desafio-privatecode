import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -4.2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  z-index: 0;
  padding: 0 1.6rem;
`;

export const Wrapper = styled.div`
  max-width: 113rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 750px) {
    flex-direction: row;
  }
`;
