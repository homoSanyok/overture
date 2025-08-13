import {definePreset, palette} from '@primeng/themes';
import Material from "@primeng/themes/material";

export const SkyPreset = definePreset(Material, {
  semantic: {
    primary: palette("{sky}")
  }
});
