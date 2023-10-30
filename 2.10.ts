class Employee {
  firstName: string;
  lastName: string;
  workPlace: string;
  salary: number;
  percent: number;
  isFullTime: boolean;

  constructor(
    firstName: string,
    lastName: string,
    workPlace: string,
    salary: number,
    percent: number,
    isFullTime: boolean
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.workPlace = workPlace;
    this.salary = salary;
    this.percent = percent;
    this.isFullTime = isFullTime;
  }

  getInfo(): string {
    let fullTimePartTime = this.isFullTime ? "full-time" : "part-time";
    let bonus = (this.salary * this.percent) / 100;
    let totalSalary = this.salary + bonus;

    return `${this.firstName} ${this.lastName} ${this.workPlace}da ${totalSalary}$ oylik evaziga ${fullTimePartTime} ishlaydi.`;
  }
}

let emp1 = new Employee(
  "Abdulaziz",
  "Programmer",
  "Najot ta'lim",
  10000,
  20,
  false
);
let emp2 = new Employee(
  "Abdulaziz",
  "Programmer",
  "Najot ta'lim",
  5000,
  40,
  true
);

let emp1Info = emp1.getInfo();
let emp2Info = emp2.getInfo();

console.log(emp1Info);
console.log(emp2Info);