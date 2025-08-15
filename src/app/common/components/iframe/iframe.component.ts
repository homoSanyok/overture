/**
 * @module IframeComponent
 */
import {Component, computed, inject} from '@angular/core';
import {SettingsService} from '../../../services/settings.service';
import {DomSanitizer} from '@angular/platform-browser';
import {v4 as uuid} from 'uuid';

@Component({
    selector: 'app-iframe',
    standalone: true,
    imports: [],
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
    private readonly sanitizer = inject(DomSanitizer);

    /**
     * Возвращает ссылку текущего выбранного элемента link для шаблона.
     */
    readonly src = computed(() => {
        let url = this.settings.selectedLink()?.path || '';
        if (url.indexOf("localhost") !== -1) {
            // Если обращение идёт на localhost,
            // значит пользователь захотел рекурсии...
            if (url.at(-1) !== '/') url = `${url}/`;
            url = `${url}?level=${uuid()}`;
        }

        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    });
}
