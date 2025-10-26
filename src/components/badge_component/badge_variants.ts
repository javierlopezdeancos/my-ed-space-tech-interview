import { cva } from "class-variance-authority";

export const badgeVariants = cva("text-base font-semibold px-5 py-2 capitalize flex items-center justify-center", {
  variants: {
    variant: {
      black: "text-white bg-gray-500",
    },
  },
  defaultVariants: {
    variant: "black",
  },
});
