/**
 * @module ResizeService
 */
import {effect, Injectable, signal} from '@angular/core';

@Injectable()
/**
 * Глобальный сервис, обеспечивающий единый интерфейс доступа к параметрам ресайза
 * основной области.
 *
 * Выделен для сохранения параметров ресайза в локальную память.
 */
export class ResizeService {
    /**
     * Сигнал хранит состояние текущих размеров меню.
     * Если размер области стандартный, то значением сигнала будет `undefined`.
     *
     * Если размер области был изменён, то в сигнал запишутся значения размеров области
     * и в навигационной панели появится кнопка возврата размера в исходное состояние.
     */
    readonly resize = signal<{ w: string, h: string } | undefined>(this.readStorageResize());

    /**
     * Возвращает храняющуюся в локальной памяти конфигурацию
     * ресайза.
     *
     * @private
     */
    private readStorageResize() {
        const storageData = localStorage.getItem("resize");
        if (!storageData) return;

        return JSON.parse(storageData) as { w: string, h: string };
    }

    /**
     * Обработка изменения параметров ресайза.
     * По изменении записывает текущую конфигурацию в локальную память.
     * @private
     */
    private onResizeChanged() {
        const resize = this.resize();
        if (!resize) {
            localStorage.removeItem("resize");
            return;
        }

        localStorage.setItem("resize", JSON.stringify(this.resize()));
    }

    constructor() {
        effect(this.onResizeChanged.bind(this));
    }
}
