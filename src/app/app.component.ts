import { Component } from '@angular/core';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { SettingsService } from './services/settings.service';
import { ContentComponent } from './common/components/content/content.component';
import { ResizeService } from "./services/resize.service";
import { LinksService } from "./services/links.service";

import { AnchorAssistant, Anchor, GigaChat } from "anchor-assistant";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    ContentComponent
  ],
  providers: [SettingsService, ResizeService, LinksService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {
    const anchors: Anchor[] = [
      {
        selector: "#settings-button",
        anchor: "кнопка настроек, открыть настройки",
        parent_selector: "root"
      },
      {
        selector: "#link-button",
        anchor: "открыть ссылку, выбрать элемент",
        parent_selector: "root"
      },
      {
        selector: "#edit-link-button",
        anchor: "изменить ссылку, изменить элемент, редактировать ссылку",
        parent_selector: "#settings-button"
      },
      {
        selector: "#settings-edit",
        anchor: "меню создания элемента, добавить ссылку, создать элемент",
        parent_selector: "#settings-button"
      },
      {
        selector: "#settings-palette",
        anchor: "изменить тему, меню смены цветовой схемы приложения",
        parent_selector: "#settings-button"
      }
    ];

    const connector = new GigaChat(anchors, {
      accessor_url: "/accessor",
      model_url: "/model",

      authorization_key: "OWEzNmJkZmEtOWMwNi00OTg2LTlkOTYtZGMwYzcxNDNhMjZiOmRmNjdhYWRlLWNkNjgtNDJhOS1hNjI3LTg3ZmVkNWQ2NGE4Yw==",
      scope: "GIGACHAT_API_PERS",
      model: "GigaChat-2"
    });
    new AnchorAssistant(connector, undefined, { delay: 300 });
  }
}
