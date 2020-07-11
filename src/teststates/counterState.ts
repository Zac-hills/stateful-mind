import State from "../state";

class Counter extends State {
  constructor() {
    super();
    let counter = 0;
    this.add({ counter });
  }
  increment() {
    this.set("counter", this.get("counter") + 1);
  }
  decrement() {
    this.set("counter", this.get("counter") - 1);
  }
  val() {
    return this.get("counter");
  }
}

export default Counter;
