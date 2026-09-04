import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  email = '';
  senha = '';

  loginDemo(): void {
    // Apenas demonstração — não envia nem armazena credenciais.
    console.log('Demonstração de login');
  }

  cadastroDemo(): void {
    console.log('Demonstração de cadastro');
  }
}
