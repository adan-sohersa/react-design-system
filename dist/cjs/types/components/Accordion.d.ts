import React from 'react';
import type { FC } from 'react';
declare enum AccordionColors {
    default = "default",
    primary = "primary",
    secondary = "secondary",
    success = "success",
    warning = "warning",
    danger = "danger"
}
declare enum AccordionVariants {
    unfilled = "light",
    filled = "shadow"
}
interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: any;
    animated?: boolean;
    disabled?: boolean;
    variant?: AccordionVariants;
    multipleSelecction?: boolean;
    color?: AccordionColors;
}
declare const Accordion: FC<AccordionProps>;
export { AccordionColors, AccordionVariants, Accordion as default };
