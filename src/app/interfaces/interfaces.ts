/**
 * Header Interface Model
 */
export interface HeaderSettings {
    logoUrl: string;
    orgName: string;
    menus?: MenuData[];
    user: User;
}

/**
 * Header Menu Interface Model
 */
export interface MenuData {
    title: string;
    link: string;
}

/**
 * User Info Interface Model
 */
export interface User {
    userName: string;
    profileImage: string;
    tags?: Tag[];
}

/**
 * User Profile tags Interface Model
 */
export interface Tag {
    detail: string;
    link: string;
}

/**
 * User Info Interface Model
 */
export interface Menu {
    menuItems: MenuItem[];
}

/**
 * User Info Interface Model
 */
export interface MenuItem {
    title: string;
    link: string;
    icon?: string;
}

