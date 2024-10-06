import type { ButtonHTMLAttributes } from "react";
// import { Icon } from "shared/ui/icon";
import clsx from "clsx";
import { forwardRef } from "react";
import styles from "./styles.module.scss";

interface ICarouselButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const CarouselButton = forwardRef<HTMLButtonElement, ICarouselButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      className={clsx("btn-reset", styles.btn, className)}
      ref={ref}
      {...props}
    >
      {/* <Icon name="common/chevron" /> */}
    </button>
  )
);
