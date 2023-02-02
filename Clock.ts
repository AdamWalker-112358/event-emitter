import EventEmitter from './EventEmitter'

export default class Clock extends EventEmitter {


  private tickCounter: number = 0
  private tickDuration: number
  private tickInterval: any
  
  constructor(ms: number = 1000){
    super()
    this.tickDuration = ms
  }
  
  start(){
   this.tickInterval = setInterval( ()=>{
      // this.emit('tickStarted')
      this.tick()
    },this.tickDuration)
  }

  stop(){
    clearInterval(this.tickInterval)
    // this.emit('tickStopped')
  }
  
  private tick(){
    this.tickCounter ++
    this.emit('tick', {tickCount: this.tickCounter})
  }
}
