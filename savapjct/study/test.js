// function Constrct(name,age){
// this.name=name
// this.age=age
// this.hi=function(){
//     console.log('hi' +name)
// }
// }

// var babu=new Constrct('babu',20)
// console.log(babu.name,babu.age,babu.hi())
// var baba=new Constrct('baba',20)
// console.log(baba.name,baba.age,baba.hi())
const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
      console.log('Hi! I\'m ' + this.name[0] + '.');
    }
  };
  person.bio()
person.greeting()

person['name']['last'] = 'Cratchit';
console.log(person['name']['last'])
person.farewell = function() { console.log("Bye everybody!"); }

person.farewell()