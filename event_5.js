const myEvent=(args)=>args.filter(elem=>(elem % 2)===0);
console.log(myEvent([1,2,3,4,5,6,7,8,9]));