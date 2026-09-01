import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutosFiltros } from './produtos-filtros';

describe('ProdutosFiltros', () => {
  let component: ProdutosFiltros;
  let fixture: ComponentFixture<ProdutosFiltros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosFiltros]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProdutosFiltros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
