//Write a program that takes the speed of a car as input e.g 80. 
//If the speed is less than 70, it should print “Ok”. 
//Otherwise, for every 5 km/s above the speed limit (70),
// it should give the driver one demerit point and print the total number of demerit points.
//For example, if the speed is 80, it should print: “Points: 2”. 
//If the driver gets more than 12 points, the function should print: “License suspended”.


let speed =96;

function SpeedDetector(speed){
    const maxSpeed = 70;
    const demeritPointsForEvery5Km = 5;
    const maxPoints = 12;

    if (speed <= maxSpeed){
        console.log ("OK")
    } 
    else{
        const demeritPoints = Math.floor((speed-maxSpeed)/demeritPointsForEvery5Km);
        console.log(`Points: ${demeritPoints}`);
    
    if (demeritPoints > maxPoints){
        console.log ("License suspended")
    }
    }

}
SpeedDetector(speed);