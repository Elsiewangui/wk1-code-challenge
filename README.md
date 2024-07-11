STUDENT-GRADE.JS

This project provides a solution to inputting a students mark and in turn provides a grade for the students mark.I used a function called `studentGrade` that will display the students grades.
A dialogue box asking the user to "Enter the student's marks" is displayed by the `prompt` function, which then returns the input as a string.The `parseFloat` function is used to transform the user input, which is initially a string, into a floating-point value, which is then assigned back to the marks variable.
The`if` and `else if` statements is used to determine the student's grade based on the value of `marks`. The conditions check the value of `marks` and assign the corresponding grade to the `grade` variable.
Finally, it uses console.log to print the student's grade to the console. The function is executed by calling `studentGrade()`.

SPEED-DETECTOR.JS

In this code defines a function called `SpeedDetector` that checks if a car's speed is within a safe limit. 
The function takes one input, which is the car's speed. Inside the function, it sets a maximum allowable speed to 70. 
If the speed is over 70, it calculates how many demerit points the driver should get, with one point given for every 5 kilometers per hour over the limit. It then prints the number of demerit points.
The `if` statement checks if the speed is less than or equal to `maxSpeed`. If this condition is true, it logs "OK" to the console, indicating the speed is within the allowable limit.
The `else` statements runs if the speed is greater than `maxSpeed`.It declares a variable `demeritPoints` and calculates the number of demerit points. The calculation is done by subtracting `maxSpeed` from speed to get the amount by which the speed exceeds the limit. This value is then divided by `demeritPointsForEvery5Km` and rounded down to the nearest integer using `Math.floor`.
It logs the calculated demerit points to the console and the if statement checks if the `demeritPoints `is greater than `maxPoints`.
If true, it logs "License suspended" to the console, indicating that the driver's license should be suspended due to excessive demerit points.




NET-SALARY.JS

In this code `calculateNetSalary` function is designed to calculate the net salary of an employee after deducting . It takes two inputs: benefits and basicSalary .
Inside the function, it first calculates the `grossSalary` by adding `benefits` and `basicSalary`. Then, it determine the amounts to be deducted for `tax`, `NSSF`, and `NHIF` by multiplying the `grossSalary` by their respective rates (30%, 6%, and 5%).
It sums up these deductions to get the `totalDeductions`. 
Finally, it subtract `totalDeductions` from the `grossSalary` to get the `netSalary`, which is the amount the employee takes home after all deductions. The function returns this `netSalary`, it gives the calculated net salary.
