import {PresetT} from "../types/PresetT";
import {EmeraldPreset} from "../../shared/presets/EmeraldPreset";
import {GreenPreset} from "../../shared/presets/GreenPreset";
import {LimePreset} from "../../shared/presets/LimePreset";
import {OrangePreset} from "../../shared/presets/OrangePreset";
import {AmberPreset} from "../../shared/presets/AmberPreset";
import {YellowPreset} from "../../shared/presets/YellowPreset";
import {TealPreset} from "../../shared/presets/TealPreset";
import {CyanPreset} from "../../shared/presets/CyanPreset";
import {SkyPreset} from "../../shared/presets/SkyPreset";
import {BluePreset} from "../../shared/presets/BluePreset";
import {IndigoPreset} from "../../shared/presets/IndigoPreset";
import {VioletPreset} from "../../shared/presets/VioletPreset";
import {PurplePreset} from "../../shared/presets/PurplePreset";
import {FuchsiaPreset} from "../../shared/presets/FuchsiaPreset";
import {PinkPreset} from "../../shared/presets/PinkPreset";
import {RosePreset} from "../../shared/presets/RosePreset";

/**
 * Список всех доступных цветовых тем приложения.
 * Используется в компоненте {@link SettingsMenuPaletteComponent}.
 */
export const Presets: PresetT[] = [
    {
        name: "emerald",
        preset: EmeraldPreset,
        options: { darkModeSelector: ".dark" }
    },
    {
        name: "green",
        preset: GreenPreset,
        options: { darkModeSelector: ".dark" }
    },
    {
        name: "lime",
        preset: LimePreset,
        options: { darkModeSelector: ".dark" }
    },
    {
        name: "orange",
        preset: OrangePreset,
        options: { darkModeSelector: ".dark" }
    },
    {
        name: "amber",
        preset: AmberPreset,
        options: { darkModeSelector: ".dark" }
    },
    {
        name: "yellow",
        preset: YellowPreset,
        options: { darkModeSelector: ".dark" }
    },
    {
        name: "teal",
        preset: TealPreset,
        options: { darkModeSelector: ".dark" }
    },
    {
        name: "cyan",
        preset: CyanPreset,
        options: { darkModeSelector: ".dark" }
    },
    {
        name: "sky",
        preset: SkyPreset,
        options: { darkModeSelector: ".dark" }
    },
    {
        name: "blue",
        preset: BluePreset,
        options: { darkModeSelector: ".dark" }
    },
    {
        name: "indigo",
        preset: IndigoPreset,
        options: { darkModeSelector: ".dark" }
    },
    {
        name: "violet",
        preset: VioletPreset,
        options: { darkModeSelector: ".dark" }
    },
    {
        name: "purple",
        preset: PurplePreset,
        options: { darkModeSelector: ".dark" }
    },
    {
        name: "fuchsia",
        preset: FuchsiaPreset,
        options: { darkModeSelector: ".dark" }
    },
    {
        name: "pink",
        preset: PinkPreset,
        options: { darkModeSelector: ".dark" }
    },
    {
        name: "rose",
        preset: RosePreset,
        options: { darkModeSelector: ".dark" }
    }
]