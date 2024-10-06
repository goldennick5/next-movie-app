import { FC } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

interface ISpinnerProps {
  size?: number;
  color?: string;
  className?: string;
}

const Spinner: FC<ISpinnerProps> = ({
  size = 40,
  color = "#000",
  className,
}) => {
  return (
    <div
      className={clsx(styles.spinner, className)}
      style={{
        width: size,
        height: size,
        borderColor: `${color} transparent transparent transparent`,
      }}
    />
  );
};

export default Spinner;
