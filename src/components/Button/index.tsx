import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { Container } from './styles';

export type ButtonVariants = 'primary' | 'transparent';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
  background?: string;
  color?: string;
};

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { children, variant, color, type, ...rest } = props;

  return (
    <Container
      color={color}
      type={type || 'button'}
      variant={variant}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Button;
