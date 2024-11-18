import { navigate } from 'astro/virtual-modules/transitions-router.js';

export class MenuClickProcessor {
    dataClickEventer: MenuClickProcessor.DataClickEventer | undefined;

    private readonly branchMenuItemElements = new Array<Element>();
    private _droppedBranchMenuItemElement: Element | undefined;


    constructor() {
        const hamburgerIcon = document.querySelector('.hamburger');
        if (hamburgerIcon === null) {
            throw new Error('Hamburger Icon not found');
        } else {
            const mainMenuComponent = document.querySelector('.main-menu');
            if (mainMenuComponent === null) {
                throw new Error('MainMenu Component not found');
            } else {
                hamburgerIcon.addEventListener('click', () => {
                    this.ensureBranchNotDropped();
                    hamburgerIcon.classList.toggle(MenuClickProcessor.hamburgerActiveClassName);
                    mainMenuComponent.classList.toggle(MenuClickProcessor.mainMenuDisplayedClassName);
                });

                const branchMenuItemElementList = mainMenuComponent.querySelectorAll('.branch-menu-item');
                branchMenuItemElementList.forEach((element) => {
                    const upDownMenuItemClickElement = element.querySelector('.up-down-menu-item-click');
                    if (upDownMenuItemClickElement === null) {
                        throw new Error(`UpDownMenuItemClick element for "${element.innerHTML}" not found`);
                    } else {
                        this.branchMenuItemElements.push(element);
                        upDownMenuItemClickElement.addEventListener('click', () => {

                            if (this._droppedBranchMenuItemElement === undefined) {
                                this._droppedBranchMenuItemElement = element;
                                element.classList.toggle(MenuClickProcessor.branchMenuItemDroppedClassName);
                            } else {
                                if (element === this._droppedBranchMenuItemElement) {
                                    element.classList.toggle(MenuClickProcessor.branchMenuItemDroppedClassName);
                                } else {
                                    this._droppedBranchMenuItemElement.classList.remove(MenuClickProcessor.branchMenuItemDroppedClassName);
                                    this._droppedBranchMenuItemElement = element;
                                    element.classList.add(MenuClickProcessor.branchMenuItemDroppedClassName);
                                }
                            }
                        });
                    }
                });

                const leafMenuItemElementList = mainMenuComponent.querySelectorAll('.leaf-menu-item');
                leafMenuItemElementList.forEach((element) => {
                    if (element instanceof HTMLElement) {
                        element.addEventListener('click', () => {
                            this.ensureBranchNotDropped();
                            hamburgerIcon.classList.remove(MenuClickProcessor.hamburgerActiveClassName);
                            mainMenuComponent.classList.remove(MenuClickProcessor.mainMenuDisplayedClassName);

                            const dataset = element.dataset;
                            const data = dataset.data;
                            const url = dataset.url;

                            let handled: boolean;
                            if (this.dataClickEventer === undefined) {
                                handled = false;
                            } else {
                                handled = this.dataClickEventer(element, data, url);
                            }

                            if (!handled && url !== undefined) {
                                navigate(url);
                            }
                        });
                    }
                });
            }
        }
    }

    private ensureBranchNotDropped() {
        if (this._droppedBranchMenuItemElement !== undefined) {
            this._droppedBranchMenuItemElement.classList.remove(MenuClickProcessor.branchMenuItemDroppedClassName);
            this._droppedBranchMenuItemElement = undefined;
        }
    }
}

export namespace MenuClickProcessor {
    export type DataClickEventer = (this: void, element: HTMLElement, data: string | undefined, url: string | undefined) => boolean; // true if handled

    export const hamburgerActiveClassName = 'active';
    export const mainMenuDisplayedClassName = 'displayed';
    export const branchMenuItemDroppedClassName = 'dropped';
}

export const menuClickProcessor = new MenuClickProcessor();
