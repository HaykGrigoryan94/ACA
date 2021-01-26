class Employee {

    set id(employeeId) {
        this.id = employeeId
    }

    get id() {
        return this.id
    }

    set firstName(name) {
        this.firstName = name
    }

    get firstName() {
        return this.firstName
    }

    set lastName(lastName) {
        this.lastName = lastName
    }

    get lastName() {
        return this.lastName
    }

    set position(employeePosition) {
        this.position = employeePosition
    }

    get position() {
        return this.position
    }

    set salary(employeeSalary) {
        this.salary = employeeSalary
    }

    get salary() {
        return this.salary
    }

    set workingHours(employeeWorkingHours) {
        this.workingHours = employeeWorkingHours
    }

    getFullName() {
        return this.firstName + " " + this.lastName
    }

    getAnnularSalary() {
        return this.salary * 12
    }

    raiseSalary(percent) {
        return this.salary + (percent * this.salary) / 100
    }
}

class Account {

    set name(userName) {
        this.name = userName
    }

    set balance(userBalance) {
        this.balance = userBalance
    }

    constructor(id, balance) {
        this.id = id
        this.balance = balance
    }

    credit(amount) {
        return this.balance + amount
    }

    debit(amount) {
        if (amount > this.balance) return "Amount exceeded balance"
        return this.balance - amount
    }

    transferTo(anotherAccount, amount) {
        if (amount > this.balance) return "Amount exceeded balance"
        if (anotherAccount.hasOwnProperty('balance')) anotherAccount.balance += (this.balance - amount)
        alert(`${anotherAccount} +  dose not have balance`)
        return this.balance
    }

    static identifyAccounts(accountFirst, accountSecond) {
        return accountFirst.toString() === accountSecond
    }

    toString() {
        return `${this.id}, ${this.name}, ${this.balance}`
    }

}



class Person {
    set name(personName) {
        this.name = personName
    }

    get name() {
        return this.name
    }

    set lastName(personLastName) {
        this.lastName = personLastName
    }

    get lastName() {
        return this.lastName
    }

    set gender(personGender) {
        this.gender = personGender
    }

    get gender() {
        return this.gender
    }

    set age(personAge) {
        this.age = personAge
    }

    get age() {
        return this.age
    }

    toString() {
        return `${this.name}, ${this.lastName}, ${this.gender}, ${this.age}`
    }
}

class Student extends Person {
    set program(newProgram) {
        this.program = newProgram
    }

    set year(newYear) {
        this.year = newYear
    }

    get year() {
        return this.year
    }

    set fee(newFee) {
        this.fee = newFee
    }

    get fee() {
        return this.fee
    }

    passExam(programName, grade) {
        const program = this.program.find(p => p.programName === programName)
        program.grade = grade
        const hasPassed = this.program.every(programData => programData.grade > 50)
        if (hasPassed) {
            this.year++
        }
    }
    toString() {
        return `${this.program}, ${this.year}, ${this.fee}`
    }
}