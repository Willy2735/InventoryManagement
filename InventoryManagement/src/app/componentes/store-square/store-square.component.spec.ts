import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSquareComponent } from './store-square.component';

describe('StoreSquareComponent', () => {
  let component: StoreSquareComponent;
  let fixture: ComponentFixture<StoreSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreSquareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
