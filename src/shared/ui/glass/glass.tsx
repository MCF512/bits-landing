import { HTMLAttributes, forwardRef } from "react";
import { classNames } from "@/utils/classNames";
import styles from "./glass.module.scss";

export interface GlassProps extends HTMLAttributes<HTMLDivElement> {}

export const Glass = forwardRef<HTMLDivElement, GlassProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(styles.glass, {}, [className ?? ""])}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Glass.displayName = "Glass";
