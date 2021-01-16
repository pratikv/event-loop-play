(function(){
  console.log('in main');
  function f1(){
    console.log("Inside f1");
    process.nextTick( ()=> console.log('next tick f1'));
    queueMicrotask(()=> console.log("  Microtask f1") );
    setImmediate ( ()=> console.log('    Immediate f1'));
  }
  f1();
  function f2(){
    console.log("Inside f2");
    queueMicrotask(()=> console.log("  Microtask f2") );
    process.nextTick( ()=> console.log('next tick f2'));
    setImmediate ( ()=> console.log('    Immediate f2'));
  }
  f2();
  queueMicrotask(()=> console.log('  main microtask'));
  process.nextTick( ()=> console.log('next tick main'));
  setImmediate ( ()=> console.log('    Immediate main'));
})();
