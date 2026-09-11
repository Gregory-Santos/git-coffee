import { Component } from '@angular/core';
import { Cadastrados } from "./cadastrados/cadastrados";
import { Cadastrar } from "./cadastrar/cadastrar";

@Component({
    imports: [Cadastrados, Cadastrar],
    selector: 'app-adm',
    styleUrl: './adm.css',
    templateUrl: './adm.html',
})
export class Adm {}
