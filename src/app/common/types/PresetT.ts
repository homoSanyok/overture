export type PresetNameT = "emerald" |
    "green" |
    "lime" |
    "orange" |
    "amber" |
    "yellow" |
    "teal" |
    "cyan" |
    "sky" |
    "blue" |
    "indigo" |
    "violet" |
    "purple" |
    "fuchsia" |
    "pink" |
    "rose";

export type PresetT = {
    name: PresetNameT,
    preset: any,
    options: {
        darkModeSelector: boolean
    }
}