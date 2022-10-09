import { makeAutoObservable } from "mobx";

export class DataState {
  constructor() {
    makeAutoObservable(this);
  }
}
