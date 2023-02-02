type Callback = (payload: object) => any

interface SubscriptionList {
  [key:string]: Array<Callback> 
}

export default class EventEmitter {

  private eventSubscribers: SubscriptionList = {}

  on(event: string, callback: Callback) {
    this.eventSubscribers[event] =  this.eventSubscribers[event]
      ? [...this.eventSubscribers[event], callback]
      : [callback]
  }

  off(event: string, callback: Callback) {
    const index = this.eventSubscribers[event].findIndex( item => item == callback)
    this.eventSubscribers[event].splice(index, 1)
  }

  emit(event: string, payload: object = {}) {
    this.eventSubscribers[event].forEach( (callback) => {
        callback(payload)
    })
  }

  /**
   * Bonus tasks
   **/
  once() {
    // adds a callback to be called when an event occures
    // same as `on` but happens only once!
  }
  listeners() {
    // returns ALL callbacks of a given event name
  }
  eventNames() {
    // returns ALL event names
  }
  removeAllListeners() {
    // removes all listeners of a given event name
  }
}
