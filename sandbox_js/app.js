console.log('Hey There');
console.table({a: 3, b: 4, c: 6});
console.warn('This is a warning');
console.error('This is an ERROR');
console.time('test');
    //do some stuff here and when it hit the timeEnd it will tell you how long it took to do the stuff here
    console.log('doing stuff');
    console.log('doing stuff');
    console.log('doing more stuff');
    //time and timeEnd need same identifier, in this case its 'test'
console.timeEnd('test');