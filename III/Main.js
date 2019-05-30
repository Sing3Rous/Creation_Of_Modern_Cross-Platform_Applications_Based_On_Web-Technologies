var app = new Vue({
    el: '#app',
    data: {
        show: 0,
        showform: 0,
        persons: [
            {
                Name: "John",
                Patronymic: "Valeryevich",
                LastName: "Smith",
                BirthDate: "1999-30-08",
                Weight: 70,
                Course: 3,
                Group: "B613",
                GPA: 4.6
            },
            {
                Name: "Dustin",
                Patronymic: "Vasilyevich",
                LastName: "Green",
                BirthDate: "1998-15-04",
                Weight: 83,
                Course: 3,
                Group: "B613",
                GPA: 3.9
            },
            {
                Name: "Trevor",
                Patronymic: "Aleksandrovich",
                LastName: "Parkson",
                BirthDate: "2001-01-12",
                Course: 1,
                Group: "A701",
                GPA: 4.0
            },
            {
                Name: "Robert-Afanasiy",
                Patronymic: "Afanasiy-Robertovich",
                LastName: "Glass",
                Course: 4,
                Group: "G302",
                GPA: 3.3
            },
            {
                Name: "Rasmus",
                Patronymic: "Semenovich",
                LastName: "Johansson",
                Weight: 92,
                Course: 2,
                Group: "C200",
                GPA: 4.7
            },
            {
                Name: "Igor",
                Patronymic: "Gennadyevich",
                LastName: "Solovyev",
                BirthDate: "1980-07-07",
                Weight: 85,
                Department: "am",
                Rank: 3,
                Experience: 10
            },
            {
                Name: "Mark",
                Patronymic: "Vitalyevich",
                LastName: "Grass",
                BirthDate: "1963-26-10",
                Weight: 93,
                Department: "ai",
                Rank: 5,
                Experience: 26
            },
            {
                Name: "Jason",
                Patronymic: "Vladimirovich",
                LastName: "Young",
                BirthDate: "1990-12-09",
                Weight: 75,
                Department: "am",
                Rank: 2,
                Experience: 3
            },
            {
                Name: "Courtney",
                Patronymic: "Mikhailovna",
                LastName: "Brown",
                Department: "wd",
                Rank: 4,
                Experience: 17
            },
            {
                Name: "Johnas",
                Patronymic: "Johnas",
                LastName: "Johnas",
                Weight: 85,
                Department: "hr",
                Rank: 1,
                Experience: 1
            }
        ],
    },
    methods:{
        FindByLastName: function(lastName) {
            let finded = [];
            let i = 0;
            while (i != this.persons.length) {
                if (this.persons[i].LastName === lastName)
                    finded.push(this.persons[i]);
                ++i;
            }
            return finded;
        },
        FindByDepartment: function(department) {
            let finded = [];
            this.persons.forEach(person => {
                if (isTeacher(person)) {
                    if (~person.Department.indexOf(department)) {
                        finded.push(person);
                    }
                }
            });
            return finded.sort((a, b) => {
                if (a.Rank < b.Rank)
                    return -1;
                if (a.Rank > b.Rank)
                    return 1;
                return 0;
            });
        },
        GetPersons: function() {
            this.persons.sort((a, b) => {
                if (a.LastName < b.LastName)
                    return -1;
                if (a.LastName > b.LastName)
                    return 1;
                return 0;
            });
            return this.persons;
        },
        GetTeachers: function() {
            let result = [];
            for (var person of this.persons) {
                if (this.isTeacher(person)) {
                    result.push(person);
                }
            }
            result.sort((a, b) => {
                if (a.LastName < b.LastName)
                    return -1;
                if (a.LastName > b.LastName)
                    return 1;
                return 0;
            });
            return result;
        },
        GetStudents: function() {
            let result = [];
            for (var person of this.persons) {
                if (this.isStudent(person)) {
                    result.push(person);
                }
            }
            result.sort((a, b) => {
                if (a.LastName < b.LastName)
                    return -1;
                if (a.LastName > b.LastName)
                    return 1;
                return 0;
            });
            return result;
        },
        SortByName: function(persons) {
            persons.sort((a, b) => {
                if (a.Name < b.Name)
                    return -1;
                if (a.Name > b.Name)
                    return 1;
                return 0;
            });
            return persons;
        },
        isStudent: function(person) {
            return person.Department == undefined && person.Group != undefined;
        },
        isTeacher: function(person) {
            return person.Group == undefined && person.Department != undefined;
        },
        addPerson: function() {
            let form = document.forms.namedItem("form");
            if (form != null) {
                let name = form[0].value;
                let patronymic = form[1].value;
                let lastName = form[2].value;
                let birthDate = form[3].value;
                let weight = form[4].value;
                this.persons.push({
                    Name: name,
                    Patronymic: patronymic,
                    LastName: lastName,
                    BirthDate: birthDate,
                    Weight: weight
                });
            }
        },
        addTeacher: function() {
            let form = document.forms.namedItem("form");
            if (form != null) {
                let name = form[0].value;
                let patronymic = form[1].value;
                let lastName = form[2].value;
                let birthDate = form[3].value;
                let weight = form[4].value;
                let department = form[5].value;
                let rank = form[6].value;
                let experience = form[7].value;
                this.persons.push({
                    Name: name,
                    Patronymic: patronymic,
                    LastName: lastName,
                    BirthDate: birthDate,
                    Weight: weight,
                    Department: department,
                    Rank: rank,
                    Experience: experience
                });
            }
        },
        addStudent: function() {
            let form = document.forms.namedItem("form");
            if (form != null) {
                let name = form[0].value;
                let patronymic = form[1].value;
                let lastName = form[2].value;
                let birthDate = form[3].value;
                let weight = form[4].value;
                let course = form[5].value;
                let group = form[6].value;
                let gpa = form[7].value;
                this.persons.push({
                    Name: name,
                    Patronymic: patronymic,
                    LastName: lastName,
                    BirthDate: birthDate,
                    Weight: weight,
                    Course: course,
                    Group: group,
                    GPA: gpa
                });
            }
        },
    }
});