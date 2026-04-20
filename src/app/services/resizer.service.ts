/**
 * @module ResizeService
 */
import { effect, Injectable, signal } from '@angular/core';

@Injectable()
/**
 * Глобальный сервис, обеспечивающий единый интерфейс доступа к параметрам ресайза
 * основной области.
 *
 * Выделен для сохранения параметров ресайза в локальную память.
 */
export class ResizerService {
    /**
     * Сигнал хранит состояние текущих размеров меню.
     * Если размер области стандартный, то значением сигнала будет `undefined`.
     *
     * Если размер области был изменён, то в сигнал запишутся значения размеров области
     * и в навигационной панели появится кнопка возврата размера в исходное состояние.
     */
    readonly size = signal<{ w: string, h: string } | undefined>(this.readStorageSize());

    /**
     * Возвращает храняющуюся в локальной памяти конфигурацию
     * ресайза.
     *
     * @private
     */
    private readStorageSize() {
        const storageData = localStorage.getItem("size");
        if (!storageData) return;

        return JSON.parse(storageData) as { w: string, h: string };
    }

    /**
     * Обработка изменения параметров ресайза.
     * По изменении записывает текущую конфигурацию в локальную память.
     * @private
     */
    private onResizeChanged() {
        const resize = this.size();
        if (!resize) {
            localStorage.removeItem("size");
            return;
        }

        localStorage.setItem("size", JSON.stringify(this.size()));
    }

    constructor() {
        effect(this.onResizeChanged.bind(this));
    }
}
