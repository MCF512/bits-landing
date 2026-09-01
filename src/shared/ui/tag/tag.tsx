import { HTMLAttributes, forwardRef } from "react";
import { classNames } from "@/utils/classNames";
import type { UkGradient } from "@/shared/styles/tokens";
import styles from "./tag.module.scss";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** Gradient text accent (`lm` | `mc` | `cl` | `holo` | `chrome`) */
  gradient?: UkGradient;
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ gradient, className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={classNames(
          styles.tag,
          { [styles[`tag_${gradient}`]]: Boolean(gradient) },
          [className ?? ""]
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Tag.displayName = "Tag";
