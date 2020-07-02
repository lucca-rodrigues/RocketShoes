import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-rocket-9-masculino/80/D18-4432-080/D18-4432-080_detalhe1.jpg?ts=1581533003?ims=240x240"
          alt=""
        />
        <strong>Tênis</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-rocket-9-masculino/80/D18-4432-080/D18-4432-080_detalhe1.jpg?ts=1581533003?ims=240x240"
          alt=""
        />
        <strong>Tênis</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-rocket-9-masculino/80/D18-4432-080/D18-4432-080_detalhe1.jpg?ts=1581533003?ims=240x240"
          alt=""
        />
        <strong>Tênis</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;
