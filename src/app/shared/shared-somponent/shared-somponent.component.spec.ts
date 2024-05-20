import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSomponentComponent } from './shared-somponent.component';

describe('SharedSomponentComponent', () => {
  let component: SharedSomponentComponent;
  let fixture: ComponentFixture<SharedSomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedSomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedSomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
