/**
 * @module ContentComponent
 */
import {Component, effect, ElementRef, inject, untracked, viewChild} from '@angular/core';
import {SettingsService} from '../../../services/settings.service';
import {IframeComponent} from '../iframe/iframe.component';
import {SettingsMenuEditComponent} from "../settings-menu-edit/settings-menu-edit.component";
import {SettingsMenuPaletteComponent} from "../settings-menu-palette/settings-menu-palette.component";

@Component({
    selector: 'app-content',
    standalone: true,
    imports: [
        SettingsMenuEditComponent,
        IframeComponent,
        SettingsMenuEditComponent,
        SettingsMenuPaletteComponent
    ],
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss'
})
/**
 * Компонент-контейнер для всех видов контента приложения.
 */
export class ContentComponent {
    private readonly settings = inject(SettingsService);

    /**
     * Ссылка на компонент.
     * Используется для смены стилей компонента при изменении
     * его состояния.
     * @private
     */
    private readonly componentRef = viewChild<ElementRef<HTMLDivElement>>('componentRef');

    /**
     * Геттер выбранного меню для шаблона.
     */
    get selectedMenu() {
        return this.settings.selectedMenu();
    }

    /**
     * Функция обработки выбранного в настройках меню.
     * Меняет разер контейнера контента при смене выбранного меню.
     */
    onSettingsSelectedMenuChanged() {
        const selectedMenu = this.settings.selectedMenu();

        untracked(() => {
            const componentRef = this.componentRef();
            if (!componentRef) return;

            const componentElement = componentRef.nativeElement;

            switch (selectedMenu) {
                case "edit": {
                    componentElement.style.width = "60%";
                    componentElement.style.height = "40%";

                    componentElement.style.maxWidth = "900px";
                    componentElement.style.minHeight = "400px";
                    break;
                }
                case "palette": {
                    componentElement.style.width = "40%";
                    componentElement.style.height = "20%";

                    componentElement.style.maxWidth = "900px";
                    componentElement.style.minHeight = "300px";
                    break;
                }
                default: {
                    componentElement.style.width = "100%";
                    componentElement.style.height = "100%";

                    componentElement.style.maxWidth = "unset";
                    componentElement.style.minHeight = "unset";
                }
            }
        });
    }

    constructor() {
        effect(this.onSettingsSelectedMenuChanged.bind(this));
    }
}
