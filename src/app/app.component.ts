import {Component} from '@angular/core';
import {NavbarComponent} from './common/components/navbar/navbar.component';
import {SettingsService} from './services/settings.service';
import {ContentComponent} from './common/components/content/content.component';
import {ResizeService} from "./services/resize.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    ContentComponent
  ],
  providers: [SettingsService, ResizeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
