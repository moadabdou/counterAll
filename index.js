
// autor : moad abdou  2021 - 1 - 3

let  states = {}

module.exports = {
    set : init , 
    states
}

class Count {  
    constructor (prms,lv, parent , id){
        if (prms.arr){
            this.arr =  prms.arr
            this.end =  this.arr.length
        }else{
            this.offset = prms.f || 0
            this.end = prms.t - prms.f
        } 
        this.step = prms.step || 1
        this.state = 0
        this.parent = parent
        this.lv = lv
        this.id =  id
        this.finish = false
    }
    update (){
        this.state += this.step  
        if (this.state >= this.end) {
            this.state =  0 
            this.finish =  true
        }
        if (this.finish == true ){
            this.parent.update()
            this.finish = false
        }
        states[this.id][this.lv] = this.arr ? this.arr[this.state] : this.state+this.offset
    }
}


function init (prms , id ){
    prms.reverse()
    id = id || Math.random().toFixed(6).toString() 
    let endEvents = { 
        update : ()=> tools.finished = 1
    }
    let counters
    function  set(){
        counters = []
        for (let i =  0 ; i< prms.length ; i ++){
            let p = i > 0 ? counters[i - 1] : endEvents
            counters.push(
                new Count(prms[i], (prms.length - 1) - i , p ,id )
            )
        }
        states[id] = []
        for (let i = counters.length-1 ; i >= 0 ; i --){
            states[id].push(
                counters[i].arr ?  counters[i].arr[0]:  (counters[i].offset || 0)
                )
        }
    }
    set()
    let tools = { 
        update : ()=> {
            counters[prms.length - 1].update()
            return states[id]
        }, 
        finished :  0,
        reset : set
    }
    return tools 
}

