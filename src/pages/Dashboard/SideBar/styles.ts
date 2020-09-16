import styled, { css } from 'styled-components';

import Button from '~/components/Button';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;

  flex-direction: column;

  @media (min-width: 750px) {
    max-width: 26.2rem;
    flex: 1 100%;
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    max-height: 60rem;
    width: 100%;
    height: auto;
    border-radius: ${theme.radii.default};
    box-shadow: ${theme.shadows.default};
    padding: 2.4rem;
  `}
`;

export const TaskButton = styled(Button)`
  > svg {
    margin-right: 1rem;
  }
`;
