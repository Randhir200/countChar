var str ="randhir";
var dairy = {};
for(var i=0;i<str.length;i++){
  var char = str[i];
  if(dairy[char]==undefined){
     dairy[char] = 1;
  }else{
    dairy[char]++;
  }
}
for(var i in dairy){
  console.log(i + "-" + dairy[i]);
}