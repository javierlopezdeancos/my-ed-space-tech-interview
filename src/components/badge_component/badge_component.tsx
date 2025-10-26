import { type VariantProps } from 'class-variance-authority';
import { type HTMLAttributes, type JSX, type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { badgeVariants } from './badge_variants';

type BadgeProps = HTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof badgeVariants>;

export const BadgeComponent = ({
  className,
  variant = 'black',
  children,
  ...props
}: PropsWithChildren<BadgeProps>): JSX.Element => {
  return (
    <span className={twMerge(badgeVariants({ variant }), className)} {...props}>
      {children}
    </span>
  );
};

BadgeComponent.displayName = 'Badge';
