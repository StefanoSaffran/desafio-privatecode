import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 3.2rem;
    padding-top: 3.2rem;
    border-top: 0.1rem solid ${darken(0.1, theme.colors.lightGrey)};

    > h3 {
      line-height: 0;
      margin-bottom: 2.4rem;
    }

    > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.4rem;

      > strong {
        color: ${theme.colors.darkerGrey};
      }
    }
  `}
`;
