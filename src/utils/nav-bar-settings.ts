export interface NavBarSettings extends MainMenuSettings, HamburgerSettings {
    navBarBackgroundColor?: string;
    navBarMargin?: string;
    navBarPadding?: string;
    navBarWideLeftSlotFlex?: string;
    navBarWideRightSlotFlex?: string;
}


export interface MainMenuSettings extends BranchMenuItemSettings {
    mainMenuFontFamily?: string;
    wideMainMenuFontSize?: string;
    narrowMainMenuFontSize?: string;
    mainMenuBackgroundColor?: string;
    narrowMainMenuMaxWidth?: string;
    mainMenuMargin?: string;
    mainMenuPadding?: string;
    wideMainMenuFlexGap?: string;
    narrowMainMenuFlexGap?: string;
    narrowMainMenuBoxShadow?: string;
}

export interface BranchMenuItemSettings extends LeafMenuItemSettings {
    wideSubMenuBackgroundColor?: string;
    wideSubMenuBoxShadow?: string;
    wideSubMenuMargin?: string;
    wideSubMenuPadding?: string;
    narrowMenuItemPadding?: string;
    upDownMenuItemClickBackgroundColor?: string;
    narrowSubMenuFlexGap?: string;
    narrowSubMenuMargin?: string;
    narrowSubMenuPadding?: string;
    narrowSubMenuMenuItemPadding?: string;
    narrowSubMenuBackgroundColor?: string;
}

export interface LeafMenuItemSettings {
    menuItemTextDecoration?: string;
    menuItemColor?: string;
    menuItemMargin?: string;
    menuItemPadding?: string;
    menuItemHoverBackgroundColor?: string;
}

export interface HamburgerSettings {
    hamburgerWidth?: string;
    hamburgerHeight?: string;
    hamburgerPointer?: string;
    hamburgerTopOffset?: string;

    // hamburgerTopWidth?: string; // will always be the same as hamburger width
    hamburgerTopHeight?: string;
    hamburgerTopBackgroundColor?: string;
    hamburgerTopTransition?: string;

    hamburgerBottomOffset?: string;
    hamburgerBottomWidth?: string;
    hamburgerBottomHeight?: string;
    hamburgerBottomBackgroundColor?: string;
    hamburgerBottomTransition?: string;
}

export namespace LightBlueTones {
    const menuBackgroundColor = '#d0dae0';
    const narrowSubMenuBackgroundColor = '#bcc3c8';
    const hamburgerTopBackgroundColor = '#3a62e5';

    export const settings: NavBarSettings = {
        narrowMainMenuFontSize: '1.8rem',
        navBarBackgroundColor: menuBackgroundColor,
        navBarMargin: '0',
        navBarPadding: '0',
        navBarWideLeftSlotFlex: '0 0 auto',
        navBarWideRightSlotFlex: '0 0 auto',

        mainMenuFontFamily: 'inherit',
        wideMainMenuFontSize: '1.2rem',
        mainMenuBackgroundColor: 'inherit',
        narrowMainMenuMaxWidth: '15em',
        mainMenuMargin: '0',
        mainMenuPadding: '0',
        wideMainMenuFlexGap: '0.8em',
        narrowMainMenuFlexGap: '0.18em',
        narrowMainMenuBoxShadow: '0 .1em .4em black',

        wideSubMenuBackgroundColor: menuBackgroundColor,
        wideSubMenuBoxShadow: '0.14em 0.14em 0.14em #2f3340',
        wideSubMenuMargin: '0',
        wideSubMenuPadding: '0.2em 0.2em 0.1em 0.2em',
        narrowMenuItemPadding: '0 0.2em 0 0.8rem',
        upDownMenuItemClickBackgroundColor: narrowSubMenuBackgroundColor,
        narrowSubMenuFlexGap: '0.18em',
        narrowSubMenuMargin: '-0.18rem 0 0 0',
        narrowSubMenuPadding: '0.36rem 0 0 0',
        narrowSubMenuMenuItemPadding: '0 0 0 1.8rem',
        narrowSubMenuBackgroundColor: narrowSubMenuBackgroundColor,

        menuItemTextDecoration: 'none',
        menuItemColor: '#021426',
        menuItemMargin: '0',
        menuItemPadding: '0',
        menuItemHoverBackgroundColor: '#97c7e7',

        hamburgerWidth: '1.7em',
        hamburgerHeight: '0.8em',
        hamburgerPointer: 'pointer',

        hamburgerTopOffset: '0.1em',
        hamburgerTopHeight: '0.2em',
        hamburgerTopBackgroundColor: hamburgerTopBackgroundColor,
        hamburgerTopTransition: 'all 0.3s ease-in-out',

        hamburgerBottomOffset: '0.1em',
        hamburgerBottomWidth: '1.4em',
        hamburgerBottomHeight: '0.2em',
        hamburgerBottomBackgroundColor: hamburgerTopBackgroundColor,
        hamburgerBottomTransition: 'transform 0.3s ease-in-out',
    }
}
