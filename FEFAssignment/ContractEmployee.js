/*
    NAME:       VANS DOMINADO
    CLASS:      SOFTWARE DEVELOPMENT SR A
    PURPOSE:    FEF ASSIGNMENT 1

*/
import { Employee } from './Employee.js';
export class ContractEmployee extends Employee {
    hours;
    hourlyRate;
    constructor(ssn, lastName, firstName, address, rank, age, hours, hourlyRate) {
        super(ssn, lastName, firstName, address, rank, age);
        this.hours = hours;
        this.hourlyRate = hourlyRate;
    }
    calculateCompensation() {
        if (this.hours <= 40) {
            return this.hours * this.hourlyRate;
        }
        const regularPay = 40 * this.hourlyRate;
        const overtimeHours = this.hours - 40;
        const overtimePay = overtimeHours * this.hourlyRate * 1.5;
        return regularPay + overtimePay;
    }
    displayInformation() {
        return `
        Contract Employee
        Name: ${this.firstName} ${this.lastName}
        SSN: ${this.ssn}
        Address: ${this.address}
        Rank: ${this.rank}
        Age: ${this.age}
        Hours: ${this.hours}
        Hourly Rate: $${this.hourlyRate}
        Total Compensation: $${this.calculateCompensation()}
        `;
    }
}
