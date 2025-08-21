/**
 * @module ButtonComponent
 */
import {Component, computed, effect, ElementRef, inject, input, signal, untracked, viewChild} from '@angular/core';
import {LinkT} from '../../common/types/LinkT';
import {Tooltip} from "primeng/tooltip";
import {LinksService} from "../../services/links.service";

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [
        Tooltip
    ],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'
})
/**
 * Стандартный компонент кнопки.
 */
export class ButtonComponent {
    private readonly links = inject(LinksService);

    /**
     * Ключ, по которому в локальной памяти хранится ссылка на изображение или
     * xml разметка svg изображения.
     *
     * undefined если изображения у кнопки нет.
     */
    readonly link = input.required<LinkT>();

    /**
     * Выбрана ли текущая кнопка.
     * По умолчанию не выбрана.
     */
    readonly selected = input<boolean>(false);

    /**
     * Размер кнопки.
     * По умолчанию `m`.
     */
    readonly size = input<"s" | "m">("m");

    /**
     * Сигнал хранит состояние наведена ли мышь на компонент кнопки.
     * Необходим для применения стилей при наведении.
     * @private
     */
    private readonly hovered = signal<boolean>(false);

    /**
     * Ссылка на компонент.
     * Используется для смены стилей компонента при изменении
     * его состояния.
     * @private
     */
    private readonly componentRef = viewChild<ElementRef<HTMLDivElement>>('componentRef');

    /**
     * Геттер возвращает ссылку на изображение или undefined,
     * в зависимости от значения поля `imageSrc` сигнала {@link button}.
     */
    readonly icon = computed(() => {
        return this.link().iconSrc;
    });

    /**
     * Геттер размера иконки для шаблона.
     */
    readonly _size = computed(() => {
        return this.size();
    });

    /**
     * Получение заголовка кнопки дял шаблона.
     */
    readonly label = computed(() => {
        return this.link().label;
    });

    /**
     * Возвращает состояние процесса перетаскивания для шаблона.
     */
    readonly sortable = computed(() => {
        return this.links.sortable();
    });

    /**
     * Функция обработки перехода мыши на компонент.
     * Меняет состояние сигнала {@link hovered} относительно положения мыши: она за компонентом или внутри.
     */
    onMouseEnter() {
        const sortable = this.links.sortable();
        // Если пользователь перетаскивает какой-либо элемент,
        // ничего не делать.
        if (sortable) return;

        const hovered = this.hovered();
        // Если состояние hovered и так было true,
        // ничего не делать.
        if (hovered) return;

        this.hovered.set(true);
    }

    /**
     * Функция обработки выхода мыши за компонент.
     * Меняет состояние сигнала {@link hovered} относительно положения мыши: она за компонентом или внутри.
     */
    onMouseLeave() {
        const hovered = this.hovered();
        // Если состояние hovered и так было false,
        // ничего не делать.
        if (!hovered) return;

        this.hovered.set(false);
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
            // Если кнопка нажата, ничего не делать
            if (selected) return;

            const componentRef = this.componentRef();
            if (!componentRef) return;

            const componentElement = componentRef.nativeElement;

            if (hovered) {
                // Если мышь наведена, задать цвет фона
                componentElement.style.background = "var(--p-primary-200)";
                return;
            }
            // Если мышь не наведена, задать цвет фона
            componentElement.style.background = "var(--p-primary-100)";
        });
    }

    /**
     * Функция обработки изменения значения сигнала {@link selected}.
     * По изменении значения сигнала меняет
     * цвет фона в зависимости от состояния {@link selected}.
     */
    private onSelectedChanged() {
        const selected = this.selected();

        untracked(() => {
            const componentRef = this.componentRef();
            if (!componentRef) return;

            const componentElement = componentRef.nativeElement;

            if (selected) {
                // Если кнопка выбрана, задать цвет фона.
                componentElement.style.background = "var(--p-primary-500)";
            } else if (componentElement.matches(":hover")) {
                // Если мышь наведена и кнопка не выбрана, задать цвет фона.
                componentElement.style.background = "var(--p-primary-200)";
            } else {
                // Если мышь не наведена и кнопка не выбрана, задать цвет фона.
                componentElement.style.background = "var(--p-primary-100)";
            }
        });
    }

    constructor() {
        effect(this.onHoveredChanged.bind(this));
        effect(this.onSelectedChanged.bind(this));
    }
}
