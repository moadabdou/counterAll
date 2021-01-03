# counterAll
a simple javascript counter  

## usage

```js


const  counter  = require('counterAll')

counter.state 
//show you all maked counters

counter.set(prms)
//make a counter with prms 

//trying to make a numeric watch 
// [0 , 0 , 59]
//we have 3 places to change so we make them 
let  counter1 = counter.set([
    {f :  0 , t : 60 , step:1 }, // 1st 
    {f :  0 , t : 60 , step:1 }, //2nd
    {f :  0 , t : 60 , step:1 }, //3th
    /*
    f :  from  maens the starting number
    t :  to   means the ending number  
    note : when the counter  get t value will start from f value again 
    in our exemple will stop on 59 not 60 and return to 0
    */
])


//now trying to make a letters counters like 
/*
[a , a]
[b , a]
[a , b]
[b , a]
some thing like this :*
*/

let counter2 = counter.set([
    {arr :  ['a' , 'b']}, // 1st
    {arr :  ['a' , 'b']}, // 2nd
    //you can change things like you want ..
])
```

ok we make the counters how we can use them  

```js
//the counter variable return some tools 
//i mean counter1 and counter2 .... not the require() one


//update 
let results = counter1.update()
//this will encrease the counter and return the result 
// [0 ,0 ,0] will be [0 ,0, 1]

counter2.finished 
//this contains 0 or 1 
//0 maens not finished
//1 means finished
//note : you can still  update the counter this just  for mark

counter1.reset()
//this will reset the counter

```



