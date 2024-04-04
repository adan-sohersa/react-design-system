import React from 'react';
import { type AnchorProps } from '@/src/general/infraestructure/ui/react/Anchor';
interface SidebarProps extends React.AllHTMLAttributes<Element> {
    links?: AnchorProps[];
}
declare const Sidebar: React.FC<SidebarProps>;
export { type SidebarProps, Sidebar as default };
