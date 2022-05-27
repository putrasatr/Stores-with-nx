import React from 'react';
import {
  Button,
  Icon,
  Tooltip,
  FormLabel,
  Text,
  ResponsiveValue,
} from '@chakra-ui/react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import {
  IoTrash,
  IoPencilSharp,
  IoPricetag,
  IoCheckmarkCircle,
  IoCloseCircle,
} from 'react-icons/io5';
import { GiCardboardBox } from 'react-icons/gi';
import {
  Mutation,
  Excel,
  Detail,
  Setting,
  Table,
  Plane,
  Retry,
  IconProps,
} from '@stores/shared-icon';
import { FC } from 'react';

interface ButtonIconProps {
  text: string;
  leftIcon?: IconProps;
  rightIcon?: IconProps;
  size?: ResponsiveValue<string | 'sm' | 'md' | 'lg' | 'xs'>;
  colorScheme?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  loadingText?: string;
  variant?: ResponsiveValue<
    string | 'link' | 'outline' | 'ghost' | 'solid' | 'unstyled'
  >;
  type?: 'button' | 'submit' | 'reset';
  w?: number | string;
  wIcon?: string;
  hIcon?: string;
  disabled?: boolean;
  tooltip?: string;
  isLabelGap?: boolean;
  color?: string;
  isPermission?: boolean;
}

export const ButtonIcon: FC<ButtonIconProps> = ({
  text,
  leftIcon,
  rightIcon,
  size,
  colorScheme,
  onClick,
  isLoading,
  loadingText,
  variant,
  type,
  w,
  wIcon = '20px',
  hIcon = '20px',
  disabled,
  tooltip,
  isLabelGap,
  color,
  isPermission = true,
  ...other
}) => {
  let icon;
  if (leftIcon === 'add' || rightIcon === 'add') icon = FiPlus;
  else if (leftIcon === 'setfilter' || rightIcon === 'setfilter')
    icon = FiSearch;
  else if (leftIcon === 'edit' || rightIcon === 'edit') icon = IoPencilSharp;
  else if (leftIcon === 'delete' || rightIcon === 'delete') icon = IoTrash;
  else if (leftIcon === 'excel' || rightIcon === 'excel') icon = Excel;
  else if (leftIcon === 'detail' || rightIcon === 'detail') icon = Detail;
  else if (leftIcon === 'price_tag' || rightIcon === 'price_tag')
    icon = IoPricetag;
  else if (leftIcon === 'check' || rightIcon === 'check')
    icon = IoCheckmarkCircle;
  else if (leftIcon === 'close' || rightIcon === 'close') icon = IoCloseCircle;
  else if (leftIcon === 'box' || rightIcon === 'box') icon = GiCardboardBox;
  else if (leftIcon === 'mutation' || rightIcon === 'mutation') icon = Mutation;
  else if (leftIcon === 'setting' || rightIcon === 'setting') icon = Setting;
  else if (leftIcon === 'table' || rightIcon === 'table') icon = Table;
  else if (leftIcon === 'plane' || rightIcon === 'plane') icon = Plane;
  else if (leftIcon === 'retry' || rightIcon === 'retry') icon = Retry;
  else icon = FiPlus;
  if (!isPermission) return null;
  return (
    <>
      {isLabelGap && (
        <FormLabel size="md">
          <Text>&nbsp;</Text>
        </FormLabel>
      )}
      <Tooltip label={tooltip}>
        <Button
          type={type}
          size={size}
          colorScheme={colorScheme}
          color={color}
          onClick={onClick}
          leftIcon={
            leftIcon ? <Icon as={icon} w={wIcon} h={hIcon} /> : undefined
          }
          rightIcon={
            rightIcon ? <Icon as={icon} w={wIcon} h={hIcon} /> : undefined
          }
          isLoading={isLoading}
          loadingText={loadingText}
          variant={variant}
          w={w}
          disabled={disabled}
          {...other}
        >
          {text}
        </Button>
      </Tooltip>
    </>
  );
};

export default ButtonIcon;
