// code your solution here
function saturdayFun (activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
    saturdayFun();
    saturdayFun ('I want to bathe my dog!');


const mondayWork = function (work = "go to the office"){
    return `This Monday, I will ${work}.`;
}
    mondayWork();
    mondayWork("I will work from home");


    let wrapAdjective = function(style="*") {
        return function(word="special") {
          return `You are ${style}${word}${style}!`
        }
      }
wrapAdjective()("a hard worker");
wrapAdjective("||",)("a dedicated programmer")
