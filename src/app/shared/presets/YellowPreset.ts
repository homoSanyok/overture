import {definePreset, palette} from '@primeng/themes';
import Material from "@primeng/themes/material";

export const YellowPreset = definePreset(Material, {
  semantic: {
    primary: palette("{yellow}")
  }
});
