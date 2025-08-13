import {definePreset, palette} from '@primeng/themes';
import Material from "@primeng/themes/material";

export const PurplePreset = definePreset(Material, {
  semantic: {
    primary: palette("{purple}")
  }
});
