export interface MenuTemplate {
    label: string;
    hkey?: string;
    role: string;
    link?: string;
    submenu?: MenuTemplate[];
  }