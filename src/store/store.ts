import State from "../state";
/**
 * This class is responsible for storing your state, you can instantiate this if you require multiple stores.
 * If you only need one store use the globalStore
 */
class Store {
  constructor() {}
  store: Map<number, State> = new Map();
  /**
   * @param state the state you wish to deposit in the store
   */
  deposit(state: State): void {
    this.store.set(state.id(), state);
  }
  /**
   *
   * @param id the id of the state you want to remove from the store
   */
  withdraw(id: number): void {
    this.store.delete(id);
  }
  /**
   * casts from base class to whichever class you inherit from State
   * @param id the id of the state you would like to get
   */
  get<T extends State>(id: number): T {
    return this.store.get(id) as T;
  }
  //prints as table
  print(): void {
    console.table(this.store);
  }
}

export const globalStore = new Store();
export default Store;
