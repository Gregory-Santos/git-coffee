import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutosCard } from './produtos-card';

describe('ProdutosCard', () => {
  let component: ProdutosCard;
  let fixture: ComponentFixture<ProdutosCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosCard]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProdutosCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
