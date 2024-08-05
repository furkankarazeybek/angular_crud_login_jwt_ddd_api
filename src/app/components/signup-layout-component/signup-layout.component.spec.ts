import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupLayoutComponent } from './signup-layout.component';

describe('SignupLayoutComponent', () => {
  let component: SignupLayoutComponent;
  let fixture: ComponentFixture<SignupLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
