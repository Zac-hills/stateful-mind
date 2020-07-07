import State from "../state";

class Store {
  constructor() {}
  store: Map<number, State> = new Map();
  deposit(state: State): void {
    this.store.set(state.getID(), state);
  }
  withdraw(id: number): void {
    this.store.delete(id);
  }
  get<T extends State>(id: number): T {
    return this.store.get(id) as T;
  }
}
