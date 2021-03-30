import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCreatorComponent } from './field-creator.component';

describe('FieldCreatorComponent', () => {
  let component: FieldCreatorComponent;
  let fixture: ComponentFixture<FieldCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
