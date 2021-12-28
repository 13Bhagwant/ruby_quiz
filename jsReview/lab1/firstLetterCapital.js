const capitalize = (x) => {
    if (typeof x !== 'string') return ''
    return x.charAt(0).toUpperCase() + x.slice(1)
  }
  console.log(capitalize('bhagwant'));
  