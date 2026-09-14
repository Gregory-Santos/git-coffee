import { Component } from '@angular/core';
import { Administrador } from './administrador/administrador';


@Component({
  selector: 'app-login',

  // Componentes filhos que serão usados no HTML
  imports: [Administrador],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  // Guarda o tipo de usuário que fez login
  tipoUsuario = '';

  // Guarda a mensagem de erro
  mensagem = '';


  // Função responsável pelo login
  login(email: string, senha: string): void {

    // Limpa mensagem de erro
    this.mensagem = '';


    // Verifica se é administrador
    if (
      email === 'admin@email.com' &&
      senha === '1234'
    ) {

      this.tipoUsuario = 'admin';

      return;
    }


    // Verifica se é usuário comum
    if (
      email === 'usuario@email.com' &&
      senha === '1234'
    ) {

      this.tipoUsuario = 'usuario';

      return;
    }


    // Se não encontrou nenhum usuário
    this.mensagem = 'Email ou senha incorretos.';
  }


  // Volta para a tela de login
  sair(): void {

    this.tipoUsuario = '';

  }
}