/**
 * @module ContentComponent
 */
import {Component, effect, ElementRef, inject, untracked, viewChild} from '@angular/core';
import {SettingsService} from '../../../services/settings.service';
import {SettingsPlusComponent} from '../settings-plus/settings-plus.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    SettingsPlusComponent
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
        case "plus": {
          componentElement.style.width = "60%";
          componentElement.style.height = "40%";
          break;
        }
        default: {
          componentElement.style.width = "100%";
          componentElement.style.height = "100%";
        }
      }
    });
  }

  constructor() {
    effect(this.onSettingsSelectedMenuChanged.bind(this));
  }
}
