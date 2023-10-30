// Student nomli konstruktor yarating.

class Student {
  constructor(
    public firstName: string, 
    public lastName: string,
    public university: string,
    public course: number,
    public totalYears: number,
    public isGrant: boolean,
  ) {}

  getInfo(): string {
    let grantOrContract = this.isGrant ? "grant" : "to'lov shartnoma";
    let yearsLeft = this.totalYears - this.course;

    return `"${this.firstName} ${this.lastName} ${this.university} universitetida ${this.course}-kursda ${grantOrContract} asosida o'qiydi. ${yearsLeft} yildan keyin universitetidan qutuladi."`;
  }
}
let student = new Student("Abdulaziz", "Programmer", "TATU", 3, 4, true);
console.log(student.getInfo());