import React, { type ReactNode, type FC } from 'react';
interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    key?: React.Key | null | undefined;
}
export declare const AccordionItem: FC<AccordionItemProps>;
export {};
