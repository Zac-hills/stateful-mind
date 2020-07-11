/**
 * This is the base class state that all state must inherit from
 */
class State {
  constructor() {
    this.uniqueID = State.idGenerator++;
  }
  /**
   * returns unique id for this instance of the objects. Value only.
   */
  id(): number {
    return JSON.parse(JSON.stringify(this.uniqueID));
  }
  /**
   * @param obj - pass in your variable in a json with the desired variable name as the key
   * @example
   * myVal:number=10;
   * state.add<number>({myVal});
   */
  add(obj: any) {
    const name = Object.keys(obj)[0];
    this.data[name] = obj[name];
  }
  /**
   *
   * @param name name of variable you wish to get.
   * Returns a copy not a reference
   */
  get(name: string) {
    return this.data[name];
  }
  /**
   * this sets the variable and if connected to a component triggers the render
   */
  set(name: string, val: any) {
    this.data[name] = val;
  }
  private data: any = {};
  private uniqueID: number;
  static idGenerator: number = 0;
}

export default State;
