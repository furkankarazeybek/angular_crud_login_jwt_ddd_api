import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDefaultPagesComponent } from './layout-default-pages.component';

describe('LayoutDefaultPagesComponent', () => {
  let component: LayoutDefaultPagesComponent;
  let fixture: ComponentFixture<LayoutDefaultPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutDefaultPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutDefaultPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
