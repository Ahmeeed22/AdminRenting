import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedProductsTableComponent } from './approved-products-table.component';

describe('ApprovedProductsTableComponent', () => {
  let component: ApprovedProductsTableComponent;
  let fixture: ComponentFixture<ApprovedProductsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedProductsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
