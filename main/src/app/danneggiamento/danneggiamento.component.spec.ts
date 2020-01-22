import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanneggiamentoComponent } from './danneggiamento.component';

describe('DanneggiamentoComponent', () => {
  let component: DanneggiamentoComponent;
  let fixture: ComponentFixture<DanneggiamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanneggiamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanneggiamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
