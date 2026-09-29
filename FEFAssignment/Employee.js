/*
    NAME:       VANS DOMINADO
    CLASS:      SOFTWARE DEVELOPMENT SR A
    PURPOSE:    FEF ASSIGNMENT 1

*/
export class Employee {
    ssn;
    lastName;
    firstName;
    address;
    rank;
    age;
    constructor(ssn, lastName, firstName, address, rank, age) {
        this.ssn = ssn;
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.rank = rank;
        this.age = age;
    }
    ageValidation() {
        if (this.age < 16) {
            console.log("Invalid age. (Employee age must be at least 16) ");
            return false;
        }
        return true;
    }
    rankValidation() {
        if (this.rank < 1 || this.rank > 5) {
            console.log("Invalid rank. (Rank must be between 1 and 5)");
            return false;
        }
        return true;
    }
    SSNValidation() {
        const ssnPattern = /^\d{3}-\d{3}-\d{3}$/;
        if (!ssnPattern.test(this.ssn)) {
            console.log("Invalid SSN. (SSN must match the pattern: ###-###-###)");
            return false;
        }
        return true;
    }
    saveEmployee() {
        const ageValid = this.ageValidation();
        const rankValid = this.rankValidation();
        const ssnValid = this.SSNValidation();
        return ageValid && rankValid && ssnValid;
    }
}
