/**
 * @module SettingsPanelComponent
 */
import {Component, effect, ElementRef, inject, signal, untracked, viewChild} from '@angular/core';
import {ButtonComponent} from '../../../shared/button/button.component';
import {SettingsService} from '../../../services/settings.service';
import {SettingsItemsT} from '../../types/SettingsItems';
import {LinkT} from '../../types/LinkT';

@Component({
  selector: 'app-settings-panel',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './settings-panel.component.html',
  styleUrl: './settings-panel.component.scss'
})
/**
 * Компонент панели настроек выпадающий при нажатии на кнопку настроек.
 */
export class SettingsPanelComponent {
  private readonly settings = inject(SettingsService);

  readonly links: LinkT[] = [
    {
      id: "edit" as SettingsItemsT,
      iconSrc: "/plus.svg",
      label: "",
      path: ""
    }
  ];

  /**
   * Ссылка на компонент.
   * Используется для смены стилей компонента при изменении
   * его состояния.
   * @private
   */
  private readonly componentRef = viewChild<ElementRef<HTMLDivElement>>('componentRef');

  /**
   * Получение текущего выбранного меню для шаблона&
   */
  get selectedMenu() {
    const selectedEditingLink = this.settings.selectedEditingLink();
    if (selectedEditingLink) return;

    return this.settings.selectedMenu();
  }

  /**
   * Функция обработки нажатия по кнопке.
   * По нажатии задаёт сигналу {@link selectedButton} значение `id` из параметра.
   * Если нажатие было произведено по уже выбранной кнопке, задаёт {@link selectedButton} `undefined`.
   * @param id
   */
  onClick(id: string) {
    const selectedMenu = this.settings.selectedMenu();
    const selectedEditingLink = this.settings.selectedEditingLink();

    if (selectedEditingLink) {
      // Если выбран элемент для редактирования
      this.settings.selectedMenu.set(id as SettingsItemsT);
      this.settings.selectedEditingLink.set(undefined);
      return;
    }

    if (selectedMenu === id) {
      // При нажатии по уже выбранной кнопке
      this.settings.selectedMenu.set(undefined);
      return;
    }

    // Задаём сигналу выбранное меню
    this.settings.selectedMenu.set(id as SettingsItemsT);
  }

  /**
   * Функция обработки изменения состояния открытия настроек.
   * Если настройки открыты, задаёт ширину панели `78px`.
   * Если настройки закрыты, задаёт ширину панели `0px` и сбрасывает значение сигнала {@link selectedButton}.
   * @private
   */
  private onSettingsOpen() {
    const open = this.settings.open();

    untracked(() => {
      const componentRef = this.componentRef();
      if (!componentRef) return;

      const componentElement = componentRef.nativeElement;

      if (open) {
        componentElement.style.width = `${this.links.length * 38}px`;
        return;
      }
      componentElement.style.width = "0";
      this.settings.selectedMenu.set(undefined);
    });
  }

  constructor() {
    effect(this.onSettingsOpen.bind(this));
  }
}
