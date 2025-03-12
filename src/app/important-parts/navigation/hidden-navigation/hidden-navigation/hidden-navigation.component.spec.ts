import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenNavigationComponent } from './hidden-navigation.component';

describe('HiddenNavigationComponent', () => {
  let component: HiddenNavigationComponent;
  let fixture: ComponentFixture<HiddenNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HiddenNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiddenNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
