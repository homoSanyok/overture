import {definePreset, palette} from '@primeng/themes';
import Material from "@primeng/themes/material";

export const LimePreset = definePreset(Material, {
  semantic: {
    primary: palette("{lime}")
  }
});
