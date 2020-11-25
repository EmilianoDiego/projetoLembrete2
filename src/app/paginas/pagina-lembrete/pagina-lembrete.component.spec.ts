import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaLembreteComponent } from './pagina-lembrete.component';

describe('PaginaLembreteComponent', () => {
  let component: PaginaLembreteComponent;
  let fixture: ComponentFixture<PaginaLembreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaLembreteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaLembreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
