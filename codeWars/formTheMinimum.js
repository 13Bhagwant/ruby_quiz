function minValue(values){
    //yours code here
     return +(Array.from(new Set(values))).sort((a,b)=>a-b).join('')
  }