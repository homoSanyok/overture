import {effect, inject, Injectable, signal, untracked} from '@angular/core';
import {SettingsItemsT} from '../common/types/SettingsItems';
import {LinkT} from '../common/types/LinkT';
import {GreenPreset} from "../shared/presets/GreenPreset";
import {PresetNameT, PresetT} from "../common/types/PresetT";
import {Presets} from "../common/constants/Presets";
import {palette, usePreset} from "@primeng/themes";
import {PrimeNG} from "primeng/config";
import {LinksService} from "./links.service";

@Injectable()
/**
 * Сервис хранит глобальное состояния статусов меню настроек: отрыто ли меню, какой элемент выбран.
 */
export class SettingsService {
    private readonly primeng = inject(PrimeNG);
    private readonly links = inject(LinksService);

    /**
     * Сигнал хранит состояние, открыто ли меню настроек.
     */
    readonly open = signal<boolean>(false);

    /**
     * Сигнал хранит состояние, какое меню открыто.
     */
    readonly selectedMenu = signal<SettingsItemsT | undefined>(undefined);

    /**
     * Сигнал хранит состояние выбранного элемента link.
     */
    readonly selectedLink = signal<LinkT | undefined>(this.readStorageSelectedLink());

    /**
     * Сигнал хранит состояние выбранного элемента link для редактирования.
     */
    readonly selectedEditingLink = signal<LinkT | undefined>(undefined);

    /**
     * Сигнал хранит состояние текущего выбранного пресета темы приложения.
     * По умолчанию подгружается пресет зелёной темы.
     * При инициализации сервиса подгружает последний выбранный пользователем пресет и устанавливает его.
     * При изменении пользователем пресета сохраняет выбранную настройку в локальную память.
     */
    readonly selectedPreset = signal<PresetT>({ name: "green", preset: GreenPreset, options: { darkModeSelector: false } });

    /**
     * Обработка изменения состояния сигнала {@link LinksService.links}.
     * По изменении перезаписывает текущую выбранную ссылку, если такая была.
     * Если текущая выбранная ссылка была удалена из общего списка, записывает undefined.
     * @private
     */
    private onLinksChanged() {
        const links = this.links.links();
        if (!links) return;

        untracked(() => {
            const selectedLink = this.selectedLink();
            if (!selectedLink) return;

            this.selectedLink.set(links.find(link => link.id === selectedLink.id));
        });
    }

    /**
     * Обработка изменения выбранного пресета темы.
     * Записывает обновление пресета в локальную память и
     * применяет настройки пресета для всего приложения.
     * @private
     */
    private onSelectedPresetChanged() {
        const selectedPreset = this.selectedPreset();

        untracked(() => {
            localStorage.setItem("preset", selectedPreset.name);
            this.primeng.theme.set(selectedPreset);
        });
    }

    /**
     * Функция читает из локальной памяти последнюю
     * пользовательскую настройку пресета и задаёт её сигналу {@link selectedPreset}.
     * Функция вызывается при запуске сервиса.
     * @private
     */
    private readStoragePreset() {
        const storagePresetName = localStorage.getItem("preset") as PresetNameT | null;
        if (!storagePresetName) {
            // Если пресета в локальной памяти нет,
            // записывает в память стандартный зелёный.
            localStorage.setItem("preset", "green");
            return;
        }

        const selectedPreset = this.selectedPreset();
        // Если текущий выбранный пресет совпадает с тем,
        // что в локальной памяти, ничего не делать.
        if (selectedPreset.name === storagePresetName) return;

        // Ищет объект пресета по названию и если такого объекта нет
        // ничего не делает.
        const storagePreset = Presets.find(preset => preset.name === storagePresetName);
        if (!storagePreset) return;

        this.selectedPreset.set(storagePreset);
    }

    /**
     * Функция читает из локальной памяти значение последней выбранной
     * пользователем ссылки и возвращает её.
     * Используется для присвоения сигналу {@link selectedLink} начального значения.
     * @private
     */
    private readStorageSelectedLink() {
        const selectedLink = localStorage.getItem("selectedLink");
        if (!selectedLink) return;

        return JSON.parse(selectedLink) as LinkT;
    }

    /**
     * Обработка изменения состояния открытия меню настроек {@link open}.
     * Если меню закрыто, задаёт сигналу {@link selectedMenu},
     * определяющему текущее открытое меню настроек, значение `undefined`.
     *
     * Также обнуляет {@link selectedEditingLink}.
     * @private
     */
    private onOpenChanged() {
        const open = this.open();

        untracked(() => {
            const selectedMenu = this.selectedMenu();
            if (selectedMenu && !open) {
                this.selectedMenu.set(undefined);
                this.selectedEditingLink.set(undefined);
            }
        });
    }

    /**
     * Функция обработки изменения значения сигнала {@link selectedLink}.
     * По изменении записывает значение в локальную память.
     * @private
     */
    private onSelectedLinkChanged() {
        const selectedLink = this.selectedLink();
        if (!selectedLink) {
            // Если ссылка не выбрана, чистит локальную память.
            localStorage.removeItem("selectedLink");
            return;
        }

        // Если выбрана ссылка, записывает её в локальную память.
        localStorage.setItem("selectedLink", JSON.stringify(selectedLink));
    }

    constructor() {
        effect(this.onLinksChanged.bind(this));
        effect(this.onOpenChanged.bind(this));
        effect(this.onSelectedPresetChanged.bind(this));
        effect(this.onSelectedLinkChanged.bind(this));

        this.readStoragePreset();
    }
}
