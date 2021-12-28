const can = {
    a: 1,
    b: 2,
    c: 3,
    touchThis() { return this }
  }
  
  can.touchThis() // returns can object
  
  // "this" will refer to something else if the method is separated from its obj
  // this is called implicit binding of "this"
  const cant = {}
  cant.touchThis = can.touchThis
  cant.touchThis() // return cant object