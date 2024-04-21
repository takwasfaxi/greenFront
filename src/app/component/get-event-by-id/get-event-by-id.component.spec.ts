import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEventByIdComponent } from './get-event-by-id.component';

describe('GetEventByIdComponent', () => {
  let component: GetEventByIdComponent;
  let fixture: ComponentFixture<GetEventByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetEventByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetEventByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
