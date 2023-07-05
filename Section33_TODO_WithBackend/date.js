//jshint esversion:6

exports.getDate= function(){
    const today=new Date();
    const currentDay= today.getDay();
    //sunday=0 and saturday is 6
    // if(currentDay===0 || currentDay===6){
    //     res.send("Its weekend!");
    // }
    // else{
    //     res.sendFile(__dirname+"/index.html");
    // }

    //Approach 1
    //var day="";
    // switch(currentDay){
    //     case 0:
    //         day="Sunday";
    //         break;
    //     case 1:
    //         day="Monday";
    //         break;
    //     case 2:
    //         day="Tuesday";
    //         break;
    //     case 3:
    //         day="Wednesday";
    //         break;
    //     case 4:
    //         day="Thursday";
    //         break;
    //     case 5:
    //         day="Friday";
    //         break;
    //     case 6:
    //         day="Saturday";
    //         break;
    //     default: console.log("Error:  Day: "+currentDay);
    // }

    //Approach 2
    const options={
        weekday: "long",
        day: "numeric",
        month:"long",
    };

    return today.toLocaleDateString("en-US", options);
}



exports.getDay= function(){
    const today=new Date();
    const currentDay= today.getDay();
    const options={
        weekday: "long",
    };

    return today.toLocaleDateString("en-US", options);
}


// module.exports.getDate= getDate;

// function getDate(){
//     let today=new Date();
//     let currentDay= today.getDay();
//     //sunday=0 and saturday is 6
//     // if(currentDay===0 || currentDay===6){
//     //     res.send("Its weekend!");
//     // }
//     // else{
//     //     res.sendFile(__dirname+"/index.html");
//     // }

//     //Approach 1
//     //var day="";
//     // switch(currentDay){
//     //     case 0:
//     //         day="Sunday";
//     //         break;
//     //     case 1:
//     //         day="Monday";
//     //         break;
//     //     case 2:
//     //         day="Tuesday";
//     //         break;
//     //     case 3:
//     //         day="Wednesday";
//     //         break;
//     //     case 4:
//     //         day="Thursday";
//     //         break;
//     //     case 5:
//     //         day="Friday";
//     //         break;
//     //     case 6:
//     //         day="Saturday";
//     //         break;
//     //     default: console.log("Error:  Day: "+currentDay);
//     // }

//     //Approach 2
//     let options={
//         weekday: "long",
//         day: "numeric",
//         month:"long",
//     };

//     return today.toLocaleDateString("en-US", options);
// }

// module.exports.getDay= getDay;

// function getDay(){
//     let today=new Date();
//     let currentDay= today.getDay();
//     let options={
//         weekday: "long",
//     };

//     return today.toLocaleDateString("en-US", options);
// }