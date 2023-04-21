import { AccountCircleIcon, LogoutIcon, SettingsIcon } from "../components/common/icons";

export const listOfUserOptions = [
    {
        type: 'button',
        title: 'User Profile',
        name: 'User Profile',
        id: 'user_profile_button',
        key: 'USER_PROFILE_BUTTON',
        className: 'user_options_button',
        icon: AccountCircleIcon()
    },
    {
        type: 'button',
        title: 'Open Settings',
        name: 'Open User Settings',
        id: 'user_settings_button',
        key: 'USER_SETTINGS_BUTTON',
        className: 'user_options_button',
        icon: SettingsIcon()
    },
    {
        type: 'button',
        title: 'Log Out',
        name: 'Log Out User',
        id: 'user_logout_button',
        key: 'USER_LOGOUT_BUTTON',
        className: 'user_options_button',
        icon: LogoutIcon()
    }
];