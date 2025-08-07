import {Component, inject} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { v4 as uuid } from 'uuid';
import {SettingsService} from '../../../services/settings.service';
import {LinkT} from '../../types/LinkT';

@Component({
  selector: 'app-settings-plus',
  standalone: true,
  imports: [
    MatInputModule, MatButtonModule, ReactiveFormsModule
  ],
  templateUrl: './settings-plus.component.html',
  styleUrl: './settings-plus.component.scss'
})
/**
 * Компонент настройки выбранного элемента. Или создания нового.
 */
export class SettingsPlusComponent {
  private readonly settings = inject(SettingsService);

  /**
   * Контроллеры формы редактирования/создания элементов.
   */
  readonly controls = new FormGroup({
    label: new FormControl<string>(""),
    iconSrc: new FormControl<string>(""),
    path: new FormControl<string>("")
  });

  /**
   * Функция обработки сохранения введённых значений.
   * Проверяет введённые в формы значения на валидность и сохраняет
   * в случае прохождения проверки.
   *
   * Возвращает ошибки, если формы не валидны.
   *
   * Закрывает меню настроек.
   */
  onSave() {
    const labelControl = this.controls.controls.label;
    const iconControl = this.controls.controls.iconSrc;
    const pathControl = this.controls.controls.path;

    const label = labelControl.value;
    if (!label) {
      labelControl.setErrors({ empty: true });
      labelControl.markAsTouched();
      return;
    }

    const path = pathControl.value;
    if (!path) {
      pathControl.setErrors({ empty: true });
      pathControl.markAsTouched();
      return;
    }

    const link: LinkT = {
      id: uuid(),
      label: labelControl.value,
      iconSrc: iconControl.value || undefined,
      path: pathControl.value
    }

    var links = structuredClone(this.settings.links());
    if (!links) links = [];
    
    const elementIndex = links.findIndex(item => item.id === link.id);

    if (elementIndex > 0) links[elementIndex] = link;
    else links.push(link);

    this.settings.links.set(links);

    this.settings.open.set(false);
  }
}
