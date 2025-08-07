import {effect, Injectable, signal, untracked} from '@angular/core';
import {SettingsItemsT} from '../common/types/SettingsItems';
import {LinkT} from '../common/types/LinkT';

@Injectable()
/**
 * Сервис хранит глобальное состояния статусов меню настроек: отрыто ли меню, какой элемент выбран.
 */
export class SettingsService {
  /**
   * Сигнал хранит состояние, открыто ли меню настроек.
   */
  readonly open = signal<boolean>(false);

  /**
   * Сигнал хранит состояние, какое меню открыто.
   */
  readonly selectedMenu = signal<SettingsItemsT | undefined>(undefined);

  /**
   * Сигнал хранит состояние выбранного для редактирования элемента.
   * Если значение сигнала {@link selectedMenu} `plus` и выбранный элемент равен `undefined`,
   * значит создаётся новй элемент.
   */
  readonly selectedLink = signal<LinkT | undefined>(undefined);

  /**
   * Сигнал хранит состояние списка всех доступных элементов ссылок системы.
   * При инициализации сервиса, подгружает все элементы из локального хранилища.
   * При изменении значения сигнала обновляет локальное хранилище.
   */
  readonly links = signal<LinkT[] | undefined>(undefined);

  /**
   * Обработка изменения состояния сигнала {@link links}.
   * По изменении перезаписывает текущий список элементов ссылок
   * в локальное хранилище.
   * @private
   */
  private onLinksChanged() {
    const links = this.links();
    if (!links) return;

    localStorage.setItem("links", JSON.stringify(links));
  }

  /**
   * Читает из локальной памяти список всех ссылок и записывает
   * в сигнал {@link links}. Функция вызывается при инициализации сервиса.
   * @private
   */
  private readStorageLinks() {
    const storageLinks = localStorage.getItem("links");
    if (!storageLinks) {
      this.links.set([]);
      return;
    }

    const parsedLinks: LinkT[] = JSON.parse(storageLinks);
    this.links.set(parsedLinks);
  }

  constructor() {
    effect(this.onLinksChanged.bind(this));

    this.readStorageLinks();
  }
}
