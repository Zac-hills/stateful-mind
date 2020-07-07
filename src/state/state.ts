/**
 * This is the base class state that all state must inherit from
 */
class State {
  constructor() {
    this.id = State.idGenerator++;
  }
  getID() {
    return this.id;
  }
  id: number;
  static idGenerator: number = 0;
}

export default State;
