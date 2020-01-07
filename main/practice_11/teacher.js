import Person from "./person.js";

class Teacher extends Person {
  constructor(id, name, age, klasses) {
    super(id, name, age);
    this.klasses = klasses;
  }
  
  introduce() {
    if(this.klasses) {
      return `${super.introduce()} I am a Teacher. I teach Class ${this.klasses.map(klasses=>klasses.number).join(', ')}.`;
    }
    else {
      return `${super.introduce()} I am a Teacher. I teach No Class.`;
    }
  }

  isTeaching(student) {
    return this.klasses.reduce((isTeaching, elem) => {
		  return isTeaching || elem.isIn(student);
    }, false);
  }
}

module.exports = Teacher;

