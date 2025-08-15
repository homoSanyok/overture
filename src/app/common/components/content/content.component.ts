/**
 * @module ContentComponent
 */
import {AfterViewInit, Component, computed, effect, ElementRef, inject, untracked, viewChild} from '@angular/core';
import {SettingsService} from '../../../services/settings.service';
import {IframeComponent} from '../iframe/iframe.component';
import {SettingsMenuEditComponent} from "../settings-menu-edit/settings-menu-edit.component";
import {SettingsMenuPaletteComponent} from "../settings-menu-palette/settings-menu-palette.component";

// @ts-ignore
import Resizable from "resizable"

@Component({
    selector: 'app-content',
    standalone: true,
    imports: [
        SettingsMenuEditComponent,
        IframeComponent,
        SettingsMenuEditComponent,
        SettingsMenuPaletteComponent,
    ],
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss'
})
/**
 * Компонент-контейнер для всех видов контента приложения.
 */
export class ContentComponent implements AfterViewInit {
    /**
     * {@link SettingsService}
     * @private
     */
    private readonly settings = inject(SettingsService);

    /**
     * Ссылка на главный контейнер компонента.
     * Компонент по данной ссылке подвергается изменениям размера
     * при смене меню и ресайзе.
     * @private
     */
    private readonly componentRef = viewChild<ElementRef<HTMLDivElement>>('componentRef');

    /**
     * Возвращает текущее выбранное меню настроек {@link SettingsService.selectedMenu} для шаблона.
     */
    readonly selectedMenu = computed(() => {
        return this.settings.selectedMenu();
    });

    /**
     * Функция обработки изменения сигнала {@link SettingsService.selectedMenu}.
     *
     * По изменении выбранного меню, меняет его размер в соответствии с выбором.
     * Если никакое меню не выбрано, значит пользователь перешёл на основное меню приложения,
     * все стили меню сбрасываются.
     */
    onSettingsSelectedMenuChanged() {
        const selectedMenu = this.settings.selectedMenu();

        untracked(() => {
            const componentElement = this.componentRef()?.nativeElement;
            if (!componentElement) return;

            // Получает родительский элемент элемента данного компонента
            // для включения/отключения анимаций.
            const parentElement = componentElement.parentElement;
            if (!parentElement) return;

            const resize = this.settings.resize();

            switch (selectedMenu) {
                case "edit": {
                    // Если было выбрано меню редактирования элемента link.

                    // Задаёт анимации при изменении размеров и положения относительно родительского компонента.
                    componentElement.style.transition = "width 300ms, height 300ms, margin-left 300ms, margin-top 300ms";

                    // Относительные высота и ширина открываемого меню.
                    let width = parentElement.clientWidth * .6;
                    let height = parentElement.clientHeight * .4;

                    // Задаёт максимальную ширину и минимальную высоту.
                    if (width > 900) width = 900;
                    if (height < 400) height = 400;

                    // Задаёт отступы относительно родительского контейнера для центровки.
                    componentElement.style.marginLeft = `calc((${parentElement.clientWidth}px - ${width}px) / 2)`;
                    componentElement.style.marginTop = `calc((${parentElement.clientHeight}px - ${height}px) / 2)`;

                    // Задаёт ширину и высоту меню.
                    componentElement.style.width = `${width}px`;
                    componentElement.style.height = `${height}px`;
                    break;
                }
                case "palette": {
                    // Если выбрано меню выбора цветовой схемы приложения.

                    // Задаёт анимации при изменении размеров и положения относительно родительского компонента.
                    componentElement.style.transition = "width 300ms, height 300ms, margin-left 300ms, margin-top 300ms";

                    // Относительные высота и ширина открываемого меню.
                    let width = parentElement.clientWidth * .2;
                    let height = parentElement.clientHeight * .1;

                    // Задаёт минимальные ширину и высоту.
                    if (width < 330) width = 330;
                    if (height < 300) height = 300;

                    // Задаёт отступы относительно родительского контейнера для центровки.
                    componentElement.style.marginLeft = `calc((${parentElement.clientWidth}px - ${width}px) / 2)`;
                    componentElement.style.marginTop = `calc((${parentElement.clientHeight}px - ${height}px) / 2)`;

                    // Задаёт ширину и высоту меню.
                    componentElement.style.width = `${width}px`;
                    componentElement.style.height = `${height}px`;
                    break;
                }
                default: {
                    // Если выбран переход к основному меню приложения.

                    // Задаёт размеры меню в соответствии с последним ресайзом.
                    componentElement.style.width = resize ? resize.w : "100%";
                    componentElement.style.height = resize ? resize.h : "100%";

                    // Сбрасывает отступы относительно родительского контейнера отключения центровки.
                    componentElement.style.marginLeft = "0px";
                    componentElement.style.marginTop = "0px";

                    setTimeout(() => {
                        // Сбрасывает анимации.
                        // Сброс происходит с задержкой для того, чтобы успела произойти
                        // анимация перехода от предыдущего меню к текущему.
                        // Сброс анимации требуется для корректной работы ресайза основного меню.
                        componentElement.style.transition = "unset";
                    }, 300);
                }
            }
        });
    }

