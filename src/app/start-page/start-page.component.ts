import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {
  user = {
    name: 'Arthur',
    age: 42
  };
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
  switchLanguage(language: string) {
    console.log('--previous lang--', this.translate.currentLang);
    this.translate.use(language);
    console.log('--current lang--', this.translate.currentLang);
  }
}