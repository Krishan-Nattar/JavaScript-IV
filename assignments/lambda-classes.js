// CODE here for your Lambda Classes

class Person {
  constructor(atts) {
    this.name = atts.name;
    this.age = atts.age;
    this.location = atts.location;
  }
  speak = function() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  };
}

class Instructor extends Person {
  constructor(atts) {
    super(atts);
    this.specialty = atts.specialty;
    this.favLanguage = atts.favLanguage;
    this.catchPhrase = atts.catchPhrase;
  }
  demo = function(subject) {
    console.log(`Today we are learning about ${subject}`);
  };
  grade = function(student, subject) {
    console.log(`${student.name} recieves a perfect score on ${subject}`);
  };

  checkAssignment = function(student) {
    let value = [1, -1];
    let correction = Math.floor(Math.random() * 30);
    var rand = value[Math.floor(Math.random() * value.length)];
    correction = rand * correction;
    student.grade += correction;
    console.log(
      `${
        this.name
      } graded an assignment and made a ${correction} point correction to ${
        student.name
      }'s grade, which is now ${student.grade}`
    );
  };
}

class Student extends Person {
  constructor(atts) {
    super(atts);
    this.previousBackground = atts.previousBackground;
    this.className = atts.className;
    this.favSubjects = atts.favSubjects;
    this.grade = atts.grade;
  }
  listSubjects = function() {
    this.favSubjects.forEach(function(item, index, array) {
      console.log(index + 1, item);
    });
  };
  PRAssignment = function(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  };
  sprintChallenge = function(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  };

  graduate = function() {
    if (this.grade > 70) {
      console.log(`${this.name} has graduated from ${this.className}`);
      return true;
    } else {
      console.log(
        `${
          this.name
        } doesn't meet the requirements for graduation. Keep studying!`
      );
      return false;
    }
  };
}

class ProjectManager extends Instructor {
  constructor(atts) {
    super(atts);
    this.gradClassName = atts.gradClassName;
    this.favInstructor = atts.favInstructor;
  }
  standUp = function(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  };
  debugsCode = function(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  };
}

const brit = new Instructor({
  name: "Brit",
  age: 30,
  location: "Canada",
  specialty: "HTML & CSS",
  favLanguage: "French",
  catchPhrase: "Good Morning Everyone!"
});

const josh = new Instructor({
  name: "Josh",
  age: 25,
  location: "New York",
  specialty: "C++",
  favLanguage: "Swift",
  catchPhrase: "'Ello!"
});


let krishan = new Student({
  name: "Krishan",
  age: 33,
  location: "USA",
  previousBackground: "Self-Study",
  className: "WEB22",
  favSubjects: ["Javascript", "CSS", "PHP"],
  grade: 80
});

let billy = new Student({
  name: "Billy",
  age: 57,
  location: "Texas",
  previousBackground: "None",
  className: "WEB20",
  favSubjects: ["Javascript", "HTML", "Python"],
  grade: 80
});



brit.demo("Javascript Closures");
brit.grade(krishan, "EVERY PROJECT!");
brit.speak();

josh.demo("Callback functions");
josh.grade(billy, "Today's Sprint Challenge");
josh.speak();

krishan.speak();
krishan.listSubjects();
krishan.PRAssignment("Javascipt IV");
krishan.sprintChallenge("Javascript Fundamentals");

billy.speak();
billy.listSubjects();
billy.PRAssignment("React Fundamentals");
billy.sprintChallenge("C algorithms");

const shannon = new ProjectManager({
  name: "Shannon",
  age: 32,
  location: "California",
  specialty: "Javascript",
  favLanguage: "Python",
  catchPhrase: "How y'all doing today?",
  gradClassName: "Web15",
  favInstructor: "Josh"
});


const mike = new ProjectManager({
  name: "Mike",
  age: 21,
  location: "Brazil",
  specialty: "Jack of all trades",
  favLanguage: "VBA",
  catchPhrase: "YOYOYO!",
  gradClassName: "Web3",
  favInstructor: "Brit"
});

mike.speak();
mike.debugsCode(billy, "CSS Flexbox");
mike.demo("Redux");
mike.grade(billy, "Hooks");
mike.standUp("Web3_Mike");

shannon.speak();
shannon.debugsCode(krishan, "Javascript IV");
shannon.demo("Javascript Callbacks");
shannon.grade(krishan, "Javascript III");
shannon.standUp("Web22_Shannon");

let krishanGraduate = false;

let gradeCount = 0;

let gradeInterval = window.setInterval(function() {
  gradeCount++;
  shannon.checkAssignment(krishan);
  brit.checkAssignment(krishan);
  krishanGraduate = krishan.graduate();

  if (krishanGraduate == true) {
    clearInterval(gradeInterval);
  }
  if (gradeCount == 1000) {
    console.log(`1000 rounds have passed, code stopped`);
    clearInterval(gradeInterval);
  }
}, 300);
