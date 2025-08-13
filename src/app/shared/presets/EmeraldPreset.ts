import {definePreset, palette} from '@primeng/themes';
import Material from "@primeng/themes/material";

export const EmeraldPreset = definePreset(Material, {
    semantic: {
        primary: palette("{emerald}")
    }
});
