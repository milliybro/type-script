// Abdulaziz Programmerning o'qib tugatgan kitoblari jami necha sahifa ekanini qaytaruvchi getTotalPages(books) nomli funksiya tuzing.

type allBooks ={
  name: string, pages: number, isReadFinished: boolean
}

const books: allBooks[] = [
  { name: "The Great Gatsby", pages: 180, isReadFinished: true },
  { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
  { name: "Atom habits", pages: 328, isReadFinished: true },
  { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
  { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
  { name: "The Hobbit", pages: 310, isReadFinished: false },
  { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
  { name: "Harry Potter", pages: 320, isReadFinished: true },
  { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
  { name: "To the Lighthouse", pages: 209, isReadFinished: true },
];

function getTotalPages(input: allBooks[]): number {
  let allPages: any = 0;
  for (let page of input) {
    if (page.isReadFinished) {
      allPages += page.pages
    }
  }
  return allPages;
}
console.log(getTotalPages(books));

