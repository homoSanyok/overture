/**
 * @module IframeComponent
 */
import {Component, computed, inject, signal, untracked} from '@angular/core';
import {SettingsService} from '../../../services/settings.service';
import {DomSanitizer} from '@angular/platform-browser';
import {v4 as uuid} from 'uuid';
import {ProgressSpinner} from "primeng/progressspinner";
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
    selector: 'app-iframe',
    standalone: true,
    imports: [
        ProgressSpinner
    ],
    templateUrl: './iframe.component.html',
    styleUrl: './iframe.component.scss'
})
/**
 * Компонент отображающий <iframe> тег, который
 * открывает выбранный пользователем веб ресурс.
 */
export class IframeComponent {
    /**
     * {@link SettingsService}
     * @private
     */
    private readonly settings = inject(SettingsService);

    private readonly device = inject(DeviceDetectorService);

    private readonly sanitizer = inject(DomSanitizer);

    /**
     * Сигнал хранит состояние, просиходит ли сейчас
     * загрузка сайта.
     */
    readonly loading = signal<boolean>(false);

    /**
     * Возвращает шаблону значение bool: открыто ли приложение на мобильном устройстве.
     */
    readonly isMobile = computed(() => {
       return this.device.isMobile();
    });

    /**
     * Возвращает ссылку текущего выбранного элемента link для шаблона.
     */
    readonly src = computed(() => {
        let url = this.settings.selectedLink()?.path;
        if (!url) {
            untracked(() => this.loading.set(false));
            return;
        }

        if (url.indexOf(location.host) !== -1) {
            // Если обращение идёт на localhost,
            // значит пользователь захотел рекурсии...
            if (url.at(-1) !== '/') url = `${url}/`;
            url = `${url}?level=${uuid()}`;
        }

        untracked(() => this.loading.set(true));
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    });

    /**
     * Функция обработки загрузки контента iframe.
     * Проверяет, действительно ли контент внутри iframe был загружен
     * и задаёт сигналу {@link loading} новое значение.
     * @param event
     */
    onLoaded(event: Event) {
        const isLoaded = Boolean((event.target as HTMLIFrameElement).src);

        if (isLoaded) this.loading.set(false);
    }
}
