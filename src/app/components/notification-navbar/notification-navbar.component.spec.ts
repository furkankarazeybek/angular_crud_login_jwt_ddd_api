import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationNavbarComponent } from './notification-navbar.component';

describe('NotificationNavbarComponent', () => {
  let component: NotificationNavbarComponent;
  let fixture: ComponentFixture<NotificationNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
