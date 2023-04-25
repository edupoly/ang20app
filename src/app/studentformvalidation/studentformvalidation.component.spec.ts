import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentformvalidationComponent } from './studentformvalidation.component';

describe('StudentformvalidationComponent', () => {
  let component: StudentformvalidationComponent;
  let fixture: ComponentFixture<StudentformvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentformvalidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentformvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
