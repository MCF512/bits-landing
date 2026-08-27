import { HTMLAttributes, forwardRef } from "react";
import { classNames } from "@/utils/classNames";
import styles from "./section-label.module.scss";

export interface SectionLabelProps extends HTMLAttributes<HTMLDivElement> {}

export const SectionLabel = forwardRef<HTMLDivElement, SectionLabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(styles.label, {}, [className ?? ""])}
        {...props}
      >
        <span className={styles.bar} aria-hidden />
        <span className={styles.text}>{children}</span>
      </div>
    );
  }
);

SectionLabel.displayName = "SectionLabel";
