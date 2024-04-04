import React, { FC, ReactNode } from 'react';

declare enum ButtonColors {
    default = "default",
    primary = "primary",
    secondary = "secondary",
    success = "success",
    warning = "warning",
    danger = "danger"
}
declare enum ButtonVariants {
    solid = "solid",
    bordered = "bordered",
    flat = "flat"
}
declare enum ButtonSize {
    small = "sm",
    medium = "md",
    large = "lg"
}
declare enum ButtonRadius {
    full = "full",
    large = "lg",
    med = "md",
    small = "sm",
    none = "none"
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariants;
    color?: ButtonColors;
    size?: ButtonSize;
    radius?: ButtonRadius;
    onFocus?: any;
    onBlur?: any;
}
declare const Button: FC<ButtonProps>;

export { Button };
