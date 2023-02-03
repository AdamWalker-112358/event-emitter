//
import EventEmitter from './EventEmitter'
import Clock from './Clock'



// const takeaway = new EventEmitter()

// const ready =()=> console.log('Come and get the food')
// const ready2= ()=> console.log('Come and get the food 2')

// takeaway.on('ready', ready )
// takeaway.emit('ready')

// takeaway.on('ready', ready2 )
// takeaway.emit('ready')

// takeaway.off( 'ready', ready2)
// takeaway.emit('ready')

  


let rolex = new Clock(500)

rolex.on('tick', (payload: any)=>{
  console.log( 'Rolex tick: ', payload.tickCount)
})

rolex.once('tick', (payload: any)=>{
  console.log( 'Rolex tick (once): ', payload.tickCount)
})

rolex.on('tick', (payload: any) => {
  if (payload.tickCount >= 5) rolex.stop()
})

rolex.on('tickStarted', () => console.log('Rolex Started'))
rolex.on('tickStopped', () => console.log('Rolex Stopped'))



rolex.start()



// let rolex = new Clock(500);

// print out the rolex count on every tick
// set the rolex to stop after 5 ticks
// print out the clock started or stopped along with its current count
//
// if you've completed the `once` bonus task
//   - make sure you respond to start and stop only once
//
// if you've completed the `eventNames` bonus task
//   - print out the event names on start and stop
//   - validate the event names for start and stop had been removed
//     (they are called only once...)
//
//
// start the rolex
