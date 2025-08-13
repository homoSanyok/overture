import {definePreset, palette} from '@primeng/themes';
import Material from "@primeng/themes/material";

export const IndigoPreset = definePreset(Material, {
  semantic: {
    primary: palette("{indigo}")
  }
});
