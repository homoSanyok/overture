import {LinkT} from "../types/LinkT";
import {SettingsItemsT} from "../types/SettingsItems";

/**
 * Список кнопок панели настроек.
 *
 * Используется в компоненте {@link SettingsPanelComponent} для задачи списка
 * доступных кнопок в панели настроек.
 */
export const SettingsLinks: LinkT[] = [
    {
        id: "edit" as SettingsItemsT,
        iconSrc: "/plus.svg",
        label: "",
        path: ""
    },
    {
        id: "palette" as SettingsItemsT,
        iconSrc: "/palette.svg",
        label: "",
        path: ""
    }
];