import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  function goodsAll() {
    return getAll().then(setGoodsList);
  }

  function goodsAll5First() {
    return get5First().then(setGoodsList);
  }

  function goodsAllRed() {
    return getRedGoods().then(setGoodsList);
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={goodsAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={goodsAll5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={goodsAllRed}>
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  );
};
