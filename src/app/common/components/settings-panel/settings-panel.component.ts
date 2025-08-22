/**
 * @module SettingsPanelComponent
 */
import {Component, computed, effect, ElementRef, inject, signal, untracked, viewChild} from '@angular/core';
import {ButtonComponent} from '../../../shared/button/button.component';
import {SettingsService} from '../../../services/settings.service';
import {SettingsItemsT} from '../../types/SettingsItems';
import {LinkT} from '../../types/LinkT';
import {SettingsLinks} from "../../constants/SettingsLinks";

@Component({
    selector: 'app-settings-panel',
    standalone: true,
    imports: [
        ButtonComponent
    ],
    templateUrl: './settings-panel.component.html',
    styleUrl: './settings-panel.component.scss'
})
/**
 * Компонент панели настроек.
 * Предоставляет пользователю интерфейс выбора одного из
 * доступных меню настроек.
 */
export class SettingsPanelComponent {
    private readonly settings = inject(SettingsService);

    readonly SettingsLinks= SettingsLinks;

    /**
     * Ссылка на родительский контейнер компонента.
     * Используется в {@link onSettingsOpen} для изменения размера компонента.
     * @private
     */
    private readonly componentRef = viewChild<ElementRef<HTMLDivElement>>('componentRef');

    /**
     * Получение текущего выбранного меню для шаблона.
     * Используется для стилизации элементов меню при условии,
     * что меню выбрано пользователем.
     */
    readonly selectedMenu = computed(() => {
        if (this.settings.selectedEditingLink()) {
            // Если выбрано меню редактирования элемента link
            // значит в панели настроек ничего не выбрано.
            return;
        }

        return this.settings.selectedMenu();
    });

    /**
     * Возвращает {@link SettingsService.open} для шаблона.
     */
    readonly isOpened = computed(() => {
       return this.settings.open();
    });

    /**
     * Функция обработки нажатия по одной из кнопок панели меню.
     *
     * По нажатии задаёт сигналу {@link selectedMenu} значение `id` из параметра.
     * Если нажатие было произведено по уже выбранному элементу настроек,
     * задаёт {@link selectedMenu} `undefined`.
     *
     * @param id - id кнопки, на которую было произведено нажатие.
     * В контексте компонента {@link SettingsPanelComponent} id представляет собой одно из возможных
     * состояний меню.
     */
    onClick(id: string) {
        if (this.settings.selectedEditingLink()) {
            // Если пользователем до этого действия было выбрано меню редактирования
            // элемента link.

            // Глобальному сигналу текущего выбранного меню задаётся значение выбранного
            // пользователем меню.
            this.settings.selectedMenu.set(id as SettingsItemsT);

            // Обнуляется выбор текущего открытого меню для редактирования элемента link.
            this.settings.selectedEditingLink.set(undefined);
            return;
        }

        if (this.settings.selectedMenu() === id) {
            // Если пользователь нажал на элемент,
            // который до этого уже был выбран.
            this.settings.selectedMenu.set(undefined);
            return;
        }

        // Если предыдущие условия не прошли, глобальному состоянию
        // выбранного меню задаётся меню, которое данным действием выбрал пользователь.
        this.settings.selectedMenu.set(id as SettingsItemsT);
    }

    /**
     * Функция обработки изменения состояния открытия панели настроек.
     *
     * Если панель настроек `открыта`, изменяет ширину панели.
     *
     * Если панель настроек `закрыта`, задаёт ширину панели равную нулю
     * и затирает последний глобальный выбор меню.
     * @private
     */
    private onSettingsOpen() {
        const open = this.settings.open();

        untracked(() => {
            const componentElement = this.componentRef()?.nativeElement;
            if (!componentElement) return;

            if (open) {
                // Если панель настроек открыта,
                // задаёт компоненту ширину равную количеству элементов панели настроек
                // умноженному на 38.
                componentElement.style.width = `${this.SettingsLinks.length * 38}px`;
                return;
            }

            // Если панель настроек закрыта,
            // задаёт ширину панели равную нулю и затирает глобально выбранное меню.
            componentElement.style.width = "0";
            this.settings.selectedMenu.set(undefined);
        });
    }

    constructor() {
        // effect(this.onSettingsOpen.bind(this));
    }

    protected readonly open = open;
}
