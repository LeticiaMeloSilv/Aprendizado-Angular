import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaTelaComponent } from './segunda-tela.component';

describe('SegundaTelaComponent', () => {
  let component: SegundaTelaComponent;
  let fixture: ComponentFixture<SegundaTelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundaTelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundaTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
