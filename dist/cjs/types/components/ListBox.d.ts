import React, { type ReactNode, type FC, type FocusEventHandler } from 'react';
export declare enum ListboxVariants {
    solid = "solid",
    bordered = "bordered",
    light = "light",
    flat = "flat",
    faded = "faded",
    shadow = "shadow"
}
export declare enum ListboxColors {
    default = "default",
    primary = "primary",
    secondary = "secondary",
    success = "success",
    warning = "warning",
    danger = "danger"
}
export declare enum ListBoxMode {
    none = "none",
    single = "single",
    multiple = "multiple"
}
interface ListboxProps extends React.HTMLAttributes<HTMLUListElement> {
    children: ReactNode[];
    variant?: ListboxVariants;
    color?: ListboxColors;
    disabledKeys?: React.Key[];
    animated: boolean;
    selectionMode?: ListBoxMode;
    onFocus?: FocusEventHandler<Element>;
    onBlur?: FocusEventHandler<Element>;
}
declare const Listbox: FC<ListboxProps>;
export { Listbox as default };
