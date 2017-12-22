import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutPageComponent } from './about-page.component';

export class CustomLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    var languageObj: any = 
      {
        'en': {
          "Title": "Translation example",
          "Intro": "Hello I am {{name}}, I am {{age}} years old.",
          "Aboutpage": {
            "TranslationSections": "We are letsboot"
          }
        },        
        'fr': {
          "Title": "Exemple de traduction",
          "Intro": "Bonjour je m'appelle {{name}}, j'ai {{age}} ans.",
          "Aboutpage": {
            "TranslationSections": "Nous sommes letsboot"
          }
        }
      }   

    return Observable.of(
      languageObj[lang]
    );
  }
}

@NgModule({
  imports: [
    CommonModule,
    AboutPageRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomLoader,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [AboutPageComponent]
})
export class AboutPageModule { }
