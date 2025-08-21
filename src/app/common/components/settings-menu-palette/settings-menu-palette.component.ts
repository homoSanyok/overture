/**
 * @module SettingsMenuPaletteComponent
 */
import {Component, computed, inject, OnDestroy, OnInit} from '@angular/core';
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
 * Компонент меню настроек изменения цветовой темы приложения.
 * Отображает палитру из предустановленных цветов.
 *
 * Выбранный пользователем цвет меняет цветовую тему приложения и
 * сохраняет это состояние в локальной памяти.
 */
export class SettingsMenuPaletteComponent implements OnInit, OnDestroy {
    private settings = inject(SettingsService);

    readonly Presets = Presets;

    /**
     * Возвращает параметр `name` текущей выбранной цветовой схемы.
     * Используется в шаблоне для выделения выбранного цвета бордером.
     */
    readonly selectedPresetName = computed(() => {
        return this.settings.selectedPreset().name;
    });

    /**
     * Функция обработки клика по иконке цвета.
     *
     * Задаёт сигналу {@link selectedPreset} значение
     * выбранного пользователем пресета.
     *
     * @param preset - выбранная пользователем цветовая схема.
     */
    onClickPreset(preset: PresetT) {
        if (this.settings.selectedPreset().name === preset.name) {
            // Если пользователь выбрал уже выбранный цвет,
            // ничего не делает.
            return;
        }

        this.settings.selectedPreset.set(preset);
    }

    /**
     * Функция обработки нажатия по клавишам.
     * Если был нажат `enter` закрывает меню выбора цветовой схемы.
     *
     * @param event
     * @private
     */
    private onKeyDown(event: KeyboardEvent) {
        if (event.key !== "Enter") return;
        this.settings.selectedMenu.set(undefined);
    }

    ngOnInit() { document.addEventListener("keydown", this.onKeyDown.bind(this)); }
    ngOnDestroy() { document.removeEventListener("keydown", this.onKeyDown.bind(this)); }
}
