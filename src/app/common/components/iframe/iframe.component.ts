import { Component, computed, ElementRef, inject, viewChild } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  standalone: true,
  imports: [],
  templateUrl: './iframe.component.html',
  styleUrl: './iframe.component.scss'
})
export class IframeComponent {
  private readonly settings = inject(SettingsService);
  private readonly sanitizer = inject(DomSanitizer); 

  /**
   * Мемоизированная ссылка текщего выбранного элемента link для шаблона.
   */
  readonly src = computed(() => {
    const url = this.settings.selectedLink()?.path || '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });
}
