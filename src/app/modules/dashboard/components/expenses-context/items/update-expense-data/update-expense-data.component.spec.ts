import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExpenseDataComponent } from './update-expense-data.component';

describe('UpdateExpenseDataComponent', () => {
  let component: UpdateExpenseDataComponent;
  let fixture: ComponentFixture<UpdateExpenseDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExpenseDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateExpenseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
