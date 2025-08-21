/**
 * @module LinksService
 */
import {effect, Injectable, signal, untracked} from '@angular/core';
import {LinkT} from "../common/types/LinkT";

@Injectable()
/**
 * Сервис обеспечивает приложение единым интерфейсом доступа к
 * списку всех элементов links.
 */
export class LinksService {
    /**
     * Сигнал хранит состояние списка всех доступных элементов ссылок системы.
     * При инициализации сервиса, подгружает все элементы из локального хранилища.
     * При изменении значения сигнала обновляет локальное хранилище.
     */
    readonly links = signal<LinkT[] | undefined>(this.readStorageLinks());

    /**
     * Сигнал хранит состояние: происходит ли процесс сортировки ссылок.
     * Используется для отмены применения стилей `hover` компонента {@link ButtonComponent}.
     */
    readonly sortable = signal<boolean>(false);

    /**
     * Возвращает из локальной памяти список всех ссылок.
     * @private
     */
    private readStorageLinks() {
        const storageLinks = localStorage.getItem("links");
        if (!storageLinks) return [];

        return JSON.parse(storageLinks) as LinkT[];
    }

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

    constructor() {
        effect(this.onLinksChanged.bind(this));
    }
}
