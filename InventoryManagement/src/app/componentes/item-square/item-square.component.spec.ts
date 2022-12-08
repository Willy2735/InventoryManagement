import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSquareComponent } from './item-square.component';

describe('ItemSquareComponent', () => {
  let component: ItemSquareComponent;
  let fixture: ComponentFixture<ItemSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSquareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //a
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
