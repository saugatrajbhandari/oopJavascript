class User{
    static password = '342432'
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    static hasKey(){
        console.log(true);
    }
}

const user1 = new User("Rakesh r", 23)
const user2 = new User("John Doe", 30)
const user3 = new User("Jush r", 25)

User.hasKey()