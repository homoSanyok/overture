import {Component, effect, ElementRef, input, signal, untracked, viewChild} from '@angular/core';
import {MatMiniFabButton} from '@angular/material/button';
import {LinkT} from '../../common/types/LinkT';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    MatMiniFabButton
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  /**
   * Ключ, по которому в локальной памяти хранится ссылка на изображение или
   * xml разметка svg изображения.
   *
   * undefined если изображения у кнопки нет.
   */
  readonly link = input.required<LinkT>();
  readonly selected = input<boolean>(false);

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
  get icon() {
    const icon = this.link().iconSrc;

    return icon;
  }

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
        componentElement.style.background = "#B3E69A";
        return;
      }
      // Если мышь не наведена, задать цвет фона
      componentElement.style.background = "#D1F0C2";
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
        componentElement.style.background = "#74C43F";
      } else if (componentElement.matches(":hover")) {
        componentElement.style.background = "#B3E69A";
      } else {
        componentElement.style.background = "#D1F0C2";
      }
    });
  }

  constructor() {
    effect(this.onHoveredChanged.bind(this));
    effect(this.onSelectedChanged.bind(this));
  }
}
