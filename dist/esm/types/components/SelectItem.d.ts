import React, { type ReactNode, type FC } from 'react';
export declare enum SelectItemColors {
    default = "default",
    primary = "primary",
    secondary = "secondary",
    success = "success",
    warning = "warning",
    danger = "danger"
}
interface SelectItemProps extends React.OptionHTMLAttributes<Element> {
    children: ReactNode;
    key: any;
    disabled?: boolean;
    label?: string | undefined;
    selected?: boolean | undefined;
    value?: string | number;
    color?: SelectItemColors;
}
export declare const SelectItem: FC<SelectItemProps>;
export {};
