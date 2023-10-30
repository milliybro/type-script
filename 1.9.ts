// Object konstuktorining prototypega objectPrototype nomli obyektning kalitlarini massiv sifatida qaytaruvchi keys nomli metod qo'shing.

let objectPrototype = { a: 1, b: 2, c: 3 };

interface Object {
  keys(): string[];
}

Object.prototype.keys = (): string[] => {
  return Object.keys(this);
};

console.log(objectPrototype.keys());