export interface NavBarSettings extends MainMenuSettings, HamburgerSettings {
    navBarBackgroundColor?: string;
    navBarMargin?: string;
    navBarPadding?: string;
    navBarWideLeftSlotFlex?: string;
    navBarWideRightSlotFlex?: string;
}


export interface MainMenuSettings extends BranchMenuItemSettings {
    mainMenuBackgroundColor?: string;
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
    menuItemFontFamily?: string;
    menuItemFontSize?: string;
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
        navBarBackgroundColor: menuBackgroundColor,
        navBarMargin: '0',
        navBarPadding: '0',
        navBarWideLeftSlotFlex: '0 0 auto',
        navBarWideRightSlotFlex: '0 0 auto',

        mainMenuBackgroundColor: 'inherit',
        mainMenuMargin: '0',
        mainMenuPadding: '0',
        wideMainMenuFlexGap: '0.8rem',
        narrowMainMenuFlexGap: '0.18rem',
        narrowMainMenuBoxShadow: '0 .1rem .4rem black',

        wideSubMenuBackgroundColor: menuBackgroundColor,
        wideSubMenuBoxShadow: '0.12rem 0.12rem 0.12rem #2f3340',
        wideSubMenuMargin: '0',
        wideSubMenuPadding: '0.1rem 0.2rem 0.1rem 0.2rem',
        narrowMenuItemPadding: '0 0.2rem 0 0.7rem',
        upDownMenuItemClickBackgroundColor: narrowSubMenuBackgroundColor,
        narrowSubMenuFlexGap: '0.18rem',
        narrowSubMenuMargin: '-0.18rem 0 0 0',
        narrowSubMenuPadding: '0.36rem 0 0 0',
        narrowSubMenuMenuItemPadding: '0 0 0 1.7rem',
        narrowSubMenuBackgroundColor: narrowSubMenuBackgroundColor,

        menuItemFontFamily: 'inherit',
        menuItemFontSize: '1.2rem',
        menuItemTextDecoration: 'none',
        menuItemColor: '#021426',
        menuItemMargin: '0',
        menuItemPadding: '0',
        menuItemHoverBackgroundColor: '#97c7e7',

        hamburgerWidth: '1.8rem',
        hamburgerHeight: '0.8rem',
        hamburgerPointer: 'pointer',

        hamburgerTopOffset: '0.1rem',
        hamburgerTopHeight: '0.2rem',
        hamburgerTopBackgroundColor: hamburgerTopBackgroundColor,
        hamburgerTopTransition: 'all 0.3s ease-in-out',

        hamburgerBottomOffset: '0.1rem',
        hamburgerBottomWidth: '1.4rem',
        hamburgerBottomHeight: '0.2rem',
        hamburgerBottomBackgroundColor: hamburgerTopBackgroundColor,
        hamburgerBottomTransition: 'transform 0.3s ease-in-out',
    }
}
