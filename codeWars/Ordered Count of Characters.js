var orderedCount = function (text) {
    // Implement me!
      let obj={}
    text.split('').map(v=>obj[v]=obj[v]?obj[v]+1:1);
    let arr=[];
    let val=Object.values(obj)
    let key=Object.keys(obj)
    for (let i=0;i<key.length;i++){
      arr.push([key[i],val[i]])
      }
    return arr
  }