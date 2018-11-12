import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoanFormComponent } from './add-loan-form.component';

describe('AddLoanFormComponent', () => {
  let component: AddLoanFormComponent;
  let fixture: ComponentFixture<AddLoanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLoanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
