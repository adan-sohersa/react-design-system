import React, { type ReactNode, type FC } from 'react';
export declare enum CardVariants {
    flat = "false",
    blurred = "true"
}
export declare enum CardShadows {
    none = "none",
    sm = "sm",
    md = "md",
    lg = "lg"
}
export declare enum CardRadius {
    none = "none",
    sm = "sm",
    md = "md",
    lg = "lg"
}
interface CardProps extends React.AllHTMLAttributes<Element> {
    header?: ReactNode;
    image?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    shadow?: CardShadows;
    variant?: CardVariants;
    disbled?: boolean;
    animated?: boolean;
    clickeable?: boolean;
    onFocus?: any;
    bodyClassNames?: string;
}
declare const Card: FC<CardProps>;
export default Card;
