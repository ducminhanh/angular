import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAdd } from './brand-add';

describe('BrandAdd', () => {
  let component: BrandAdd;
  let fixture: ComponentFixture<BrandAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
