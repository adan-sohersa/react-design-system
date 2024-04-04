import React, { type ReactNode, type FC } from 'react';
interface DropDownItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    key?: React.Key | null | undefined;
}
export declare const DropDownItem: FC<DropDownItemProps>;
export {};
