let Stack = require('./stack');
function drill(){
  /* let starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // console.log(starTrek);
  peek(starTrek);
  isEmpty(starTrek);
  
  removeUntil(starTrek,'McCoy');
  display(starTrek);
  // True, true, true, false
  console.log(is_palindrome('dad'));
  console.log(is_palindrome('A man, a plan, a canal: Panama'));
  console.log(is_palindrome('1001'));
  console.log(is_palindrome('Tauhida')); */
  //let test = parentheseMatcher('(()))');
  //console.log(test);
  let testStack = new Stack();
  testStack.push(5);
  testStack.push(6);
  testStack.push(1);
  let result = hanoiSorter(testStack);
  display(result);
}
function peek(stack){
  console.log(stack.top.value, 'is on top');
}
function isEmpty(stack){
  return stack.top === null;
}
function display(stack){
  let n = stack.top;
  while(n !== null){
    console.log(n.value);
    n = n._next;
  }
}
function removeUntil(stack, value){
  let n = stack.top;
  while (n !== null){
    let node = stack.pop();
    if(node.value === value)
      return node;
    n = n._next;
  }
}
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let stack1 = new Stack();
  s.split('').forEach(char=> {
    stack1.push(char);
  });
  let n = stack1.top;
  for(let x = 0; x < s.length;x++){
    if(n.value !== s[x])
      return false;
    n = n._next;
  }
  return true;
}

function parentheseMatcher(exp){
  let stack = new Stack();
  exp.split('').forEach(char=>stack.push(char));
  let n = stack.top;
  let close = ')';
  let open = '(';
  let counter = 0;
  while(n !== null){
    debugger;
    switch(n.value){
    case open:
      --counter;
      break;
    case close:
      ++counter;
      break;
    }
    if(counter < 0)
      return false;
    n = n._next;
  }
  return counter === 0;
}
function hanoiSorter(originStack){
  let tempStack  = new Stack();
  let finalStack = new Stack();
  let n = originStack.top;
  let biggest = 0;
  while(originStack.top !== null){
    debugger;
    while(n !== null){
      console.log('looking for biggest');
      if(n.value > biggest)
        biggest = n.value;
      n = n._next;
      debugger;
      console.log('biggest is :', biggest);
    }
    n = originStack.top;
    while(n !== null){
      if(n.value !== biggest){
        debugger;
        tempStack.push(originStack.pop());
        console.log('moving the others out the way')
      }
      else {
        console.log('moving biggest'); 
        finalStack.push(originStack.pop());
        biggest = 0;
        break;
      }
      n = n._next;
    }
    n = tempStack.top;
    while(n !== null){
      debugger;
      console.log('reseting');
      originStack.push(tempStack.pop());
      n = n._next;
    }
    n= originStack.top;
  }


  return finalStack;

}


drill();