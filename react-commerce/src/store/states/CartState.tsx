import { makeAutoObservable } from "mobx";

export class CartState {
  constructor() {
    makeAutoObservable(this);
  }
}
