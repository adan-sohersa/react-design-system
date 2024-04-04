import React from 'react';
import { type FC, type ReactNode } from 'react';
export declare enum TabsVariant {
    solid = "solid",
    bordered = "bordered",
    light = "light",
    underlined = "underlined"
}
export declare enum TabsColors {
    default = "default",
    primary = "primary",
    secondary = "secondary",
    success = "success",
    warning = "warning",
    danger = "danger"
}
export declare enum TabsSize {
    small = "sm",
    medium = "md",
    large = "lg"
}
interface TabsProps extends React.SelectHTMLAttributes<Element> {
    children: ReactNode;
    key?: React.Key | null | undefined;
    variant?: TabsVariant;
    color?: TabsColors;
    height?: TabsSize;
    fullWidth?: boolean;
    disabledKeys?: any;
    selectedKey?: React.Key | null;
    defaultSelectedKey?: React.Key;
    disabled?: boolean;
    animated?: boolean;
    onChange?: any;
    onCopy?: any;
    onCopyCapture?: any;
    onSelectionChange: (key: React.Key) => any;
}
export declare const Tabs: FC<TabsProps>;
export {};
