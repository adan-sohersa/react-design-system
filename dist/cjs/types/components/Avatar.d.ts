import React from 'react';
declare enum AvatarColors {
    default = "default",
    primary = "primary",
    secondary = "secondary",
    success = "success",
    warning = "warning",
    danger = "danger"
}
declare enum AvatarSizes {
    sm = "sm",
    md = "md",
    lg = "lg"
}
declare enum AvatarRadius {
    full = "full",
    large = "lg",
    medium = "md",
    small = "sm"
}
interface AvatarProps {
    photo?: string;
    size?: AvatarSizes;
    disabled?: boolean;
    bordered?: boolean;
    radiusSize?: AvatarRadius;
    color?: AvatarColors;
    optionalText: string;
}
declare const Avatar: React.FC<AvatarProps>;
export { AvatarColors, AvatarRadius, AvatarSizes, Avatar as default };
