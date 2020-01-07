class Class {
  constructor(number) {
    this.number = number; 
  }

  getDisplayName() {
    return `Class ${this.number}`;
  }

  assignLeader(student) {
		if (student.klass.number === this.number) {
			this.leader = student;
    }
    else {
      console.log(`It is not one of us.`);
    }
    const leaderListener = this.leaderListener;
    if(leaderListener) {
      if(leaderListener.isTeaching(student)) {
        console.log(`I am ${leaderListener.name}. I know ${student.name} become Leader of Class ${this.number}.`);
      }
    }
  }

  appendMember(student) {
    student.klass = this;
    const joinListener = this.joinListener;
		if (joinListener) {
			if (joinListener.isTeaching(student)) {
				console.log(`I am ${joinListener.name}. I know ${student.name} has joined Class ${this.number}.`);
			}
		}
  }

  isIn(student) {
    return student.klass.number === this.number;
  }

  registerAssignLeaderListener(teacher) {
    this.leaderListener = teacher;
  }

  registerJoinListener(teacher) {
    this.joinListener = teacher;
  }
}

module.exports = Class;



