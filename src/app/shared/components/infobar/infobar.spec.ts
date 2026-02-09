import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infobar } from './infobar';

describe('Infobar', () => {
  let component: Infobar;
  let fixture: ComponentFixture<Infobar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infobar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infobar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
