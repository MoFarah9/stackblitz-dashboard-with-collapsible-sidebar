export interface SubMenuItem {
  label: string;
  path: string;
}

export interface MenuItem {
  label: string;
  icon: React.ReactNode;
  submenu?: SubMenuItem[];
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}