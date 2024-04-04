import React, { type ReactNode, type FC } from 'react';
import { type ButtonVariants, type ButtonColors, type ButtonSize, type ButtonRadius, type ButtonProps } from '@/src/general/infraestructure/ui/react/Button';
declare enum ModalSize {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl"
}
declare enum ModalShadow {
    none = "none",
    small = "smll",
    medium = "med",
    large = "large"
}
declare enum ModalBackdrop {
    none = "transparent",
    opaque = "opaque",
    blur = "blur"
}
interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    closingCallback?: (...args: any) => any;
    children: ReactNode;
    actions?: ButtonProps[];
    title?: string;
    size?: ModalSize;
    backdrop?: ModalBackdrop;
    shadow?: ModalShadow;
    buttonChildren: ReactNode;
    buttonVariant?: ButtonVariants;
    buttonColor?: ButtonColors;
    buttonSize?: ButtonSize;
    buttonRadius?: ButtonRadius;
    buttonDisabled?: boolean;
}
declare const Modal: FC<ModalProps>;
export type { ModalSize, ModalShadow, ModalBackdrop, ModalProps };
export default Modal;
