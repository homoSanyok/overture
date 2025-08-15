/**
 * @module SettingsMenuEditComponent
 */
import {Component, computed, effect, inject, untracked} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {v4 as uuid} from 'uuid';
import {SettingsService} from '../../../services/settings.service';
import {LinkT} from '../../types/LinkT';
import {Button} from 'primeng/button';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {Message} from 'primeng/message';

@Component({
    selector: 'app-settings-menu-edit',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        Button,
        FloatLabel,
        InputText,
        Message
    ],
    templateUrl: './settings-menu-edit.component.html',
    styleUrl: './settings-menu-edit.component.scss'
})
/**
 * Компонент меню настроек изменения параметров элемента link.
 *
 * Предоставляет интерфейс создания и редактирования элемента link.
 * В режиме редактирования доступен интерфейс удаления элемента.
 */
export class SettingsMenuEditComponent {
    /**
     * {@link SettingsService}
     * @private
     */
    private readonly settings = inject(SettingsService);

    /**
     * Группа контроллеров форм ввода параметров элемента link.
     *
     * Задаёт контроллеры для форм ввода `заголовка`, `ссылки на иконку` и
     * `ссылки на приложение` элемента link.
     */
    readonly controls = new FormGroup({
        label: new FormControl<string>(""),
        iconSrc: new FormControl<string>(""),
        path: new FormControl<string>("")
    });

    /**
     * Метод возвращает флаг: открыто ли меню в режиме редактирования
     * элемента или в режиме создания.
     *
     * @returns {boolean}
     * - `true` - в режиме редактирования (в интерфейсе появляется кнопка удаления элемента);
     * - `false` - в режиме создания.
     */
    readonly isEditing = computed(() => {
        return Boolean(this.settings.selectedEditingLink());
    });

    /**
     * Функция обработки нажатия на кнопку сохранения.
     *
     * Проверяет валидность введённых в формы значений,
     * после чего проверяет в каком режиме открыто меню вызовом функции
     * {@link isEditing} и в зависимости от вернувшегося значения
     * вызывает функцию {@link onCreate} или {@link onUpdate}.
     */
    onClickSave() {
        const labelControl = this.controls.controls.label;
        const iconControl = this.controls.controls.iconSrc;
        const pathControl = this.controls.controls.path;

        if (!labelControl.value) {
            // Если поле заголовка пустое,
            // возвращает ошибку ввода формы.
            labelControl.setErrors({empty: true});
            labelControl.markAsTouched();
            return;
        }

        if (!pathControl.value) {
            // Если поле ссылки на web ресурс пустое,
            // возвращает ошибку ввода формы.
            pathControl.setErrors({empty: true});
            pathControl.markAsTouched();
            return;
        }

        if (!this.isEditing()) {
            // Если меню открыто в режиме создания нового элемента,
            // вызывает функцию создания.
            this.onCreate(labelControl.value, iconControl.value, pathControl.value);
            return;
        }
        // Если меню открыто в режиме редактирования элемента,
        // вызывает функцию обновления элемента.
        this.onUpdate(labelControl.value, iconControl.value, pathControl.value);
    }

    /**
     * Функция создаёт новый объект элемента link по заданным
     * в аргументах параметрам и записывает его в глобальный
     * сигнал {@link SettingsService.links}.
     * @private
     */
    private onCreate(label: string, iconSrc: string | null, path: string) {
        // Создание объекта нового элемента link
        const link: LinkT = {
            id: uuid(),
            label: label,
            iconSrc: iconSrc || undefined,
            path: path
        }

        let links = structuredClone(this.settings.links());
        if (!links) {
            // Если в системе нет сохранённых элементов link (глобальный сигнал хранит значение undefined),
            // задаёт пустой массив
            links = [];
        }

        links.push(link);
        this.settings.links.set(links);
        this.settings.open.set(false);
    }

    /**
     * Функция обновления информации об элементе link.
     * Обновляет общий список элементов `links` сервиса {@link SettingsService}
     * и закрывает меню настроек.
     * @private
     */
    private onUpdate(label: string, iconSrc: string | null, path: string) {
        const selectedEditingLink = this.settings.selectedEditingLink();
        if (!selectedEditingLink) {
            // Если не выбран элемент link для редактирования.
            return;
        }

        const links = this.settings.links();
        if (!links) {
            // Если в системе на данный момент нет сохранённых элементов link.
            return;
        }

        const newLinks = structuredClone(links)
            .map(link => {
                if (link.id === selectedEditingLink.id) {
                    // Если id элемента link на текущей итерации цикла
                    // равен выбранному для редактирования элемента link
                    // возвращает объект выбранного элемента link с обновлёнными значениями полей.
                    return {
                        id: link.id,
                        label: label,
                        iconSrc: iconSrc || undefined,
                        path: path
                    }
                }

                return link;
            });

        this.settings.links.set(newLinks);
        this.settings.selectedEditingLink.set(undefined);
        this.settings.open.set(false);
    }

    /**
     * Обработка нажатия на кнопку удаления элемента link.
     *
     * По нажатии фильтрует список {@link SettingsService.links},
     * удаляя из него элемент с id, который пользователь выбрал для удаления.
     *
     * Записывает новый список в сигнал {@link SettingsService.links}.
     */
    onClickRemove() {
        const selectedEditingLink = this.settings.selectedEditingLink();
        if (!selectedEditingLink) {
            // Если не выбран элемент link для редактирования.
            return;
        }

        const links = this.settings.links();
        if (!links) {
            // Если в системе на данный момент нет сохранённых элементов link.
            return;
        }

        // Фильтрует список всех элементов link в системе, удаляя из него элемент с id,
        // который пользователь выбрал для удаления.
        const newLinks = structuredClone(links).filter(link => link.id !== selectedEditingLink.id);

        this.settings.links.set(newLinks);
        this.settings.selectedEditingLink.set(undefined);
        this.settings.open.set(false);
    }

    /**
     * Функция обработки изменения сигнала {@link SettingsService.selectedEditingLink}.
     *
     * Если пользователем был выбран элемент link для редактирования,
     * задаёт контроллерам группы {@link controls} значения выбранного элемента link.
     *
     * Если не выбран элемент link для редактирования, группе {@link controls}
     * задаётся базовое пустое значение как при инициализации.
     */
    private onSelectedEditingLinkChanged() {
        const selectedEditingLink = this.settings.selectedEditingLink();

        untracked(() => {
            if (!selectedEditingLink) {
                // Если не выбран элемент link для редактирования,
                // задаёт контроллерам форм ввода пустыне значения.
                this.controls.setValue({
                    label: "",
                    iconSrc: "",
                    path: ""
                });
                return;
            }

            // Если выбран элемент link для редактирования,
            // задаёт контроллерам форм ввода значения выбранного элемента link.
            this.controls.setValue({
                label: selectedEditingLink.label,
                iconSrc: selectedEditingLink.iconSrc || "",
                path: selectedEditingLink.path
            });
        });
    }

    constructor() {
        effect(this.onSelectedEditingLinkChanged.bind(this));
    }
}
