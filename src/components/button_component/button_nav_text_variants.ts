import { cva } from 'class-variance-authority';

export const buttonNavTextVariants = cva('text-base cursor-pointer', {
  variants: {
    variant: {
      primary: 'font-semibold text-primary-500',
      secondary: 'font-semibold text-secondary-500',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
