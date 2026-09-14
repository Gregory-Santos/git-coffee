import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesProdutos } from './detalhes-produtos';

describe('DetalhesProdutos', () => {
    let component: DetalhesProdutos;
    let fixture: ComponentFixture<DetalhesProdutos>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DetalhesProdutos],
        }).compileComponents();

        fixture = TestBed.createComponent(DetalhesProdutos);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
