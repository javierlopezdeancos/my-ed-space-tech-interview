import { cva } from 'class-variance-authority';

export const textVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold tracking-tight text-primary-500',
      h2: 'text-3xl font-semibold tracking-tight text-primary-500',
      h3: 'text-2xl font-semibold tracking-tight text-primary-500',
      body: 'text-base',
      caption: 'text-sm text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});
