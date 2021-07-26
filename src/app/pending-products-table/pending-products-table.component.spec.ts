import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingProductsTableComponent } from './pending-products-table.component';

describe('PendingProductsTableComponent', () => {
  let component: PendingProductsTableComponent;
  let fixture: ComponentFixture<PendingProductsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingProductsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
