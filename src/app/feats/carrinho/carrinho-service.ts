import { computed, inject, Service, signal } from '@angular/core';
import { ItemCarrinhoInterface } from './item-carrinho-interface';
import { Produto } from '../produtos/models/produto';
import { PRODUTOS_API } from '../produtos/models/produtos-api/produtos-api';

@Service()
export class CarrinhoService {

    //Chamando a interface do produto//


    //Chama interface do meu carrinho, chama produto API//
    carrinho = signal<ItemCarrinhoInterface[]>([
        {
            produto: PRODUTOS_API[0],
            quantidade: 0

        }

    ]);


    //contador inicia com zero, mas o ato de adicionar vai ser 1//
    contador = computed(()=> this.carrinho() [0].quantidade ?? 0)


    //Calculo do valor do produto vezes o contador//
    total = computed(() => {
        if (this.contador() === 0) {
            return 0;
        } return this.carrinho()[0].produto.preco * this.contador();
    });

    //Função do + aperta e o contador aumenta a quantidade de produto//
    incrementar() {
        this.carrinho.update(itens =>
            itens.map(item => ({
                ...item,
                quantidade: (item.quantidade ?? 0) + 1,
            }))
        );
    }

    //valor fixo de frete//
    envio = signal(7);


    //Função do - aperta e o contador diminui a quantidade de produto, ele começa no zero//
    diminuir() {
        this.carrinho.update(itens => itens.map(item => ({
            ... item,
            quantidade: Math.max((item.quantidade ?? 0) -1,0) 
        }))
        );
    }



    //Função da lixeira, ela zera o contador, mas precisa excluir o produto//
    zerar() {
        this.carrinho.set([]);
    }

    //calculo do total no resumo da compra total, se o valor do contador for 0 o envio vai ser 0 //
    totalFinal = computed(() => this.total() + (this.contador() > 0 ? this.envio() : 0));





//função de adicionar produto pelo botão de adicionar na Page produtos //

adicionado= signal(false);

adicionarProduto(produto: Produto){
this.carrinho.update(itens => {

    const existente = itens.find(
        item => item.produto.id === produto.id
    );

    if(existente){
        return itens.map(item => item.produto.id === produto.id
            ? { ...item, quantidade: (item.quantidade ?? 0) + 1 }
            : item
        );
    }
    
    return [...itens, { produto, quantidade: 1 }];
})

}
}
