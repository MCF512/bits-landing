import { ButtonHTMLAttributes, forwardRef } from "react";
import { classNames } from "@/utils/classNames";
import styles from "./button.module.scss";

export type ButtonVariant =
  | "primary"
  | "outline"
  | "ghost"
  | "secondary"
  | "gradient";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      type = "button",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={classNames(
          styles.button,
          {
            [styles[`button_${variant}`]]: true,
            [styles[`button_${size}`]]: size !== "md",
          },
          [className ?? ""]
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
