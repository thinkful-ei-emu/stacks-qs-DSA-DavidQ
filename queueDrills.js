let q = require('./queue');
let dq = require('./dllqueue');

function drills(){
  let test = new q();
  test.enqueue(1);
  test.enqueue(2);
  console.log(test);
  test.dequeue();
  console.log(test);
  test = new dq();
  test.enqueue(1);
  test.enqueue(2);
  console.log(test);
}
drills();