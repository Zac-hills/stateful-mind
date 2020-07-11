import Store from "../store";
import State from "../state";
import Counter from "../teststates/counterState";

describe("store", () => {
  let store: Store = new Store();
  let state: State = new State();
  it("allows for addition of state", () => {
    store.deposit(state);
    expect(store.store.size).toBe(1);
  });
  it("allows for removal of state", () => {
    store.withdraw(state.id());
    expect(store.store.size).toBe(0);
  });
  it("returns state", () => {
    store.deposit(state);
    expect(store.get(state.id())).toBe(state);
  });
  it("should contain children of base class State", () => {
    let counter: Counter = new Counter();
    store.deposit(counter);
    expect(store.get<Counter>(counter.id())).toBeInstanceOf(Counter);
  });
});

describe("state", () => {
  let state: State = new State();
  it("should increment id", () => {
    expect(state.id()).toBe(1);
  });
  it("should allow increment of state", () => {
    let counter: Counter = new Counter();
    counter.increment();
    expect(counter.get("counter")).toBe(1);
    counter.decrement();
    expect(counter.get("counter")).toBe(0);
  });
});
