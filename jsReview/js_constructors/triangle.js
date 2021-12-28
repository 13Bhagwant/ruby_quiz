function Point(x = 0, y = 0) {
    this.x = x
    this.y = y
  }
  
  function Triangle(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }
  
  // Make the perimeter function as a method on the Triangle.prototype
  Triangle.prototype.perimeter = function() {
    const {a, b, c} = this
    // const a = this.a
    // const b = this.b
    // const c = this.c
  
    const ab = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)
    const ac = Math.sqrt((a.x - c.x) ** 2 + (a.y - c.y) ** 2)
    const bc = Math.sqrt((b.x - c.x) ** 2 + (b.y - c.y) ** 2)
  
    return ab + ac + bc
  }
  
  const p1 = new Point(10, 10)
  const p2 = new Point(40, 10)
  const p3 = new Point(10, 50)
  
  const t1 = new Triangle(p1, p2, p3) 
  
  t1.perimeter() // returns the perimeter of that triangle instance
  