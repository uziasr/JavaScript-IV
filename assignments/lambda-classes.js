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
    grade(studentObj, subject){
        return `${studentObj.name} receives a perfect score on ${subject}`
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

class ProjectManager extends Instructor{
    constructor(attrs){
        super(attrs)
        this.gradClassName = attrs.gradClassName
        this.favInstructor = attrs.favInstructor
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(studentObj, subject){
        return `${this.name} debugs ${studentObj.name}'s code on ${subject}`
    }
}


//created two Person objects
const homer = new Person({
    name: 'Homer',
    age: 35,
    location: 'Springfield'
})

const marge = new Person({
    name: 'Marge',
    age: 32,
    location: 'Springfield'
})

//Created two Instructor objects
const skinner = new Instructor({
    name: 'Skinner',
    age: 40,
    location: 'Springfield',
    specialty: 'regex',
    favLanguage: 'JavaScript, Python, Java',
    catchPhrase: 'aurora borealis'
})

const peggy = new Instructor({
    name: 'peggy',
    age: 39,
    location: 'Arlen',
    specialty: 'Spanish',
    favLanguage: 'Spanish, English',
    catchPhrase: "I'm substitute teacher of the year"
})



//Created two Student objects
const bart = new Student({
    name:'Bart',
    age:10,
    location:'Springfield',
    previousBackground:'I played pranks on my teachers and designed website on the side',
    className:'Math 101',
    favSubjects:['Physical Education','Enlgish','Linux','C++']
})

const lisa = new Student({
    name:'Lisa',
    age:8,
    location:'Springfield',
    previousBackground:'I am a genius and play the saxaphone for fun',
    className:'CS 400',
    favSubjects:['Machine Learning','Web Development','Statistics']
})

//Created two ProjectManager objects 
const dale = new ProjectManager({
    name: 'Dale',
    age: 37,
    location: 'Arlen',
    specialty: 'Django',
    favLanguage: 'Ruby, Python, Java',
    catchPhrase: 'Lets get to work',
    gradClassName: 'CS23',
    favInstructor: 'Skinner'
})

const bill = new ProjectManager({
    name: 'Bill',
    age: 45,
    location: 'Arlen',
    specialty: 'MS Excel',
    favLanguage: 'Access, SQL, Python',
    catchPhrase: 'Give me a spreadsheet',
    gradClassName: 'CS1',
    favInstructor: 'Peggy'
})

//Methods from instructor
console.log(peggy.grade(bart, 'html'))
console.log(skinner.demo('Machine Learning'))
//methods from PM
console.log(dale.standUp('Web 23'))
console.log(bill.debugsCode(lisa, 'C++'))
//methods from students
bart.listsSubjects()
console.log(lisa.PRAssignments('Java'))
console.log(bart.sprintChallenge('JavaScript'))
//methods from person
console.log(homer.speak())