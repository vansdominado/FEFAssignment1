/*
    NAME:       VANS DOMINADO
    CLASS:      SOFTWARE DEVELOPMENT SR A
    PURPOSE:    FEF ASSIGNMENT 1

*/
import { Employee } from './Employee.js';
export class FullTimeEmployee extends Employee {
    salary;
    bonus;
    overtimeHours;
    constructor(ssn, lastName, firstName, address, rank, age, salary, bonus, overtimeHours) {
        super(ssn, lastName, firstName, address, rank, age);
        this.salary = salary;
        this.bonus = bonus;
        this.overtimeHours = overtimeHours;
    }
    calculateSalary() {
        const hourlyRate = this.salary / 40;
        let overtimePay = 0;
        if (this.overtimeHours >= 1 && this.overtimeHours <= 10) {
            overtimePay = this.overtimeHours * hourlyRate * 1.25;
        }
        else if (this.overtimeHours >= 11 && this.overtimeHours <= 20) {
            overtimePay = this.overtimeHours * hourlyRate * 1.5;
        }
        else if (this.overtimeHours >= 21 && this.overtimeHours <= 30) {
            overtimePay = this.overtimeHours * hourlyRate * 1.75;
        }
        else if (this.overtimeHours > 30) {
            overtimePay = this.overtimeHours * hourlyRate * 2;
        }
        return this.salary + overtimePay;
    }
    calculateCompensation() {
        return this.calculateSalary() + this.bonus;
    }
    displayInformation() {
        return `
            Full-Time Employee
            Name: ${this.firstName} ${this.lastName}
            SSN: ${this.ssn}
            Address: ${this.address}
            Rank: ${this.rank}
            Age: ${this.age}
            Salary: $${this.salary}
            Bonus: $${this.bonus}
            Overtime Hours: ${this.overtimeHours}
            Total Compensation: $${this.calculateCompensation()}
            `;
    }
}
