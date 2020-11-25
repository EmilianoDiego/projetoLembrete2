import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LembreteInserirComponent } from './lembrete-inserir.component';

describe('LembreteInserirComponent', () => {
  let component: LembreteInserirComponent;
  let fixture: ComponentFixture<LembreteInserirComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LembreteInserirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LembreteInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
