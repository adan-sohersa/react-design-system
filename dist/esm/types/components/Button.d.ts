import React, { type FC, type ReactNode } from 'react';
export declare enum ButtonColors {
    default = "default",
    primary = "primary",
    secondary = "secondary",
    success = "success",
    warning = "warning",
    danger = "danger"
}
export declare enum ButtonVariants {
    solid = "solid",
    bordered = "bordered",
    flat = "flat"
}
export declare enum ButtonSize {
    small = "sm",
    medium = "md",
    large = "lg"
}
export declare enum ButtonRadius {
    full = "full",
    large = "lg",
    med = "md",
    small = "sm",
    none = "none"
}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariants;
    color?: ButtonColors;
    size?: ButtonSize;
    radius?: ButtonRadius;
    onFocus?: any;
    onBlur?: any;
}
declare const Button: FC<ButtonProps>;
export default Button;
