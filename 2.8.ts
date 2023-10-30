const product = [
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

const increaseProductPrice = (product: object[], id: number, n: number) => {
  let res: object[] = [];
  for (let i in product) {
    if (id === product[i]["id"]) {
      let el = product[i];
      el["price"] *= 1.2;
      res.push(el);
    }
    else{
      res.push(product[i]);
    }
  }
  return res;
};

increaseProductPrice(product, 6, 20);