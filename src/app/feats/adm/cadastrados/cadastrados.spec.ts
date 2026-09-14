import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cadastrados } from './cadastrados';

describe('Cadastrados', () => {
    let component: Cadastrados;
    let fixture: ComponentFixture<Cadastrados>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Cadastrados],
        }).compileComponents();

        fixture = TestBed.createComponent(Cadastrados);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
