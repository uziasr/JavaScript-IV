// CODE here for your Lambda Classes
class Person {
    constructor(attrs){
        this.name = attrs.name
        this.age = attrs.age
        this.location = attrs.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}` 
    }
}

class Instructor extends Person{
    constructor(attrs){
        super(attrs)
        this.specialty = attrs.specialty
        this.favLanguage = attrs.favLanguage
        this.catchPhrase = attrs.catchPhrase
    }
    demo(subject){
        return (`Today we are learning about ${subject}`)
    }
    grade(studnetObj, subject){
        returns `{student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(attrs){
        super(attrs)
        this.previousBackground = attrs.previousBackground
        this.className = attrs.className
        this.favSubjects = attrs.favSubjects
    }
    listsSubjects(){//console.log for this method is not necessary
        this.favSubjects.forEach(element=>console.log(element))
    }
    PRAssignments(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun a sprint challenge on ${subject}`
    }
}
const fred = new Student({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favSubjects: ['JavaScript','CSS','Python','HTML'],
    className: 'CS304',
    previousBackground: `I graduated from college with a degree in hospitality admin`
  });

fred.listsSubjects()
console.log(fred.PRAssignments('css'))
console.log(fred.sprintChallenge('python'))

  