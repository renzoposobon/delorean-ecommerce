import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAdminComponent } from './store-admin.component';

describe('StoreAdminComponent', () => {
  let component: StoreAdminComponent;
  let fixture: ComponentFixture<StoreAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
