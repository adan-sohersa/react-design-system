import React from 'react';
import { type FC, type ReactNode } from 'react';
export declare enum ToggleSize {
    small = "sm",
    medium = "md",
    large = "lg"
}
export declare enum ToggleColors {
    default = "default",
    primary = "primary",
    secondary = "secondary",
    success = "success",
    warming = "warming",
    danger = "danger"
}
interface ToggleProps extends React.InputHTMLAttributes<Element> {
    children?: ReactNode;
    name?: string;
    height?: ToggleSize;
    color?: ToggleColors;
    startContent?: ReactNode;
    endContent?: ReactNode;
    thumbIcon?: ReactNode;
    checked?: boolean;
}
export declare const Toggle: FC<ToggleProps>;
export {};
