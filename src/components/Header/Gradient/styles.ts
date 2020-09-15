import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 6.4rem;
    background: ${`linear-gradient(90deg, ${darken(
      0.3,
      theme.colors.primary,
    )} 0%, ${theme.colors.primary} 100%);`};
  `}
`;
