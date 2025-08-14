import {effect, inject, Injectable, signal, untracked} from '@angular/core';
import {SettingsItemsT} from '../common/types/SettingsItems';
import {LinkT} from '../common/types/LinkT';
import {GreenPreset} from "../shared/presets/GreenPreset";
import {PresetNameT, PresetT} from "../common/types/PresetT";
import {Presets} from "../common/constants/Presets";
import {palette, usePreset} from "@primeng/themes";
import {PrimeNG} from "primeng/config";

@Injectable()
/**
 * Сервис хранит глобальное состояния статусов меню настроек: отрыто ли меню, какой элемент выбран.
 */
export class SettingsService {
    private readonly primeng = inject(PrimeNG);

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
    readonly selectedLink = signal<LinkT | undefined>(undefined);

    /**
     * Сигнал хранит состояние выбранного элемента link для редактирования.
     */
    readonly selectedEditingLink = signal<LinkT | undefined>(undefined);

    /**
     * Сигнал хранит состояние списка всех доступных элементов ссылок системы.
     * При инициализации сервиса, подгружает все элементы из локального хранилища.
     * При изменении значения сигнала обновляет локальное хранилище.
     */
    readonly links = signal<LinkT[] | undefined>(undefined);

    /**
     * Сигнал хранит состояние текущего выбранного пресета темы приложения.
     * По умолчанию подгружается пресет зелёной темы.
     * При инициализации сервиса подгружает последний выбранный пользователем пресет и устанавливает его.
     * При изменении пользователем пресета сохраняет выбранную настройку в локальную память.
     */
    readonly selectedPreset = signal<PresetT>({ name: "green", preset: GreenPreset, options: { darkModeSelector: false } });

    /**
     * Сигнал хранит состояние текущих размеров меню.
     * Если размер области стандартный, то значением сигнала будет `undefined`.
     *
     * Если размер области был изменён, то в сигнал запишутся значения размеров области
     * и в навигационной панели появится кнопка возврата размера в исходное состояние.
     */
    readonly resize = signal<{ w: string, h: string } | undefined>(undefined);

    /**
     * Обработка изменения состояния сигнала {@link links}.
     * По изменении перезаписывает текущий список элементов ссылок
     * в локальное хранилище.
     * @private
     */
    private onLinksChanged() {
        const links = this.links();
        if (!links) return;

        untracked(() => {
            const selectedLink = this.selectedLink();
            if (!selectedLink) return;

            this.selectedLink.set(links.find(link => link.id === selectedLink.id));
        });

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
            localStorage.setItem("preset", "green");
            return;
        }

        const selectedPreset = this.selectedPreset();
        if (selectedPreset.name === storagePresetName) return;

        const storagePreset = Presets.find(preset => preset.name === storagePresetName);
        if (!storagePreset) return;

        this.selectedPreset.set(storagePreset);
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

    constructor() {
        effect(this.onLinksChanged.bind(this));
        effect(this.onOpenChanged.bind(this));
        effect(this.onSelectedPresetChanged.bind(this));

        this.readStorageLinks();
        this.readStoragePreset();
    }
}
