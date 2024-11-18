export interface MenuItemDefinition {
    text: string;
    id?: string;
    url?: string;
    clickHandler?: () => (definition: MenuItemDefinition) => void;
    children?: readonly MenuItemDefinition[];
}
