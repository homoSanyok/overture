/**
 * @module SettingsButtonComponent
 */
import {Component, effect, ElementRef, inject, signal, untracked, viewChild} from '@angular/core';
import {SettingsService} from '../../../services/settings.service';
import {SettingsPanelComponent} from '../settings-panel/settings-panel.component';

@Component({
    selector: 'app-settings-button',
    standalone: true,
    imports: [
        SettingsPanelComponent
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
    /**
     * {@link SettingsService}
     * @private
     */
    private readonly settings = inject(SettingsService);

    /**
     * Ссылка на главный контейнер компонента.
     * Применяется для динамической стилизации компонента.
     * @private
     */
    private readonly componentRef = viewChild<ElementRef<HTMLDivElement>>('componentRef');

    /**
     * Сигнал хранит состояние наведена ли мышь на компонент кнопки.
     * Необходим для применения стилей при наведении мыши на компонент.
     * @private
     */
    private readonly hovered = signal<boolean>(false);

    /**
     * Сигнал хранит состояние выбран ли компонент кнопки.
     * Необходим для применения стилей при выборе компонента.
     * @private
     */
    private readonly selected = signal<boolean>(false);

    /**
     * Функция обработки перехода мыши на компонент.
     * Задаёт сигналу {@link hovered} значение `true`.
     */
    onMouseEnter() {
        const hovered = this.hovered();
        if (hovered) {
            // Если значение сигнала уже равно true,
            // ничего не делает.
            return;
        }

        this.hovered.set(true);
    }

    /**
     * Функция обработки выхода мыши за компонент.
     * Задаёт сигналу {@link hovered} значение `false`.
     */
    onMouseLeave() {
        const hovered = this.hovered();
        if (!hovered) {
            // Если значение сигнала уже равно false,
            // ничего не делает.
            return;
        }

        this.hovered.set(false);
    }

    /**
     * Функция обработки нажатия на кнопку компонента.
     * Задаёт сигналу {@link selected} значение равное отрицанию его текущего значения.
     */
    onClick() {
        this.selected.update(selected => !selected);
    }

    /**
     * Функция обработки изменения состояния сигнала {@link hovered}.
     *
     * Если значение сигнала `true`, компоненту присваивается default цвет фона.
     * Если значение сигнала `false`, компоненту присваивается hover цвет фона.
     */
    private onHoveredChanged() {
        const hovered = this.hovered();

        untracked(() => {
            const selected = this.selected();
            if (selected) {
                // Если кнопка выбрана, ничего не делать.
                return;
            }

            const componentElement = this.componentRef()?.nativeElement;
            if (!componentElement) return;

            if (hovered) {
                // Если мышь наведена, задать более тёмный цвет фона
                componentElement.style.background = "var(--p-primary-200)";
                return;
            }
            // Если мышь не наведена, задать светлый цвет фона
            componentElement.style.background = "var(--p-primary-100)";
        });
    }

    /**
     * Функция обработки изменения значения сигнала {@link selected}.
     *
     * По изменении значения сигнала меняет ширину кнопки и задаёт ей
     * цвет фона в зависимости от состояния {@link selected}.
     */
    private onSelectedChanged() {
        const selected = this.selected();

        untracked(() => {
            const componentElement = this.componentRef()?.nativeElement;
            if (!componentElement) return;

            if (selected) {
                // Если кнопка выбрана, расширяет её,
                // задаёт более тёмный цвет фона и открывает панель настроек.
                componentElement.style.width = "70px";
                componentElement.style.background = "var(--p-primary-500)";
                this.settings.open.set(true);
            } else {
                // Если кнопка не выбрана, сужает её и
                // закрывает панель настроек.
                componentElement.style.width = "38px";
                this.settings.open.set(false);

                if (componentElement.matches(":hover")) {
                    // Если мышь наведена на кнопку в момент снятия с неё выбора,
                    // задаёт более тёмный цвет фона.
                    componentElement.style.background = "var(--p-primary-200)";
                } else {
                    // Если мышь не наведена на кнопку в момент снятия с неё выбора,
                    // задаёт более светлый цвет фона.
                    componentElement.style.background = "var(--p-primary-100)";
                }
            }
        });
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
        effect(this.onHoveredChanged.bind(this));
        effect(this.onSelectedChanged.bind(this));
        effect(this.onSettingsOpenChanged.bind(this));
    }
}
