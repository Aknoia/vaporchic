import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servizio } from './servizio';

describe('Servizio', () => {
  let component: Servizio;
  let fixture: ComponentFixture<Servizio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servizio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servizio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
