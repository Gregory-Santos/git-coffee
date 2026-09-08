import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutosApi } from './produtos-api';

describe('ProdutosApi', () => {
  let component: ProdutosApi;
  let fixture: ComponentFixture<ProdutosApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosApi],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutosApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
