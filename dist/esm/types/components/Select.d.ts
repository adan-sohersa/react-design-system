import React from 'react';
export declare enum SelectColors {
    default = "default",
    foreground = "foreground",
    primary = "primary",
    secondary = "secondary",
    success = "success",
    warning = "warning",
    danger = "danger"
}
export declare enum SelectSize {
    small = "sm",
    medium = "md",
    large = "lg"
}
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children: any;
    height?: SelectSize;
    color?: SelectColors;
    onFocus?: any;
    onBlur?: any;
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
export default Select;
