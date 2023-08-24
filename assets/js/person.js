const persons = [];

class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    #setTitle() {
        if (this.gender === "L") {
            this.name = `Tuan ${this.name}`;
        } else {
            this.name = `Nyonya ${this.name}`;
        }
    }

    static find(name) {
      return persons.find(data => data.name === name)
    } 
}

let person1 = new Person("Farras", "L")
person1.setTitle()

let person2 = new Person("Farah", "P")
person2.setTitle()

persons.push(person1);
persons.push(person2);

console.log(persons);
const foundPerson = Person.find("Tuan Farras");
console.log(foundPerson);

// Latihan OOP

class Student extends Person {
    setClass(kelas) {
        //1. argumant set nilai class
        this.kelas = kelas;
        return this;
    }
    
    // 4. tambahkan method setSekolah
    setSekolah (sekolah) {
        this.sekolah = sekolah;
        return this;
    }

}

// 2. Set class dengan bentuk builder pattern
const student = new Student("Fahmi", "L");
student.setClass("Kelas 10 IPA 1").setSekolah("SMA Negeri 1");

// 3. Tampilkan student
console.log(student);