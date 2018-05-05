
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExampleComponent } from './dashboard-example.component';

describe('DashboardExampleComponent', () => {
  let component: DashboardExampleComponent;
  let fixture: ComponentFixture<DashboardExampleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
