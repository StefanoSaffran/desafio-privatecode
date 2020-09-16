import styled, { css } from 'styled-components';
import { darken } from 'polished';

import Button from '~/components/Button';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 8rem;
    width: 100%;
    background: ${theme.colors.backgroundAlternative};
    color: ${theme.colors.primary};
    padding: 1.6rem;
    border-radius: ${theme.radii.default};
    box-shadow: ${theme.shadows.default};
    font-size: ${theme.fontSizes.default};

    > strong {
      color: ${theme.colors.grey};

      font-size: ${theme.fontSizes.huge};
      margin-left: auto;
    }

    > div {
      display: flex;

      margin-left: 1.5rem;
      padding-left: 1.5rem;
      border-left: 0.1rem solid ${darken(0.1, theme.colors.lightGrey)};
    }
  `}
`;

export const StartStopButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: fit-content;
  padding: 0;

  & + button {
    margin-left: 0.5rem;
  }
`;
