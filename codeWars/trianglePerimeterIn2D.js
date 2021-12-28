function trianglePerimeter(triangle){
    // your solution here
    let A = Math.pow(triangle.b.x-triangle.c.x,2) + Math.pow(triangle.b.y-triangle.c.y,2);
    A = Math.sqrt(A);
    let B = Math.pow(triangle.a.x-triangle.c.x,2) + Math.pow(triangle.a.y-triangle.c.y,2);
    B = Math.sqrt(B);
    let C = Math.pow(triangle.a.x-triangle.b.x,2) + Math.pow(triangle.a.y-triangle.b.y,2);
    C = Math.sqrt(C);
    return A + B + C;
  }