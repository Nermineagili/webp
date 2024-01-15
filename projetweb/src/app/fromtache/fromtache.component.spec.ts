import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromtacheComponent } from './fromtache.component';

describe('FromtacheComponent', () => {
  let component: FromtacheComponent;
  let fixture: ComponentFixture<FromtacheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FromtacheComponent]
    });
    fixture = TestBed.createComponent(FromtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
