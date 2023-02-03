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
   this.emit('tickStarted')
   this.tickInterval = setInterval( ()=>{
      this.tick()
    },this.tickDuration)
  }

  async stop(){
    clearInterval(this.tickInterval)
    setTimeout(() => this.emit('tickStopped'),0)
  }
  
  private tick(){
    this.tickCounter ++
    this.emit('tick', {tickCount: this.tickCounter})
  }
}
