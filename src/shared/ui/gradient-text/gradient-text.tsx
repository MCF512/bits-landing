import { HTMLAttributes, forwardRef } from "react";
import { classNames } from "@/utils/classNames";
import type { UkGradient } from "@/shared/styles/tokens";
import styles from "./gradient-text.module.scss";

export interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  gradient?: UkGradient;
}

export const GradientText = forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ gradient = "lm", className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={classNames(
          styles.text,
          { [styles[`text_${gradient}`]]: true },
          [className ?? ""]
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

GradientText.displayName = "GradientText";
