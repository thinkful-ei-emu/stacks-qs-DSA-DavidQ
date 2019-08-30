let s = require('./stack');

class qWitS{
  constructor(){
    this.in = new s();
    this.out = new s();
  }

  enqueue(value){
    this.in.push(value);
  }
  dequeue(){
    if(this.out.top !== null){ // out stack has pending itmes
      return this.out.pop();
    }else{
      while(this.in.top){
        this.out.push(this.in.pop());//move everything in in to out
      }
      return this.out.pop();
    }
  }

}

module.exports = qWitS;

function test(){
  let qs = new qWitS();
  qs.enqueue(1);
  qs.enqueue(2);
  console.log(qs.dequeue());
  console.log(qs);
}
test();