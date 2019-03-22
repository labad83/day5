var emp1 = {
    name: "pepe",
    surname: "locanto",
    country: "italy",
    salary: -90000,
    dept: "webdev"
}

//constructor (with formal parameters like name, surname...)
function Employee(name, surname, countryParam, salaryParam, deptParam) {
    //watch out!! :) because we called this constructor using new
    //this = {}
    //


    //this.name = name

    // {name: "pepe"}
    //this.surname = surname
    this.fullName = `${name} ${surname}`
    // {name: "pepe",
    // surname: "locanto"}
    this.country = countryParam + " europe"

    // if (salaryParam < 0) {
    //     throw new Error("wrong salary")
    // }

    this.salary = salaryParam < 0 ? 0 : salaryParam

    const validDepts = ["webdev", "architect", "admin"]

    if (validDepts.indexOf(deptParam) > -1) {
        this.dept = deptParam
    }   else {
        this.dept = "undefined yet"
    }
    
    var taxes = 22
    var deductions = salaryParam * (taxes / 100)
    var totalSalary = salaryParam - deductions

    this.taxesApplied = `${taxes}%`
    this.totalSalary = totalSalary

    //{name: 'ddd',..., randomValue: 0.2222}

    //implicit return at the end of the constructor function because we called
    // the constructor using the new keyword

    //here implictly we return the "this" object
}

//+10000 por Pepe
let employees = [
    //natalia, franquet, spain.... etc are arguments
    new Employee("natalia", "franquet", "spain", 50000, "admin2"),
    new Employee("pepe", "locanto", "italy", 70000, "webdev")
]

console.log(employees)

function sum (s1, s2) {
    return s1 + s2
}

//console.log(sum(10, 200))

// console.log(sum((s1, s2) => s1 + s2))

//  var totalSalaries = employees.reduce((ac, cValue) => ac + cValue.salary, 0)

var totalSalaries = employees.reduce(function (ac, cValue) {
    return ac + cValue.salary
}, 0)
//console.log(`Total salaries>>> ${totalSalaries}`)