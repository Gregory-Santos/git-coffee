import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Administrador } from './administrador';

describe('Administrador', () => {
    let component: Administrador;
    let fixture: ComponentFixture<Administrador>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Administrador],
        }).compileComponents();

        fixture = TestBed.createComponent(Administrador);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
