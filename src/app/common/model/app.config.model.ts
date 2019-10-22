export interface Menu {
  label: string;
  hkey?: string;
  role:string;
  link?: string;
  submenu?: Menu[];
  externalRedirect?: boolean;
  disabled?: boolean;
  expanded?: boolean;
}