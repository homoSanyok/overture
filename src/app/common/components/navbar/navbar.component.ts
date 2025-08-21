/**
 * @module NavbarComponent
 */

import {Component, computed, ElementRef, inject, OnInit, viewChild} from '@angular/core';
import {SettingsButtonComponent} from '../settings-button/settings-button.component';
import {SettingsService} from '../../../services/settings.service';
import {ButtonComponent} from '../../../shared/button/button.component';
import {LinkT} from '../../types/LinkT';
import Sortable from "sortablejs";
import {ResizeService} from "../../../services/resize.service";
import {LinksService} from "../../../services/links.service";

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
export class NavbarComponent implements OnInit {
    private readonly settings = inject(SettingsService);
    private readonly resize = inject(ResizeService);
    private readonly links = inject(LinksService);

    /**
     * Возвращает {@link SettingsService.links} для шаблона.
     */
    readonly _links = computed(() => {
        return this.links.links();
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
     * Возвращает {@link SettingsService.open} для шаблона.
     */
    readonly settingsOpen = computed(() => {
        return this.settings.open();
    });

    /**
     * Ссылка на DOM элемент списка объектов links.
     * Используется для активации перетаскивания элементов links.
     * @private
     */
    private readonly linksList = viewChild<ElementRef<HTMLDivElement>>("linksList");

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
            return Boolean(this.resize.resize());
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

    /**
     * Функция инициализирует возможность сортировки компонентов
     * перетаскиванием.
     * @private
     */
    private initSortable() {
        const linksList = this.linksList()?.nativeElement;
        if (!linksList) return;

        const storable = Sortable.create(linksList, {
            animation: 150,
            onStart: () => this.links.sortable.set(true),
            onEnd: (event) => {
                this.links.sortable.set(false);

                this.links.links.update(links => {
                    // Если элементов ссылок нет или нет индексов элементов, ничего не делать.
                    if (!links || event.newIndex === undefined || event.oldIndex === undefined) return;

                    // Удаление перетаскиваемого элемента из массива и
                    // вставка его в новое место в массиве.
                    const sortableLinks = structuredClone(links);
                    const [movedItem] = sortableLinks.splice(event.oldIndex, 1);
                    sortableLinks.splice(event.newIndex, 0, movedItem);

                    return sortableLinks;
                });
            },
        });
    }

    ngOnInit() {
        this.initSortable();
    }
}
