// Ushbu students objektidagi studentlarni grant va contract bo'yicha guruhlarga ajratuvchi seperateStudents(students) nomli funksiya tuzing.

type studentType = {
  name: string, isGrant: boolean
}

let students: (studentType)[] = [
  { name: "Jurabek", isGrant: false },
  { name: "Elbek", isGrant: true },
  { name: "Shamshod", isGrant: false },
  { name: "Kamola", isGrant: false },
  { name: "Gulnoza", isGrant: true },
  { name: "Savlatbek", isGrant: false },
];

function seperateStudents(input: studentType[]): object {
  let grant: string[] = [];
  let contract: string[] = [];
  for (let student of input) {
    if (student.isGrant) {
      grant.push(student.name);
    } else {
      contract.push(student.name);
    }
  }
  return {
    grant: grant,
    contract: contract,
  };
}
console.log(seperateStudents(students));
