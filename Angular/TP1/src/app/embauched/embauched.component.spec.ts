import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbauchedComponent } from './embauched.component';

describe('EmbauchedComponent', () => {
  let component: EmbauchedComponent;
  let fixture: ComponentFixture<EmbauchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbauchedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbauchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
