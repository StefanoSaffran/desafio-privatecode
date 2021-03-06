import styled, { css } from 'styled-components';

import Button from '~/components/Button';

export const Form = styled.form`
  ${({ theme }) => css`

  width: 100%;

  > fieldset {
    border: 0;
    padding: 0 2.4rem;

    > legend {
      font: bold 2.4rem Roboto;
      width: 100%;
      margin-bottom: 1.6rem;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid ${theme.colors.greyLowerOpacity}
      display: flex;
      align-items: center;
    }

    > input {
      width: 100%;
      margin-bottom: 1.6rem;
      border-radius: 0.8rem;
      border: 1px solid ${theme.colors.grey};
      padding: 1.2rem 1.6rem;
    }
  }
`}
`;

export const ConfirmButton = styled(Button)`
  padding: 1.2rem;
  font-weight: 600;
`;
