import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesProcessoComponent } from './detalhes-processo.component';

describe('DetalhesProcessoComponent', () => {
  let component: DetalhesProcessoComponent;
  let fixture: ComponentFixture<DetalhesProcessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesProcessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
