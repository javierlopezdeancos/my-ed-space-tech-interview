import { type VariantProps } from 'class-variance-authority';
import { type HTMLAttributes, type JSX } from 'react';
import { twMerge } from 'tailwind-merge';
import { buttonNavTextVariants } from './button_nav_text_variants';

type ButtonNavTextProps = HTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonNavTextVariants> & {
    onClick?: () => void;
  };

export const ButtonNavTextComponent = ({
  className,
  variant = 'primary',
  onClick,
  ...props
}: ButtonNavTextProps): JSX.Element => {
  return (
    <a
      role="button"
      href="#"
      className={twMerge(buttonNavTextVariants({ variant }), className)}
      onClick={onClick}
      {...props}
    />
  );
};

ButtonNavTextComponent.displayName = 'Text';
