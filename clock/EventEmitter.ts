type Callback = (payload: object) => any;

interface SubscriptionList {
  [key: string]: Array<Callback>;
}

export default class EventEmitter {
  private eventSubscribers: SubscriptionList = {};
  private oneEventSubscribers: SubscriptionList = {};

  on(event: string, callback: Callback) {
    this.eventSubscribers[event] = this.eventSubscribers[event]
      ? [...this.eventSubscribers[event], callback]
      : [callback];
  }

  off(event: string, callback: Callback) {
    const index = this.eventSubscribers[event].findIndex(
      item => item == callback
    );
    this.eventSubscribers[event].splice(index, 1);
  }

  emit(event: string, payload: object = {}) {
    if (this.eventNames().includes(event)) {
      this.eventSubscribers[event].forEach(callback => {
        callback(payload);
      });
    }

    if (Object.keys(this.oneEventSubscribers).includes(event)) {
      this.oneEventSubscribers[event].forEach( callback => {
        callback(payload)
      } )
      delete this.oneEventSubscribers[event]
    }
  }


  //****** BONUS TASKS *******//
  once(event: string, callback: Callback) {
    this.oneEventSubscribers[event] = this.oneEventSubscribers[event]
    ? [...this.oneEventSubscribers[event], callback]
    : [callback];
  }

  listeners() {
    return Object.values(this.eventSubscribers)
  }
  eventNames(): string[] {
    return Object.keys(this.eventSubscribers);
  }

  removeAllListeners(event: string) {
    delete this.eventSubscribers[event]
  }
}
