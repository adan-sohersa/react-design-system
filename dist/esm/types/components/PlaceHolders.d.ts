import React, { InputHTMLAttributes, ReactNode } from "react";
interface PlaceHolderProps extends InputHTMLAttributes<HTMLInputElement> {
    children: ReactNode;
}
declare const PlaceHolder: ({ children, ...props }: PlaceHolderProps) => React.JSX.Element;
export default PlaceHolder;
