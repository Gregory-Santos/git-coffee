import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  senha = '';

  mensagem = '';

  // Injeta o Router no componente
  constructor(private router: Router) {}

  loginDemo() {

    // Login e senha do administrador
    const loginAdministrador = 'admin';
    const senhaAdministrador = '1234';

    // Verifica os dados
    if (
      this.email === loginAdministrador &&
      this.senha === senhaAdministrador
    ) {

      this.mensagem = 'Login realizado com sucesso!';

      // Vai para a página do administrador
      this.router.navigate(['/administrador']);

    } else {

      this.mensagem = 'Login ou senha incorretos!';

    }
  }

  cadastroDemo() {
    console.log('Abrir tela de cadastro');
  }
}