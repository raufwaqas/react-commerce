import { makeAutoObservable } from 'mobx';

export class CartState {
  cartCount: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setCartCount(count: number) {
    this.cartCount = count;
  }

  incrementCartCount() {
    this.cartCount += 1;
  }

  decrementCartCount() {
    if (this.cartCount > 0) {
      this.cartCount -= 1;
    }
  }
}
