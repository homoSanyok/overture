import {definePreset, palette} from '@primeng/themes';
import Material from "@primeng/themes/material";

export const TealPreset = definePreset(Material, {
  semantic: {
    primary: palette("{teal}")
  }
});
