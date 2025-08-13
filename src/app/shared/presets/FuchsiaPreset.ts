import {definePreset, palette} from '@primeng/themes';
import Material from "@primeng/themes/material";

export const FuchsiaPreset = definePreset(Material, {
  semantic: {
    primary: palette("{fuchsia}")
  }
});
