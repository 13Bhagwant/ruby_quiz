// Constructor functions are PascalCase by convention
function User(name, age) {
    const user = {}
    user.name = name
    user.age = age
    return user
  }
  
  const user1 = User("Raman", 18)
  const user2 = User("Parneet", 18)
  
  function UserWithNew(name, age) {
  // const this = {}
    this.name = name
    this.age = age
    // return this
  }
  
  const user1 = new UserWithNew("Raman", 18)
  const user2 = new UserWithNew("Parneet", 18)
  
  // {name: 'Jeremy', age: 24, role: 'Software Engineer'}
  function convertHashToArray(hash){
    let array = []
    for ( let key in hash) {
      array.push(key)
    }  
    array.sort() // [['age', 24], ['name', 'Jeremy'], 'role']
    
     for (let i = 0; i < array.length;i++) {  
       let key = array[i] 
       array[i] = [key, hash[key]] 
     }
     return array
  }