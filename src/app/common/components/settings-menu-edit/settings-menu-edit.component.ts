import {Component, effect, inject, untracked} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { v4 as uuid } from 'uuid';
import {SettingsService} from '../../../services/settings.service';
import {LinkT} from '../../types/LinkT';
import {Button} from 'primeng/button';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {Message} from 'primeng/message';

@Component({
  selector: 'app-settings-menu-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    Button,
    FloatLabel,
    InputText,
    Message
  ],
  templateUrl: './settings-menu-edit.component.html',
  styleUrl: './settings-menu-edit.component.scss'
})
export class SettingsMenuEditComponent {
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
   * Открыто ли меню в режиме редактирования выбрнанного элемента link.
   * Возвращает bool значение для шаблона.
   */
  get isEditing() {
    return Boolean(this.settings.selectedEditingLink());
  }

  /**
   * Функция обработки сохранения введённых значений.
   * Проверяет введённые в формы значения на валидность и
   * в зависмости от производимого действия (происходит ли создание
   * нового элемента или редактирвоание имеющегося) вызывает
   * {@link onCreate} или {@link onUpdate}.
   *
   * Возвращает ошибки, если формы не валидны.
   */
  onSave() {
    const labelControl = this.controls.controls.label;
    const iconControl = this.controls.controls.iconSrc;
    const pathControl = this.controls.controls.path;

    const label = labelControl.value;
    if (!label) {
      // Выдаёт ошибку ввода поля
      labelControl.setErrors({ empty: true });
      labelControl.markAsTouched();
      return;
    }

    const path = pathControl.value;
    if (!path) {
      // Выдаёт ошибку ввода поля
      pathControl.setErrors({ empty: true });
      pathControl.markAsTouched();
      return;
    }

    const selectedEditingLink = this.settings.selectedEditingLink();

    if (!selectedEditingLink) {
      this.onCreate(labelControl.value, iconControl.value, pathControl.value);
      return;
    }
    this.onUpdate(labelControl.value, iconControl.value, pathControl.value);
  }

  /**
   * Функция создаёт новый элемент ссылки по заданным
   * в аргументах параметрам.
   *
   * Добавляет созданный элемент в конец текущего сигнала
   * `links` сервиса {@link SettingsService}.
   */
  private onCreate(label: string, iconSrc: string | null, path: string) {
    const link: LinkT = {
      id: uuid(),
      label: label,
      iconSrc: iconSrc || undefined,
      path: path
    }

    var links = structuredClone(this.settings.links());
    if (!links) links = [];

    const elementIndex = links.findIndex(item => item.id === link.id);

    if (elementIndex > 0) links[elementIndex] = link;
    else links.push(link);

    this.settings.links.set(links);

    this.settings.open.set(false);
  }

  /**
   * Функция обновления информации об элементе link.
   * Обновляет общий список элементов `links` сервиса {@link SettingsService}
   * и закрывает меню настроек.
   * @private
   */
  private onUpdate(label: string, iconSrc: string | null, path: string) {
    const selectedEditingLink = this.settings.selectedEditingLink();
    if (!selectedEditingLink) return;

    const links = this.settings.links();
    if (!links) return;

    const newLinks = structuredClone(links)
      .map(link => {
        if (link.id === selectedEditingLink.id) return {
          id: link.id,
          label: label,
          iconSrc: iconSrc || undefined,
          path: path
        }

        return link;
      });

    this.settings.links.set(newLinks);
    this.settings.selectedEditingLink.set(undefined);
    this.settings.open.set(false);
  }

  /**
   * Обработка удаления элемента ссылки.
   * Удаляет элемент из глобального сигнала `links` сервиса {@link SettingsService}.
   */
  onRemove() {
    const selectedEditingLink = this.settings.selectedEditingLink();
    if (!selectedEditingLink) return;

    const links = this.settings.links();
    if (!links) return;

    const newLinks = structuredClone(links).filter(link => link.id !== selectedEditingLink.id);
    this.settings.links.set(newLinks);
    this.settings.selectedEditingLink.set(undefined);
    this.settings.open.set(false);
  }

  /**
   * Функция обработки изменения сигнала `selectedEditingLink` сервиса {@link SettingsService}.
   * По изменениия значения сигнала в зависимости от наличия значения заполняет
   * контроллер формы {@link controls} значениями текущего выбранного для
   * редактирования элемета link.
   *
   * Если значение сигнала `undefined`, заполняет контроллер {@link controls}
   * пустыми значениями.
   */
  private onSelectedEditingLinkChanged() {
    const selectedEditingLink = this.settings.selectedEditingLink();

    untracked(() => {
      if (!selectedEditingLink) {
        this.controls.setValue({
          label: "",
          iconSrc: "",
          path: ""
        });
        return;
      }

      this.controls.setValue({
          label: selectedEditingLink.label,
          iconSrc: selectedEditingLink.iconSrc || "",
          path: selectedEditingLink.path
        });
    });
  }

  constructor() {
    effect(this.onSelectedEditingLinkChanged.bind(this));
  }
}
