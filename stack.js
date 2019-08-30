class _Node{
  constructor(value,next){
    this.value = value;
    this._next = next;
  }
}
module.exports = class Stack{
  constructor(){
    this.top = null;
  }
  push(value){
    this.top = new _Node(value,this.top);
  }
  pop(){
    let node = this.top;
    this.top = this.top._next;
    return node.value;
  }
};