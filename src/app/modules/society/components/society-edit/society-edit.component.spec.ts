import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyEditComponent } from './society-edit.component';

describe('SocietyEditComponent', () => {
  let component: SocietyEditComponent;
  let fixture: ComponentFixture<SocietyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
