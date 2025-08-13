import {definePreset, palette} from '@primeng/themes';
import Material from "@primeng/themes/material";

export const CyanPreset = definePreset(Material, {
  semantic: {
    primary: palette("{cyan}")
  }
});
