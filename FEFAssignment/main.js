/*
    NAME:       VANS DOMINADO
    CLASS:      SOFTWARE DEVELOPMENT SR A
    PURPOSE:    FEF ASSIGNMENT 1

*/
import { FullTimeEmployee } from './FullTimeEmployee.js';
import { ContractEmployee } from './ContractEmployee.js';
const fullTimeEmployee = new FullTimeEmployee("123-456-789", "Dominado", "Vans", "1234 Main Street", 1, 19, 80000, 10000, 15);
if (fullTimeEmployee.saveEmployee()) {
    console.log(fullTimeEmployee.displayInformation());
}
const contractEmployee = new ContractEmployee("123-456-789", "Parker", "Peter", "20 Ingram Street", 2, 22, 50, 20);
if (contractEmployee.saveEmployee()) {
    console.log(contractEmployee.displayInformation());
}
const invalidEmployee = new FullTimeEmployee("123456789", "Test", "Employee", "789 Main Street", 6, 15, 50000, 0, 0);
if (invalidEmployee.saveEmployee()) {
    console.log(invalidEmployee.displayInformation());
}