    private readonly MOUSE_DOWN_SIZE = 400
    private readonly MOUSE_UP_SIZE = 10

    /**
     * Функция обработки нажатия мыши на компонент области ресайза.
     * Меняет размер области, чтобы плавно менять размер компонента.
     * @param event
     * @private
     */
    private onAreaMouseDown(event: Event) {
        const element = event.target as HTMLDivElement;
        element.style.minWidth = `${this.MOUSE_DOWN_SIZE}px`;
        element.style.minHeight = `${this.MOUSE_DOWN_SIZE}px`;

        const parentElement = element.parentElement;
        if (!parentElement) return;

        parentElement.style.transition = "unset";

        if (element.classList.contains("resizable-handle-s")) {
            element.style.inset = `auto 0px -${this.MOUSE_DOWN_SIZE / 2}px`;
            return;
        }
        if (element.classList.contains("resizable-handle-se")) {
            element.style.inset = `auto -${this.MOUSE_DOWN_SIZE / 2}px -${this.MOUSE_DOWN_SIZE / 2}px auto`;
            return;
        }
        element.style.inset = `0px -${this.MOUSE_DOWN_SIZE / 2}px 0px auto`;
        return;
    }

    /**
     * Функция обработки ухода мыши с компонент области ресайза.
     * Меняет размер области в исходное состояние.
     * @param event
     * @private
     */
    private onAreaMouseUp(event: Event) {
        const element = event.target as HTMLDivElement;
        element.style.minWidth = `${this.MOUSE_UP_SIZE}px`;
        element.style.minHeight = `${this.MOUSE_UP_SIZE}px`;

        const parentElement = element.parentElement;
        if (!parentElement) return;

        parentElement.style.transition = "width 300ms, height 300ms";

        if (element.classList.contains("resizable-handle-s")) {
            element.style.inset = `auto 0px -${this.MOUSE_UP_SIZE / 2}px`;
            return;
        }
        if (element.classList.contains("resizable-handle-se")) {
            element.style.inset = `auto -${this.MOUSE_UP_SIZE / 2}px -${this.MOUSE_UP_SIZE / 2}px auto`;
            return;
        }
        element.style.inset = `0px -${this.MOUSE_UP_SIZE / 2}px 0px auto`;
        return;
    }

    /**
     * Функция инициализирует слушатели действий мыши на
     * элементах областей ресайза компонента.
     * @private
     */
    private initResizableAreas() {
        const areas = document.querySelectorAll(".resizable-handle");
        areas.forEach(area => {
            area.addEventListener("mousedown", this.onAreaMouseDown.bind(this));
            area.addEventListener("mouseup", this.onAreaMouseUp.bind(this));
        });
    }

    /**
     * Функция инициализирует работу с Resizable.
     * Генерирует объект `Resizable`, записывая его в {@link resizableInstance}.
     * @private
     */
    private initResizable() {
        const componentElement = this.componentRef()?.nativeElement;
        if (!componentElement) return;

        const resizable = new Resizable(componentElement, {
            within: document.querySelector(".parent"),
            handles: 's, se, e',
            threshold: 10,
            draggable: false
        });

        resizable.on("resizeend", () => {
            const areas = document.querySelectorAll(".resizable-handle");
            areas.forEach(area => {
                const event = {target: area};
                this.onAreaMouseUp(event as any as Event);
            });

            const componentElement = this.componentRef()?.nativeElement;
            if (!componentElement) return;

            if ((window.innerWidth - 62) === componentElement.clientWidth && (window.innerHeight - 16) === componentElement.clientHeight) {
                this.settings.resize.set(undefined)
                return;
            }
            this.settings.resize.set({ w: `${componentElement.clientWidth}px`, h: `${componentElement.clientHeight}px` });
        });

        resizable.on("resizestart", () => {
            this.settings.resize.set({ w: "100%", h: "100%" });
        });

        this.initResizableAreas();
    }

    constructor() {
        effect(this.onSettingsSelectedMenuChanged.bind(this));
    }

    ngAfterViewInit() {
        this.initResizable();

        window.addEventListener("resetsize", () => {
            const componentElement = this.componentRef()?.nativeElement;
            if (!componentElement) return;

            componentElement.style.width = "100%";
            componentElement.style.height = "100%";

            this.settings.resize.set(undefined);
        });
    }
}
