import { Observable } from "./observable";

export class Observer {
  observers: Observable[] = []

  register(observable: Observable) {
    this.observers.push(observable);
  }

  notify(event: string) {
    const observables = this.observers.filter((observable) => observable.event === event);
    observables.forEach((observable) => observable.callback());
  }

  unregister(event: string) {
    this.observers = this.observers.filter((observable) => observable.event !== event);
  }

  unregisterAll() {
    this.observers = []
  }
}