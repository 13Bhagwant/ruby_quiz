function infected(s) {
    if(!(s.includes('0') && s.includes('1'))) return 0;
    let str = s.split('X').map(el => el.includes('1') ? el.replace(/0/g, '1') : el).join(''), 
        num = str.length, 
        inf = str.match(/1/g).length;
    return 100 * inf / num;
  }
