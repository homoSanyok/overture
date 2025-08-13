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

export const Presets: PresetT[] = [
    {
        name: "emerald",
        preset: EmeraldPreset,
        options: { darkModeSelector: false }
    },
    {
        name: "green",
        preset: GreenPreset,
        options: { darkModeSelector: false }
    },
    {
        name: "lime",
        preset: LimePreset,
        options: { darkModeSelector: false }
    },
    {
        name: "orange",
        preset: OrangePreset,
        options: { darkModeSelector: false }
    },
    {
        name: "amber",
        preset: AmberPreset,
        options: { darkModeSelector: false }
    },
    {
        name: "yellow",
        preset: YellowPreset,
        options: { darkModeSelector: false }
    },
    {
        name: "teal",
        preset: TealPreset,
        options: { darkModeSelector: false }
    },
    {
        name: "cyan",
        preset: CyanPreset,
        options: { darkModeSelector: false }
    },
    {
        name: "sky",
        preset: SkyPreset,
        options: { darkModeSelector: false }
    },
    {
        name: "blue",
        preset: BluePreset,
        options: { darkModeSelector: false }
    },
    {
        name: "indigo",
        preset: IndigoPreset,
        options: { darkModeSelector: false }
    },
    {
        name: "violet",
        preset: VioletPreset,
        options: { darkModeSelector: false }
    },
    {
        name: "purple",
        preset: PurplePreset,
        options: { darkModeSelector: false }
    },
    {
        name: "fuchsia",
        preset: FuchsiaPreset,
        options: { darkModeSelector: false }
    },
    {
        name: "pink",
        preset: PinkPreset,
        options: { darkModeSelector: false }
    },
    {
        name: "rose",
        preset: RosePreset,
        options: { darkModeSelector: false }
    }
]