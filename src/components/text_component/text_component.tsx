import { type VariantProps } from 'class-variance-authority';
import { type HTMLAttributes, type JSX } from 'react';
import { twMerge } from 'tailwind-merge';
import { textVariants } from './text_variants';

type TextProps = HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof textVariants> & {
    as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
  };

export const TextComponent = ({
  as: Component = 'p',
  className,
  variant,
  ...props
}: TextProps): JSX.Element => {
  return (
    <Component
      className={twMerge(textVariants({ variant }), className)}
      {...props}
    />
  );
};

TextComponent.displayName = 'Text';
