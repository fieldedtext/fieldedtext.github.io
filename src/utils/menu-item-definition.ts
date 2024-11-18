export interface MenuItemDefinition {
    text: string;
    url?: string;
    title?: string;
    data?: string;
    children?: readonly MenuItemDefinition[];
}
