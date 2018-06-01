import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetailsComponent } from './animal-details.component';

describe('AnimalDetailsComponent', () => {
  let component: AnimalDetailsComponent;
  let fixture: ComponentFixture<AnimalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
