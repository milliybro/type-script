const products = [
  { id: 1, name: "Bike", price: 100 },
  { id: 2, name: "TV", price: 400 },
  { id: 3, name: "Album", price: 800 },
  { id: 4, name: "Book", price: 600 },
  { id: 5, name: "Phone", price: 500 },
  { id: 6, name: "Computer", price: 1000 },
  { id: 7, name: "Skate", price: 300 },
  { id: 8, name: "Keyboard", price: 200 },
  { id: 9, name: "Bottle", price: 700 },
];

const deleteProducts =(...rest:number[]) =>{
  const products = [
    { id: 1, name: "Bike", price: 100 },
    { id: 2, name: "TV", price: 400 },
    { id: 3, name: "Album", price: 800 },
    { id: 4, name: "Book", price: 600 },
    { id: 5, name: "Phone", price: 500 },
    { id: 6, name: "Computer", price: 1000 },
    { id: 7, name: "Skate", price: 300 },
    { id: 8, name: "Keyboard", price: 200 },
    { id: 9, name: "Bottle", price: 700 },
  ];

  let res:object[] = [];
  for(let i in products){
    if(!rest.includes(products[i]['id'])){
      res.push(products[i]);
    }
  }
  console.log(res);
}

deleteProducts(4,6,9);