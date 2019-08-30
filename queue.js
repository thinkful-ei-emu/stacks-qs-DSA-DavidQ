class _Node{
  constructor(value,next){
    this.value = value;
    this._next = next;
  }
}
module.exports = class Queue{
  constructor(){
    this._first = null;
    this._last = null;
  }
  enqueue(value){
    debugger;
    let node = new _Node(value,null);
    if(!this._first){
      this._first = node;
    }
    if(this._last){
      this._last._next = node;
    }
    this._last = node;
    
  }
  dequeue(){
    if(!this._first)
      return;
    let node = this._first;
    this._first = this._first._next;
    if(node === this._last)
      this._last = null;
    return node.value;
  }
  static display(q){
    if(q._first === null)
      return 0;
    debugger;
    let counter, n;
    counter = 0;
    n = q._first;
    while(n){
      counter++;
      n = n._next;
    }
    return counter;
    
  }
};