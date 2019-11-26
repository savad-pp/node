var mathlib=require('./lib/math')
var jokelib=require('./lib/jokes')

var app={}

app.config = {
    timeBetweenJokes : 1000
}

app.printJokes=function(){
    var allJokes=jokelib.getAllJokes()
    var numberOfJokes=allJokes.length
  
    var randNmber=mathlib.getRandomNumber(1,numberOfJokes)
   var selectJokes=allJokes[randNmber-1]
console.log(selectJokes)
}

app.infiniteLoop= function(){
setInterval(app.printJokes,app.config.timeBetweenJokes)
}

app.infiniteLoop()