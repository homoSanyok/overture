/**
 * @module SettingsButtonComponent
 */
import {Component, effect, ElementRef, inject, signal, untracked, viewChild} from '@angular/core';
import {SettingsService} from '../../../services/settings.service';
import {SettingsPanelComponent} from '../settings-panel/settings-panel.component';
import {APP_BASE_HREF, NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'app-settings-button',
    standalone: true,
    imports: [
        SettingsPanelComponent,
    ],
    templateUrl: './settings-button.component.html',
    styleUrl: './settings-button.component.scss'
})
/**
 * Компонент кнопки настроек.
 * По клику раскрывает панель настроек и расширяет {@link NavbarComponent},
 * отображая тем самым кнопки редактирования элементов link.
 */
export class SettingsButtonComponent {
    private readonly settings = inject(SettingsService);

    /**
     * Сигнал хранит состояние наведена ли мышь на компонент кнопки.
     * Необходим для применения стилей при наведении мыши на компонент.
     * @private
     */
    readonly hovered = signal<boolean>(false);

    /**
     * Сигнал хранит состояние выбран ли компонент кнопки.
     * Необходим для применения стилей при выборе компонента.
     * @private
     */
    readonly selected = signal<boolean>(false);

    /**
     * Функция обработки перехода мыши на компонент.
     * Задаёт сигналу {@link hovered} значение `true`.
     */
    onMouseEnter() {
        const selected = this.selected();
        // Если кнопка нажата, ничего не делать.
        if (selected) return;

        const hovered = this.hovered();
        // Если значение сигнала уже равно true,
        // ничего не делает.
        if (hovered) return;

        this.hovered.set(true);
    }

    /**
     * Функция обработки выхода мыши за компонент.
     * Задаёт сигналу {@link hovered} значение `false`.
     */
    onMouseLeave() {
        const hovered = this.hovered();
        // Если значение сигнала уже равно false,
        // ничего не делает.
        if (!hovered) return;

        this.hovered.set(false);
    }

    /**
     * Функция обработки нажатия на кнопку компонента.
     * Задаёт сигналу {@link selected} значение равное отрицанию его текущего значения.
     * Задаёт сигналу {@link SettingsService.open} значение равное отрицанию его текущего значения.
     */
    onClick() {
        this.selected.update(selected => !selected);
        this.settings.open.update(open => !open);
    }

    /**
     * Обработка события закрытия меню настроек через сервис {@link SettingsService}.
     * Задаёт сигналу {@link selected} значение `false`, если меню было закрыто.
     * @private
     */
    private onSettingsOpenChanged() {
        const open = this.settings.open();

        if (open) {
            // Если панель настроек открыта, ничего не делает.
            return;
        }
        // Если панель настроек закрыта, снимает выделение с кнопки компонента.
        untracked(() => this.selected.set(false));
    }

    constructor() {
        effect(this.onSettingsOpenChanged.bind(this));
    }
}
