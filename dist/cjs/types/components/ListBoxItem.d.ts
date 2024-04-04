import React from 'react';
import type { ReactNode, FC, HTMLAttributeAnchorTarget, FocusEventHandler } from 'react';
interface ListboxItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    children: ReactNode;
    key: string | number;
    description?: string | ReactNode;
    startContent?: ReactNode;
    endContent?: ReactNode;
    selectedIcon?: any;
    href?: string;
    target?: HTMLAttributeAnchorTarget;
    withDivider?: boolean;
    readOnly?: boolean;
    onFocus?: FocusEventHandler<Element>;
    onBlur?: FocusEventHandler<Element>;
}
export declare const ListboxItem: FC<ListboxItemProps>;
export {};
