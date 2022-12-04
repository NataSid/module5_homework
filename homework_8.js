let fruits = new Map([

    ["apple", "green"],
  
    ["strawberry", "red"],
  
    ["blueberry", "blue"]
  
  ]);
  
  for (let key of fruits.entries()) {
    console.log(`Ключ - ${key[0]}, значение - ${key[1]}`);
  }