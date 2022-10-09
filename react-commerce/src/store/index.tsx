import { CartState } from "./states/CartState";
import { DataState } from "./states/DataState";
import { LoaderState } from "./states/LoaderState";

class Store {
  cartState: CartState;
  dataState: DataState;
  loaderState: LoaderState;
  constructor() {
    this.cartState = new CartState();
    this.dataState = new DataState();
    this.loaderState = new LoaderState();
  }
}

export let store = new Store();
