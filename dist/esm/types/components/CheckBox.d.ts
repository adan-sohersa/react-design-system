import React from 'react';
import type { ReactNode, FC, FocusEventHandler } from 'react';
export declare enum CheckBoxSize {
    small = "sm",
    medium = "md",
    large = "lg"
}
export declare enum CheckBoxColors {
    default = "default",
    primary = "primary",
    secondary = "secondary",
    success = "success",
    warning = "warning",
    danger = "danger"
}
interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: ReactNode;
    checked?: boolean;
    height?: CheckBoxSize;
    color?: CheckBoxColors;
    indeterminated?: boolean;
    onFocus?: FocusEventHandler<Element>;
    onBlur?: FocusEventHandler<Element>;
}
export declare const CheckBox: FC<CheckBoxProps>;
export {};
