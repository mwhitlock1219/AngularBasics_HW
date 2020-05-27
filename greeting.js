function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNumber, state, zipCode, occupation, hourlyWage, numHours) {
        this.certifications = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        this.numHours = numHours;
    }
    // Extra Methods
    Person.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.nameAge = function () {
        return this.firstName + " is " + this.age + " years old";
    };
    Person.prototype.location = function () {
        return "STATE: " + this.state + ", ZIPCODE: " + this.zipCode;
    };
    Person.prototype.nameOccupation = function () {
        return this.firstName + " is a " + this.occupation;
    };
    Person.prototype.allDetails = function () {
        return ("NAME: " +
            this.firstName +
            " " +
            this.lastName +
            "\nAGE: " +
            this.age +
            "\nPHONE NUMBER: " +
            this.phoneNumber +
            "\nSTATE: " +
            this.state +
            "\nZIPCODE: " +
            this.zipCode +
            "\nOCCUPATION: " +
            this.occupation);
    };
    //hourlyWage Function
    Person.prototype.weeklyWage = function (numHours) {
        if (numHours === void 0) { numHours = 40; }
        return ("Name: " +
            this.firstName +
            " " +
            this.lastName +
            ", Weekly Wage: $" +
            this.hourlyWage * numHours);
    };
    //Certifications function
    Person.prototype.addCerts = function () {
        var _a;
        var certifications = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            certifications[_i] = arguments[_i];
        }
        (_a = this.certifications).push.apply(_a, certifications);
        return "Certifications: " + this.certifications;
    };
    // just like string, number, any you must return the 'type' you want after the arguement. In this case 'Person'
    Person.addEmployee = function (config) {
        return new Person(config.firstName, config.lastName); // // require properties must be included : firstName and lastName
    };
    return Person;
}());
var employee1 = new Person("Sarah", "Lee", 24, 3361234567, "NC", 27455, "Cashier", 9, null);
document.getElementById("para2").innerHTML = employee1.allDetails();
var employee2 = new Person("Dana", "Delancey", 30, 7042034493, "NC", 27264, "Front-End Developer", 35, 37);
document.getElementById("para3").innerHTML = employee2.allDetails();
var employee3 = new Person("Rafeena", "Usman", 30, 7044557645, "NC", 28173, "Project Manager", 45, 45);
document.getElementById("para4").innerHTML = employee3.allDetails();
var employee4 = new Person("Yami", "Gorfu", 35, 901324775, "NC", 27263, "Sr Developer", 40, 28);
document.getElementById("para5").innerHTML = employee4.allDetails();
var employee5 = new Person("Elijah", "Davila", 27, 3367466656, "NC", 28173, "Scrum Master", 47, 26);
document.getElementById("para6").innerHTML = employee5.allDetails();
document.getElementById("cert").innerHTML = employee1.addCerts("MD", " MBA");
document.getElementById("wage1").innerHTML = employee1.weeklyWage(this.numHours);
document.getElementById("person").innerHTML = Person.addEmployee({
    firstName: "Melina",
    lastName: "Alejos"
}).fullName();
