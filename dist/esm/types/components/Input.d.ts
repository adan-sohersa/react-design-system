import React from 'react';
import type { ReactNode } from 'react';
declare enum InputColors {
    default = "default",
    primary = "primary",
    secondary = "secondary",
    success = "success",
    warning = "warning",
    danger = "danger"
}
declare enum InputVariants {
    flat = "flat",
    outline = "underlined",
    underlined = "underlined",
    faded = "flat"
}
declare enum InputHeight {
    small = "sm",
    medium = "md",
    large = "lg"
}
declare enum LabelPlacement {
    inside = "inside",
    outside = "outside"
}
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: ReactNode;
    variant?: InputVariants;
    color?: InputColors;
    height?: InputHeight;
    label?: ReactNode;
    defaultValue?: string;
    description?: ReactNode;
    errorMessage?: ReactNode;
    startContent?: ReactNode;
    endContent?: ReactNode;
    labelPlacement?: LabelPlacement;
    fullWidth?: boolean;
    isClearable?: boolean;
    isInvalid?: boolean;
    onFocus?: any;
    onBlur?: any;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { InputVariants, InputColors, InputHeight, LabelPlacement, Input as default };
