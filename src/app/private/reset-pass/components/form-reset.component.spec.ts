import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetFormComponent } from './form-reset.component';

describe('ResetFormComponent', () => {
  let component: ResetFormComponent;
  let fixture: ComponentFixture<ResetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
