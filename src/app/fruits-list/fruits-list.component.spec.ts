import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsListComponent } from './fruits-list.component';

describe('FruitsListComponent', () => {
  let component: FruitsListComponent;
  let fixture: ComponentFixture<FruitsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
