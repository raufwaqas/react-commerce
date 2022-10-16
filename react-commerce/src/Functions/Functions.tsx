import { Data } from '../components/Data/Data';

export let addCart = (id: number, updateCart: Function) => {
  let searchItem = Data?.find((item: { id: number }) => item.id === id);
  console.log(searchItem);
  if (searchItem) {
    updateCart(searchItem);
  } else return;
};

export let removeCart = () => {};

export let clearCart = () => {};
