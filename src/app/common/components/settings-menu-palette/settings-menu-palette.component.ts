import {Component, inject} from '@angular/core';
import {SettingsService} from "../../../services/settings.service";
import {Presets} from "../../constants/Presets";
import {PresetT} from "../../types/PresetT";

@Component({
  selector: 'app-settings-menu-palette',
  standalone: true,
  imports: [],
  templateUrl: './settings-menu-palette.component.html',
  styleUrl: './settings-menu-palette.component.scss'
})
/**
 * Компонент меню настроек изменения темы всего приложения.
 */
export class SettingsMenuPaletteComponent {
    private settings = inject(SettingsService);
    readonly Presets = Presets;

    /**
     * Получение имени выбранного пресета для шаблона.
     */
    get selectedPresetName() {
        return this.settings.selectedPreset().name;
    }

    /**
     * Функция обработки клика по пресету.
     * Задаёт сигналу `selectedPreset` сервиса {@link SettingsService} значение
     * выбранного пользователем пресета.
     */
    onClickPreset(preset: PresetT) {
        const selectedPreset = this.settings.selectedPreset();
        if (selectedPreset.name === preset.name) return;

        this.settings.selectedPreset.set(preset);
    }
}
