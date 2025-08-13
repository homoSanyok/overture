import {definePreset, palette} from '@primeng/themes';
import Material from "@primeng/themes/material";

export const BluePreset = definePreset(Material, {
  semantic: {
    primary: palette("{blue}")
  }
});
