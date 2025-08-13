import {definePreset, palette} from '@primeng/themes';
import Material from "@primeng/themes/material";

export const PinkPreset = definePreset(Material, {
  semantic: {
    primary: palette("{pink}")
  }
});
