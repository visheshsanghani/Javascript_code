function deepFreeze(object) {

  // Retrieve the property names defined on object
  var propNames = Object.getOwnPropertyNames(object);

  // Freeze properties before freezing self
  
  for (let name of propNames) {
    let value = object[name];

    if(value && typeof value === "object") { 
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

var obj2 = {
  internal: {
    a: 5
  }
};

deepFreeze(obj2);

obj2.internal.a = 'anotherValue'; // fails silently in non-strict mode
obj2.internal.a; // null
console.log(obj2);