import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmarrimentoComponent } from './smarrimento.component';

describe('SmarrimentoComponent', () => {
  let component: SmarrimentoComponent;
  let fixture: ComponentFixture<SmarrimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmarrimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmarrimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
