import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Categorias } from './categorias';

describe('Categorias', () => {
    let component: Categorias;
    let fixture: ComponentFixture<Categorias>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Categorias],
        }).compileComponents();

        fixture = TestBed.createComponent(Categorias);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
