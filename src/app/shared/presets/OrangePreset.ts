import {definePreset, palette} from '@primeng/themes';
import Material from "@primeng/themes/material";

export const OrangePreset = definePreset(Material, {
  semantic: {
    primary: palette("{orange}")
  }
});
