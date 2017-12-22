import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { CustomTranslationComponentComponent } from './custom-translation-component.component';

export class CustomLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    var languageObj: any = 
      {
        'en': {
          "Title": "Translation example",
          "Intro": "Hello I am {{name}}, I am {{age}} years old.",
          "Startpage": {
            "TranslationSections": "Hello World"
          },
          "Aboutpage": {
            "TranslationSections": "We are letsboot"
          }
        },        
        'fr': {
          "Title": "Exemple de traduction",
          "Intro": "Bonjour je m'appelle {{name}}, j'ai {{age}} ans.",
          "Startpage": {
            "TranslationSections": "Bonjour Monde"
          },
          "Aboutpage": {
            "TranslationSections": "Nous sommes letsboot"
          }
        }
      }   

    return Observable.of(languageObj[lang]);
  }
}
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomLoader,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [CustomTranslationComponentComponent]
})
export class CustomTranslationModuleModule { }
