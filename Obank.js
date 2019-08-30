let q = require('./queue');
let bank = new q();
setInterval(()=>{
  bank.enqueue(Math.floor(Math.random() *4) > 1);
  let first = bank.dequeue();
  if(!first){
    bank.enqueue(Math.floor(Math.random() *4) > 1);
  }
  console.log(q.display(bank),' people in the line');
},2000);