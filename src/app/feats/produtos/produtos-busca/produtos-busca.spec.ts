import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutosBusca } from './produtos-busca';

describe('ProdutosBusca', () => {
  let component: ProdutosBusca;
  let fixture: ComponentFixture<ProdutosBusca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosBusca]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProdutosBusca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
