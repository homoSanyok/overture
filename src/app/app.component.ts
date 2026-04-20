import { Component } from '@angular/core';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { SettingsService } from './services/settings.service';
import { ContentComponent } from './common/components/content/content.component';
import { ResizerService } from "./services/resizer.service";
import { LinksService } from "./services/links.service";

import { AnchorAssistant, Anchor, OpenAPI } from "anchor-assistant";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    ContentComponent
  ],
  providers: [SettingsService, ResizerService, LinksService],
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

    const connector = new OpenAPI(anchors, {
      model: "qwen2.5-3b-lora",
      max_tokens: 64,
      temperature: 0,
      model_url: "http://localhost:8000/v1/chat/completions"
    });
    new AnchorAssistant(connector, undefined, { delay: 300 });
  }
}
