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
      id: "plus" as SettingsItemsT,
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
   * Сигнал хранит состояние имени выбранной кнопки.
   * @private
   */
  readonly selectedButton = signal<SettingsItemsT | undefined>(undefined);

  /**
   * Функция обработки нажатия на кнопку.
   * По нажатии задаёт сигналу {@link selectedButton} значение `id` из параметра.
   * Если нажатие было произведено по уже выбранной кнопке, задаёт {@link selectedButton} `undefined`.
   * @param id
   */
  onClick(id: string) {
    const selectedButton = this.selectedButton();
    if (selectedButton === id) {
      this.selectedButton.set(undefined);
      return;
    }

    this.selectedButton.set(id as SettingsItemsT);
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
      this.selectedButton.set(undefined);
    });
  }

  /**
   * Функция обработки изменения состояния сигнала {@link selectedButton}.
   * Задаёт сигналу `selectedMenu` сервиса {@link settings} значение равное состоянию сигнала {@link selectedButton}.
   * @private
   */
  private onSelectedButtonChanged() {
    const selectedButton = this.selectedButton();

    untracked(() => this.settings.selectedMenu.set(selectedButton));
  }

  constructor() {
    effect(this.onSettingsOpen.bind(this));
    effect(this.onSelectedButtonChanged.bind(this));
  }
}
