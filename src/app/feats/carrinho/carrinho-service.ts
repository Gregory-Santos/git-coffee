import { computed, Service, signal } from '@angular/core';
import { ItemCarrinhoInterface } from './item-carrinho-interface';
import { Produto } from '../produtos/models/produto';

@Service()
export class CarrinhoService {
    //Chamando a interface do produto//
    protected produtoFicticio = signal<Produto>(
        {
            id: 1,
            nome: 'Café',
            descricao: 'Café com torra média, toques de caramelo',
            preco: 20.90,
            img: 'img/grao-cafe.png'
        });

    //Chamando a interface do meu carrinho//
    carrinho = signal<ItemCarrinhoInterface[]>([
        {
            produto: this.produtoFicticio(),
            quantidade: 2

        }

    ]);

    //contador inicia com zero, mas o ato de adicionar vai ser 1//
    contador = signal(0);

    //Calculo do valor do produto vezes o contador//
    total = computed(() =>
        {
         if (this.contador() === 0) {
    return 0;
  } return this.produtoFicticio().preco * this.contador() + this.envio();
    });

//Função do + aperta e o contador aumenta a quantidade de produto//
    incrementar() {
        this.contador.update(valor => valor + 1);
    }
    
//valor fixo de frete//
    envio = signal(7);


    //Função do - aperta e o contador diminui a quantidade de produto, ele começa no zero//
    diminuir() {
        if (this.contador() > 0) {
            this.contador.update(valor => valor - 1);
        }
    };
//Função da lixeira, ela zera o contador, mas precisa excluir o produto//
    zerar() {
        this.contador.set(0);
    };

//calculo do total no resumo da compra total, se o valor do contador for 0 o envio vai ser 0 //
    totalFinal = computed(() => this.total() + (this.contador() > 0 ? this.envio() : 0));
}