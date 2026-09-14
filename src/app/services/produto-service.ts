import { Service } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoAdmin } from '../feats/produtos/models/produto-admin';

@Injectable({ providedIn: 'root' })
export class ProdutoService {
    private apiUrl = 'http://localhost:8080/produtos';

  constructor(private http: HttpClient) {}

  listar(nome?: string): Observable<ProdutoAdmin[]> {
    const url = nome ? `${this.apiUrl}?nome=${nome}` : this.apiUrl;
    return this.http.get<ProdutoAdmin[]>(url);
  }

  buscarPorId(id: number): Observable<ProdutoAdmin> {
    return this.http.get<ProdutoAdmin>(`${this.apiUrl}/${id}`);
  }

  criar(produto: ProdutoAdmin): Observable<ProdutoAdmin> {
    return this.http.post<ProdutoAdmin>(this.apiUrl, produto);
  }

  atualizar(id: number, produto: ProdutoAdmin): Observable<ProdutoAdmin> {
    return this.http.put<ProdutoAdmin>(`${this.apiUrl}/${id}`, produto);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
