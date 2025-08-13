import {definePreset, palette} from '@primeng/themes';
import Material from "@primeng/themes/material";

export const VioletPreset = definePreset(Material, {
  semantic: {
    primary: palette("{violet}")
  }
});
