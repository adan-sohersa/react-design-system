import React, { type FC, type ReactNode } from 'react';
export declare enum AnchorColors {
    foreground = "foreground",
    primary = "primary",
    secondary = "secondary",
    success = "success",
    warning = "warning",
    danger = "danger"
}
export declare enum AnchorSizes {
    small = "sm",
    medium = "md",
    large = "lg"
}
export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    color?: AnchorColors;
    isExternal?: boolean;
    isBlock?: boolean;
    size?: AnchorSizes;
    onFocus?: any;
    onFocusCapture?: any;
    onBlur?: any;
    onBlurCapture?: any;
}
export declare const Anchor: FC<AnchorProps>;
