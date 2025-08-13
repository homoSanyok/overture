import {definePreset, palette} from '@primeng/themes';
import Material from "@primeng/themes/material";

export const AmberPreset = definePreset(Material, {
  semantic: {
    primary: palette("{amber}")
  }
});
