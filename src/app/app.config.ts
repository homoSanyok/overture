import {ApplicationConfig, provideZoneChangeDetection, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {registerLocaleData} from '@angular/common';
import ru from '@angular/common/locales/ru';
import {FormsModule} from '@angular/forms';
import {provideHttpClient} from '@angular/common/http';
import {providePrimeNG} from 'primeng/config';
import {GreenPreset} from './shared/presets/GreenPreset';

registerLocaleData(ru);

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideAnimationsAsync(),
        importProvidersFrom(FormsModule),
        provideAnimationsAsync(),
        provideHttpClient(),
        providePrimeNG({
            theme: {
                preset: GreenPreset,
                options: {
                    darkModeSelector: false
                }
            }
        })
    ]
};
