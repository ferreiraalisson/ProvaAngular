import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivosEtapaComponent } from './arquivos-etapa.component';

describe('ArquivosEtapaComponent', () => {
  let component: ArquivosEtapaComponent;
  let fixture: ComponentFixture<ArquivosEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArquivosEtapaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArquivosEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
