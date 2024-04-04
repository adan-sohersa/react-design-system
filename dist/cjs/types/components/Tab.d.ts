import React, { type ReactNode, type FC } from 'react';
interface TabProps extends React.OptionHTMLAttributes<Element> {
    children: ReactNode;
    tabLabel?: ReactNode;
    titleValue?: string;
    href?: string;
    rel?: string;
    ping?: string;
    download?: boolean | string;
}
export declare const Tab: FC<TabProps>;
export {};
