/**
 * @module NavbarComponent
 */

import {Component, inject} from '@angular/core';
import {SettingsButtonComponent} from '../settings-button/settings-button.component';
import {SettingsService} from '../../../services/settings.service';
import {ButtonComponent} from '../../../shared/button/button.component';
import {LinkT} from '../../types/LinkT';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    SettingsButtonComponent,
    ButtonComponent
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
   * Обработка клика по кнопке ссылки.
   * Задаёт сигналу `selectedLink` сервиса {@link SettingsService} значение
   * выбранной ссылки, либо `undefined`, если было произведено нажатие
   * на уже выбранную ссылку.
   * @param link
   */
  onClickLink(link: LinkT) {
    const selectedLink = this.settings.selectedLink();
    if (!selectedLink || selectedLink.id !== link.id) {
      this.settings.selectedLink.set(link);
      return;
    }

    this.settings.selectedLink.set(undefined);
  }
}
