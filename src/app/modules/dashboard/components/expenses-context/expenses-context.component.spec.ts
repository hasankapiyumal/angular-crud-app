import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesContextComponent } from './expenses-context.component';

describe('ExpensesContextComponent', () => {
  let component: ExpensesContextComponent;
  let fixture: ComponentFixture<ExpensesContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
