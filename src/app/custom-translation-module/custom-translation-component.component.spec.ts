import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTranslationComponentComponent } from './custom-translation-component.component';

describe('CustomTranslationComponentComponent', () => {
  let component: CustomTranslationComponentComponent;
  let fixture: ComponentFixture<CustomTranslationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTranslationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTranslationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
