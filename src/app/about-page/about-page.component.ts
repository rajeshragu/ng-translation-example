import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {
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
