console.log('---reverse---')
var arr=[23,56,8,45,103,27,99,2];
console.log(arr);
for(var i=0;i<=arr.length/2-1;i++){
  var length=arr[i];
	arr[i]=arr[arr.length-1-i];
  arr[arr.length-i-1]=length;
}
console.log(arr);

console.log('---pop---')
var obj=[1,3,5,7,9];
console.log(obj[obj.length-1]);
obj.length=obj.length-1;
console.log(obj);

console.log('---push---')
var all=[2,4,6,8];
all.length=all.length+1;
all[all.length-1]=10;
console.log(all.length);
console.log(all);








