import styled, { css } from 'styled-components';

import Button from '~/components/Button';

export const Container = styled.div`
  max-width: 26.2rem;
  display: flex;
  flex: 1 100%;
  flex-direction: column;
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
