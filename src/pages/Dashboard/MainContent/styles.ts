import styled, { css } from 'styled-components';

import Button from '~/components/Button';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    max-height: calc(100vh - 10.4rem - 8.4rem);
    width: 100%;
    height: 100%;
    border-radius: ${theme.radii.default};
    box-shadow: ${theme.shadows.default};
    padding: 2.4rem;
    margin-top: 2.4rem;

    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }

    > div:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      > h1 {
        margin-bottom: 1.6rem;
      }
    }

    @media (min-width: 750px) {
      margin-top: 0;
      margin-left: 2.4rem;
    }
  `}
`;

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(36rem, 1fr));
  grid-gap: 1.2rem;
`;

export const SwitchButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: fit-content;
  padding: 0;
  padding-bottom: 0.6rem;
  position: absolute;
  right: 0;
`;
