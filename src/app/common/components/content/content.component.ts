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
import {DeviceDetectorService} from "ngx-device-detector";
import {ResizeService} from "../../../services/resize.service";

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
    private readonly settings = inject(SettingsService);
    private readonly resize = inject(ResizeService);

    /**
     * Объект Resizable.
     * Устанавливается в функции {@link initResizable}.
     * @private
     */
    private resizable: any;

    private readonly device = inject(DeviceDetectorService);

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

            const resize = this.resize.resize();

            try {
                // Если выбрано какое-либо меню, кроме основного,
                // отключает возможность ресайза.
                this.resizable.destroy();
            } catch {}

            // Открыто ли приложение на мобильном устройстве
            const isMobile = this.device.isMobile();

            switch (selectedMenu) {
                case "edit": {
                    // Если было выбрано меню редактирования элемента link.

                    // Задаёт анимации при изменении размеров и положения относительно родительского компонента.
                    componentElement.style.transition = "width var(--transition), height var(--transition), margin-left var(--transition), margin-top var(--transition)";

                    // Относительные высота и ширина открываемого меню.
                    let width = parentElement.clientWidth * (isMobile ? 1 : .6);
                    let height = parentElement.clientHeight * .4;

                    // Задаёт максимальную ширину и минимальную высоту.
                    const minHeight = isMobile ? 330 : 400;
                    if (width > 900) width = 900;
                    if (height < minHeight) height = minHeight;

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
                    componentElement.style.transition = "width var(--transition), height var(--transition), margin-left var(--transition), margin-top var(--transition)";

                    // Относительные высота и ширина открываемого меню.
                    let width = parentElement.clientWidth * (isMobile ? 1 : .2);
                    let height = parentElement.clientHeight * (isMobile ? .2 : .1);

                    // Задаёт минимальные ширину и высоту.
                    const minHeight = isMobile ? 170 : 300;
                    if (width < 330 && !isMobile) width = 330;
                    if (height < minHeight) height = minHeight;

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

                    // Включает возможность ресайза.
                    this.initResizable();
                }
            }
        });
    }

    /**
     * Константные значения ширины области, за которую пользователь
     * тянет мышью, для изменения размера основного окна.
     *
     * Заданы константные значения областей при двух состояниях:
     * пользователь выбрал мышью область ресайза, пользователь убрал мышь
     * с области ресайза.
     * @private
     */
    private readonly MOUSE_DOWN_SIZE = 400;
    private readonly MOUSE_UP_SIZE = 20;

    /**
     * Функция обработки нажатия мыши на компонент области ресайза.
     * Меняет размер области, чтобы плавно менять размер компонента.
     * @param event
     * @private
     */
    private onAreaMouseDown(event: Event) {
        const element = event.target as HTMLDivElement;

        // Расширение области ресайза.
        element.style.minWidth = `${this.MOUSE_DOWN_SIZE}px`;
        element.style.minHeight = `${this.MOUSE_DOWN_SIZE}px`;

        const parentElement = element.parentElement;
        if (!parentElement) return;

        // Выключение анимаций при изменении размеров.
        // Чтобы при ресайзе не было дёрганий.
        parentElement.style.transition = "unset";

        if (element.classList.contains("resizable-handle-s")) {
            // Если пользователем выбрана нижняя область,
            // задаёт ей новое положение (центрирует относительно новых размеров).
            element.style.inset = `auto 0px -${this.MOUSE_DOWN_SIZE / 2}px`;
            return;
        }
        if (element.classList.contains("resizable-handle-se")) {
            // Если пользователем выбрана правая нижняя область,
            // задаёт ей новое положение (центрирует относительно новых размеров).
            element.style.inset = `auto -${this.MOUSE_DOWN_SIZE / 2}px -${this.MOUSE_DOWN_SIZE / 2}px auto`;
            return;
        }

        // Если пользователем выбрана правая область,
        // задаёт ей новое положение (центрирует относительно новых размеров).
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

        // Возврат ширины и высоты области ресайза в исходное состояние.
        element.style.minWidth = `${this.MOUSE_UP_SIZE}px`;
        element.style.minHeight = `${this.MOUSE_UP_SIZE}px`;

        const parentElement = element.parentElement;
        if (!parentElement) return;

        // Включение анимаций при изменении размеров.
        parentElement.style.transition = "width var(--transition), height var(--transition)";

        if (element.classList.contains("resizable-handle-s")) {
            // Если пользователем была выбрана нижняя область,
            // задаёт ей новое положение (центрирует относительно новых размеров).
            element.style.inset = `auto 0px -${this.MOUSE_UP_SIZE / 2}px`;
            return;
        }
        if (element.classList.contains("resizable-handle-se")) {
            // Если пользователем была выбрана правая нижняя область,
            // задаёт ей новое положение (центрирует относительно новых размеров).
            element.style.inset = `auto -${this.MOUSE_UP_SIZE / 2}px -${this.MOUSE_UP_SIZE / 2}px auto`;
            return;
        }

        // Если пользователем была выбрана правая область,
        // задаёт ей новое положение (центрирует относительно новых размеров).
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
     * Генерирует объект `Resizable`, записывая его в {@link resizable}.
     * @private
     */
    private initResizable() {
        if (this.device.isMobile()) {
            // Если приложение запущено на мобильном устройстве,
            // не инициализировать ресайзер.
            return;
        }

        const componentElement = this.componentRef()?.nativeElement;
        if (!componentElement) return;

        this.resizable = new Resizable(componentElement, {
            within: document.querySelector(".parent"),
            handles: 's, se, e',
            threshold: 10,
            draggable: false
        });

        this.resizable.on("resizestart", () => {
            const componentElement = this.componentRef()?.nativeElement;
            if (!componentElement) return;

            // Если было начато действие ресайза,
            // задаёт состоянию ресайза значение ширины и высоты окна.
            this.resize.resize.set({ w: `${componentElement.clientWidth}px`, h: `${componentElement.clientHeight}px` });
        });

        this.resizable.on("resizeend", () => {
            const areas = document.querySelectorAll(".resizable-handle");
            areas.forEach(area => {
                // Сбрасывает каждую область перетаскивания
                // до начальных размеров и анимации эмуляцией
                // события снятия мыши с области перетаскивания.
                const event = {target: area};
                this.onAreaMouseUp(event as any as Event);
            });

            const componentElement = this.componentRef()?.nativeElement;
            if (!componentElement) return;

            if ((window.innerWidth - 62) === componentElement.clientWidth && (window.innerHeight - 16) === componentElement.clientHeight) {
                // Если ширина и высота основного окна равны максимальным,
                // значит сбрасывает состояние ресайза.
                this.resize.resize.set(undefined)
                return;
            }

            const parentElement = componentElement.parentElement;
            if (!parentElement) return;

            // Высота и ширина в процентах, чтобы не было бага
            // при переходе с одного размера экрана на другой
            const percentWidth = (componentElement.clientWidth * 100) / parentElement.clientWidth;
            const percentHeight = (componentElement.clientHeight * 100) / parentElement.clientHeight;

            // Если размеры не максимальны, значит задаёт состоянию ресайза
            // текущие значения.
            this.resize.resize.set({ w: `${percentWidth}%`, h: `${percentHeight}%` });
        });

        this.initResizableAreas();
    }

    ngAfterViewInit() {
        this.initResizable();

        // Обработка события сброса ресайза меню.
        window.addEventListener("resetsize", () => {
            const componentElement = this.componentRef()?.nativeElement;
            if (!componentElement) return;

            // Включает анимации для плавного возврата размеров в исходное состояние.
            componentElement.style.transition = "width var(--transition), height var(--transition)";

            // Задаёт меню максимальные значения.
            componentElement.style.width = "100%";
            componentElement.style.height = "100%";

            setTimeout(() => {
                // Выключает анимации после их завершения.
                componentElement.style.transition = "width var(--transition), height var(--transition)";
            }, 300);

            // Сбрасывает состояние ресайза.
            this.resize.resize.set(undefined);
        });
    }

    constructor() {
        effect(this.onSettingsSelectedMenuChanged.bind(this));
    }
}
