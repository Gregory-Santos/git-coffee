import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Carrinho } from "./feats/carrinho/carrinho";
import { Cadastrar } from "./feats/adm/cadastrar/cadastrar";

@Component({
  imports: [RouterOutlet, Header, Footer, Carrinho, Cadastrar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('git-coffee');
}
