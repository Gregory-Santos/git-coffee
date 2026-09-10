import { computed, inject, Service, signal } from '@angular/core';
import { ItemCarrinhoInterface } from './item-carrinho-interface';
import { Produto } from '../produtos/models/produto';
import { PRODUTOS_API } from '../produtos/models/produtos-api/produtos-api';

@Service()
export class CarrinhoService {

    //Chamando a interface do produto//


    //Chama interface do meu carrinho, chama produto API//
    carrinho = signal<ItemCarrinhoInterface[]>([]);


    //contador inicia com zero, mas o ato de adicionar vai ser 1//
    contador = computed(() =>
        this.carrinho().reduce(
            (total, item) => total + (item.quantidade ?? 0),
            0
        )
    );


    //Calculo do valor do produto vezes o contador//
    total = computed(() =>
        this.carrinho().reduce(
            (total, item) =>
                total + item.produto.preco * (item.quantidade ?? 0),
            0
        )
    );

    //Função do + aperta e o contador aumenta a quantidade de produto//
    incrementar(id: number) {
        this.carrinho.update(itens =>
            itens.map(item =>
                item.produto.id === id
                    ? {
                        ...item,
                        quantidade: (item.quantidade ?? 0) + 1
                    }
                    : item
            )
        );
    }

    //valor fixo de frete//
    envio = signal(7);


    //Função do - aperta e o contador diminui a quantidade de produto, ele começa no zero//
    diminuir(id: number) {
        this.carrinho.update(itens =>
            itens.map(item =>
                item.produto.id === id
                    ? {
                        ...item,
                        quantidade: Math.max((item.quantidade ?? 0) - 1, 0)
                    }
                    : item
            )
        );
    }



    //Função da lixeira, ela zera o contador, mas precisa excluir o produto//
    zerar(id: number) {
        this.carrinho.update(itens =>
            itens.filter(item => item.produto.id !== id)
        );
    }

    //calculo do total no resumo da compra total, se o valor do contador for 0 o envio vai ser 0 //
    totalFinal = computed(() => this.total() + (this.contador() > 0 ? this.envio() : 0));



    //função de adicionar produto pelo botão de adicionar na Page produtos //

    adicionado = signal(false);

    adicionarProduto(produto: Produto) {
        this.carrinho.update(itens => {

            const existente = itens.find(
                item => item.produto.id === produto.id
            );

            if (existente) {
                return itens.map(item => item.produto.id === produto.id
                    ? { ...item, quantidade: (item.quantidade ?? 0) + 1 }
                    : item
                );
            }

            return [...itens, { produto, quantidade: 1 }];
        })

    }
}
