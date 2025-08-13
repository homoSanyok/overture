import {definePreset, palette} from '@primeng/themes';
import Material from "@primeng/themes/material";

export const RosePreset = definePreset(Material, {
  semantic: {
    primary: palette("{rose}")
  }
});
