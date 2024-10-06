import type { PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useMemo } from "react";

interface IRatingProps extends PropsWithChildren {
  className?: string;
  size?: "small" | "medium";
  showState?: boolean;
}

export const MovieRating = ({
  children,
  showState,
  size = "medium",
  className,
}: IRatingProps) => {
  const rating = Number(children);
  const isHighRating = rating >= 6;

  return (
    <span
      className={clsx(
        styles.rating,
        showState && isHighRating && styles.isHighRating,
        styles[size],
        className
      )}
    >
      {children}
    </span>
  );
};
