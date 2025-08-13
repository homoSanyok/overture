import {Component} from '@angular/core';
import {NavbarComponent} from './common/components/navbar/navbar.component';
import {SettingsService} from './services/settings.service';
import {ContentComponent} from './common/components/content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    ContentComponent
  ],
  providers: [SettingsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
