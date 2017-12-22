import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

import { StartPageRoutingModule } from './start-page-routing.module';
import { StartPageComponent } from './start-page.component';
import { CustomTranslationModuleModule } from '../custom-translation-module/custom-translation-module.module';

export class CustomLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    var languageObj: any = 
      {
        'en': {
          "Title": "Translation example",
          "Intro": "Hello I am {{name}}, I am {{age}} years old.",
          "Startpage": {
            "TranslationSections": "Hello World"
          }
        },
        
        'fr': {
          "Title": "Exemple de traduction",
          "Intro": "Bonjour je m'appelle {{name}}, j'ai {{age}} ans.",
          "Startpage": {
            "TranslationSections": "Bonjour Monde"
          }
        }
      }   

    return Observable.of(languageObj[lang]);
  }
}

@NgModule({
  imports: [
    CommonModule,
    StartPageRoutingModule,
    HttpClientModule,
    CustomTranslationModuleModule
  ],
  declarations: [StartPageComponent, CustomTranslationModuleModule]
})
export class StartPageModule { }
