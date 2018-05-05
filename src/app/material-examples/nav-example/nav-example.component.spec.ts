
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavExampleComponent } from './nav-example.component';

describe('NavExampleComponent', () => {
  let component: NavExampleComponent;
  let fixture: ComponentFixture<NavExampleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
