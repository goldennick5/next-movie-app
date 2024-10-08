import type { ComponentProps, ElementType, ReactNode } from "react";

import clsx from "clsx";
import styles from "./styles.module.scss";

interface ITitleOwnProps<E extends ElementType = ElementType> {
  className?: string;
  children: ReactNode;
  size?: "small" | "medium" | "large" | "xl";
  as?: E;
}

const DEFAULT_ELEMENT: ElementType = "h1";

export type TitleProps<E extends ElementType> = ITitleOwnProps<E> &
  Omit<ComponentProps<E>, keyof ITitleOwnProps>;

export const Title = <E extends ElementType = typeof DEFAULT_ELEMENT>({
  className,
  children,
  size = "large",
  as,
  ...props
}: TitleProps<E>) => {
  const Element = as || DEFAULT_ELEMENT;

  return (
    <Element className={clsx(styles.title, styles[size], className)} {...props}>
      {children}
    </Element>
  );
};
