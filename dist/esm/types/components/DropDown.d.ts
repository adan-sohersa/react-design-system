import React from 'react';
import { type FC, type ReactNode } from 'react';
export declare enum DropDownColors {
    default = "default",
    primary = "primary",
    secondary = "secondary",
    success = "success",
    warning = "warning",
    danger = "danger"
}
export declare enum DropDownVariants {
    solid = "solid",
    bordered = "bordered",
    light = "ligth",
    flat = "flat",
    faded = "faded",
    shadow = "shadow"
}
interface DropDownProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode[];
    disabled?: boolean;
    color?: DropDownColors;
    variant?: DropDownVariants;
    closeonselect?: boolean;
}
export declare const Dropdown: FC<DropDownProps>;
export {};
