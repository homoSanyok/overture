/**
 * @module SettingsButtonComponent
 */
import {Component, effect, ElementRef, inject, signal, untracked, viewChild} from '@angular/core';
import {SettingsService} from '../../../services/settings.service';
import {SettingsPanelComponent} from '../settings-panel/settings-panel.component';

@Component({
  selector: 'app-settings-button',
  standalone: true,
  imports: [
    SettingsPanelComponent
  ],
  templateUrl: './settings-button.component.html',
  styleUrl: './settings-button.component.scss'
})
/**
 * Компонент кнопки настроек.
 * Предоставляет возможность редактировать уже настроенные кнопки,
 * добавлять новые и менять цвета темы приложения.
 */
export class SettingsButtonComponent {
  private readonly settings = inject(SettingsService);

  /**
   * Ссылка на компонент.
   * Используется для смены стилей компонента при изменении
   * его состояния.
   * @private
   */
  private readonly componentRef = viewChild<ElementRef<HTMLDivElement>>('componentRef');

  /**
   * Сигнал хранит состояние наведена ли мышь на компонент кнопки.
   * Необходим для применения стилей при наведении.
   * @private
   */
  private readonly hovered = signal<boolean>(false);

  /**
   * Сигнал хранит состояние выбран ли элемент кнопки.
   * @private
   */
  private readonly selected = signal<boolean>(false);

  /**
   * Функция обработки перехода мыши на компонент.
   * Меняет состояние сигнала {@link hovered} относительно положения мыши: она за компонентом или внутри.
   */
  onMouseEnter() {
    const hovered = this.hovered();
    if (hovered) return;

    this.hovered.set(true);
  }

  /**
   * Функция обработки выхода мыши за компонент.
   * Меняет состояние сигнала {@link hovered} относительно положения мыши: она за компонентом или внутри.
   */
  onMouseLeave() {
    const hovered = this.hovered();
    if (!hovered) return;

    this.hovered.set(false);
  }

  /**
   * Функция обработки нажатия на кнопку.
   * Изменяет состояние сигнала {@link selected}.
   */
  onClick() {
    this.selected.update(selected => !selected);
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
   * По изменении значения сигнала меняет ширину кнопки и задаёт ей
   * цвет фона в зависимости от состояния {@link selected}.
   */
  private onSelectedChanged() {
    const selected = this.selected();

    untracked(() => {
      const componentRef = this.componentRef();
      if (!componentRef) return;

      const componentElement = componentRef.nativeElement;

      if (selected) {
        // Если кнопка выбрана
        componentElement.style.width = "70px";
        componentElement.style.background = "var(--p-primary-500)";
        this.settings.open.set(true);
      } else {
        componentElement.style.width = "38px";
        this.settings.open.set(false);

        if (componentElement.matches(":hover")) {
          // Если кнопка не выбрана и мышь наведена
          componentElement.style.background = "var(--p-primary-200)";
        } else {
          // Если кнопка не выбрана и мышь не наведена
          componentElement.style.background = "var(--p-primary-100)";
        }
      }
    });
  }

  /**
   * Обработка события закрытия меню настроек через сервис {@link SettingsService}.
   * Задаёт сигналу {@link selected} значение `false`, если меню было закрыто.
   * @private
   */
  private onSettingsOpenChanged() {
    const open = this.settings.open();

    if (open) return;
    untracked(() => this.selected.set(false));
  }

  constructor() {
    effect(this.onHoveredChanged.bind(this));
    effect(this.onSelectedChanged.bind(this));
    effect(this.onSettingsOpenChanged.bind(this));
  }
}
