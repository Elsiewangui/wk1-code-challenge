//Write a program whose major task is to calculate an individual’s Net Salary 
//by getting the inputs of basic salary and benefits. 
//Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 


function calculateNetSalary(benefits,basicSalary){


    let taxRate = 30/100;
    let nssfRate = 0.015;
    let nhifRate = 0.06;

    let grossSalary = benefits + basicSalary;
    
    let tax = grossSalary * taxRate;
    let nssf = grossSalary * nssfRate;
    let nhif = grossSalary * nhifRate;


    let totalDeductions = tax + nssf + nhif;

    let netSalary = grossSalary - totalDeductions;
    return netSalary;
}
let benefits = 27400;
let basicSalary = 200000;
let netSalary = calculateNetSalary(benefits, basicSalary);
console.log(netSalary); 