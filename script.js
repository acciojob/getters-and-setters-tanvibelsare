//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}

	 get nameFnc(){
		 return this.name
	 }
}

class Student extends Person {
	study(){
		return super.name+"is studying"
	}
}

class Teacher extends Person {
	teach(){
		return super.name+"is teaching"
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
