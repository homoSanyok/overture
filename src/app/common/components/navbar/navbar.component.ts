/**
 * @module NavbarComponent
 */

import {Component, inject} from '@angular/core';
import {SettingsButtonComponent} from '../settings-button/settings-button.component';
import {SettingsService} from '../../../services/settings.service';
import {ButtonComponent} from '../../../shared/button/button.component';
import {LinkT} from '../../types/LinkT';
import {Tooltip} from "primeng/tooltip";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
        SettingsButtonComponent,
        ButtonComponent,
        Tooltip
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
/**
 * Компонент панели навигации.
 */
export class NavbarComponent {
    private readonly settings = inject(SettingsService);

    /**
     * Получение списка всех элементов ссылок для шаблона.
     */
    get links() {
        return this.settings.links();
    }

    /**
     * Получение текущей выбранной ссылки для шаблона.
     */
    get selectedLink() {
        return this.settings.selectedLink();
    }

    /**
     * Получение текущего выбранного для редактирвоания
     */
    get selectedEditingLink() {
        return this.settings.selectedEditingLink();
    }

    /**
     * Возвращает значение сигнала: был ли произведён ресайз области, - для шаблона.
     */
    get isResized() {
        return this.settings.isResized();
    }

    /**
     * Обработка клика по кнопке ссылки.
     * Задаёт сигналу `selectedLink` сервиса {@link SettingsService} значение
     * выбранной ссылки, либо `undefined`, если было произведено нажатие
     * на уже выбранную ссылку.
     *
     * @param link - выбранный элемент ссылки.
     */
    onClickLink(link: LinkT) {
        const selectedLink = this.settings.selectedLink();
        const selectedEditingLink = this.settings.selectedEditingLink();

        if (selectedEditingLink) {
            if (selectedLink?.id !== link.id) {
                this.settings.selectedLink.set(link);
            }

            this.settings.selectedEditingLink.set(undefined);
            return;
        }

        if (!selectedLink || selectedLink.id !== link.id) {
            this.settings.selectedLink.set(link);
            return;
        }

        this.settings.selectedLink.set(undefined);
    }

    /**
     * Обработка клика по кнопке редактирования ссылки.
     * Задаёт сигналу `selectedEditingLink` сервиса {@link SettingsService} значение
     * выбранной ссылки, либо `undefined`, если было произведено нажатие
     * на уже выбранную ссылку.
     *
     * @param link - выбранный элемент ссылки.
     */
    onClickEditingLink(link: LinkT) {
        const selectedEditingLink = this.settings.selectedEditingLink();
        if (selectedEditingLink?.id === link.id) {
            // При нажатии по уже выбранной кнопке
            // Убираем выбор меню и кнопки
            this.settings.selectedEditingLink.set(undefined);
            this.settings.selectedMenu.set(undefined);
            return;
        }

        // Задаём сигналу выбранную кнопку и выбираем меню
        this.settings.selectedEditingLink.set(link);
        this.settings.selectedMenu.set("edit");
    }

    onClickResizeButton() {
        window.dispatchEvent(new Event('resetsize'));
    }
}
