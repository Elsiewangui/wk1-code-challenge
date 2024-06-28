//Write a function that prompts the user to input student marks. T
//The input should be between 0 and 100. T
//The output should correspond the correct grade, as shown below: 
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.






function studentGrade(){
        let marks = prompt("Enter the students marks")
        marks = parseFloat(marks);


let grade;
if (marks >79){
    grade =`A`
}else if(marks >= 60){
    grade = `B`
}else if(marks >= 50){
    grade = `C`
}else if(marks >= 40){
    grade = `D`
}else {
    grade = `E`
}
  console.log(`The students grade is: ${grade}`)
}
studentGrade()