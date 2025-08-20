/**
 * @module NavbarComponent
 */

import {Component, computed, inject} from '@angular/core';
import {SettingsButtonComponent} from '../settings-button/settings-button.component';
import {SettingsService} from '../../../services/settings.service';
import {ButtonComponent} from '../../../shared/button/button.component';
import {LinkT} from '../../types/LinkT';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
        SettingsButtonComponent,
        ButtonComponent,
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
/**
 * Компонент панели навигации.
 *
 * Реализует отображение списка элементов link,
 * списка кнопок редактирования этих элементов, а также
 * отображает компонент {@link SettingsButtonComponent}.
 */
export class NavbarComponent {
    /**
     * {@link SettingsService}
     * @private
     */
    private readonly settings = inject(SettingsService);

    /**
     * Возвращает {@link SettingsService.links} для шаблона.
     */
    readonly links = computed(() => {
        return this.settings.links();
    });

    /**
     * Возвращает {@link SettingsService.selectedLink} для шаблона.
     */
    readonly selectedLink = computed(() => {
        return this.settings.selectedLink();
    });

    /**
     * Возвращает {@link SettingsService.selectedEditingLink} для шаблона.
     */
    readonly selectedEditingLink = computed(() => {
        return this.settings.selectedEditingLink();
    });

    /**
     * Возвращает булевое значение состояния {@link SettingsService.resize} для шаблона.
     *
     * Если размер области был изменён, вернёт `true`.
     * В противном случае `false`.
     */
    readonly isResized = computed(() => {
        const selectedMenu = this.settings.selectedMenu();
        if (!selectedMenu) {
            // Если выбрано основное меню
            return Boolean(this.settings.resize());
        }

        return false;
    });

    /**
     * Обработка нажатия по кнопке элемента link.
     *
     * Задаёт сигналу {@link SettingsService.selectedLink} значение
     * выбранной ссылки из параметра, либо `undefined`, если было произведено нажатие
     * на уже выбранную ссылку.
     *
     * @param link - выбранный элемент link.
     */
    onClickLink(link: LinkT) {
        const selectedLink = this.settings.selectedLink();

        if (this.settings.selectedEditingLink()) {
            // Если выбран элемент link для редактирования,
            // выбирает элемент link по которому нажал пользователель,
            // закрывает панель настроек и сбрасывает выбранный для редактирования элемент.

            this.settings.selectedLink.set(link);
            this.settings.selectedEditingLink.set(undefined);
            this.settings.open.set(false);
            return;
        }

        if (!selectedLink || selectedLink.id !== link.id) {
            // Если до этого не был выбран элемент link или выбранный ранее
            // элемент не совпадает с текущим выбранным, выбирает новый элемент.

            this.settings.selectedLink.set(link);
            return;
        }

        // Если выбранный элемент совпадает с ранее выбранным,
        // сбрасывает выбор элемента.
        this.settings.selectedLink.set(undefined);
    }

    /**
     * Обработка нажатия по кнопке редактирования элемента link.
     *
     * Задаёт сигналу {@link SettingsService.selectedEditingLink} значение
     * выбранного элемента link из параметра, либо `undefined`, если было произведено нажатие
     * на уже выбранный элемент.
     *
     * @param link - выбранный элемент link.
     */
    onClickEditingLink(link: LinkT) {
        if (this.settings.selectedEditingLink()?.id === link.id) {
            // Если был выбран ранее выбранный элемент,
            // затирает текущий выбор меню настроек и элемента для редактирования.

            this.settings.selectedEditingLink.set(undefined);
            this.settings.selectedMenu.set(undefined);
            return;
        }

        // Если выбран новый элемент редактирования,
        // открывает меню настроек edit
        this.settings.selectedEditingLink.set(link);
        this.settings.selectedMenu.set("edit");
    }

    /**
     * Обработка нажатия на кнопку сброса размера компонента {@link ContentComponent}.
     *
     * По нажатии генерирует событие `resetsize`.
     * В компоненте {@link ContentComponent} прописан слушатель данного события.
     */
    onClickResizeButton() {
        window.dispatchEvent(new Event('resetsize'));
    }
}
