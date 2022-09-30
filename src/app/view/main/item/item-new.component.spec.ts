import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNewComponent } from './item-new.component';

describe('ItemNewComponent', () => {
  let component: ItemNewComponent;
  let fixture: ComponentFixture<ItemNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
