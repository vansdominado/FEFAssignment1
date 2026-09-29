/*
    NAME:       VANS DOMINADO
    CLASS:      SOFTWARE DEVELOPMENT SR A
    PURPOSE:    FEF ASSIGNMENT 1

*/

export interface IEmployee {
    displayInformation(): string;
    calculateCompensation(): number;
    saveEmployee(): boolean;
}

export abstract class Employee implements IEmployee {

    public ssn: string;
    public lastName: string;
    public firstName: string;
    public address: string;
    public rank: number;
    public age: number;

    constructor(
        ssn: string,
        lastName: string,
        firstName: string,
        address: string,
        rank: number,
        age: number
    ) {
        this.ssn = ssn;
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.rank = rank;
        this.age = age;
    }

    protected ageValidation(): boolean {
        if (this.age < 16) {
            console.log("Invalid age. (Employee age must be at least 16) ");
            return false;
        }

        return true;
    }

    protected rankValidation(): boolean {
        if (this.rank < 1 || this.rank > 5) {
            console.log("Invalid rank. (Rank must be between 1 and 5)");
            return false;
        }

        return true;
    }

    protected SSNValidation(): boolean {
        const ssnPattern = /^\d{3}-\d{3}-\d{3}$/;

        if (!ssnPattern.test(this.ssn)) {
            console.log("Invalid SSN. (SSN must match the pattern: ###-###-###)");
            return false;
        }

        return true;
    }

    public saveEmployee(): boolean {
        const ageValid = this.ageValidation();
        const rankValid = this.rankValidation();
        const ssnValid = this.SSNValidation();

        return ageValid && rankValid && ssnValid;
    }

    public abstract displayInformation(): string;
    public abstract calculateCompensation(): number;
}