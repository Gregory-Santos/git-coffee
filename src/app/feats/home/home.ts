import { Component } from '@angular/core';
import { Carrossel } from "../carrossel/carrossel";
import { Categorias } from "../categorias/categorias";

@Component({
  imports: [Carrossel, Categorias],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
