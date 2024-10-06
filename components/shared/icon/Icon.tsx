import type { IconName } from "./types";
import type { SVGProps } from "react";
import clsx from "clsx";

export interface IIconProps
  extends Omit<SVGProps<SVGSVGElement>, "name" | "type"> {
  name: IconName;
}

export const Icon = ({ name, className, viewBox, ...props }: IIconProps) => {
  const [spriteName, iconName] = name.split("/");

  return (
    <svg
      aria-hidden
      className={clsx("icon", className)}
      focusable="false"
      viewBox={viewBox}
      {...props}
    >
      <use xlinkHref={`/sprite/${spriteName}.svg#${iconName}`} />
    </svg>
  );
};
