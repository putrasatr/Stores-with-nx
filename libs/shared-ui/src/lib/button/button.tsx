import React from 'react';
import { Button as ButtonChakra, ButtonProps } from '@chakra-ui/react';
/* eslint-disable-next-line */
// export interface ButtonProps {
//   children: JSX.Element | string;
// }

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonChakra {...props}>{children}</ButtonChakra>;
};

export default Button;
