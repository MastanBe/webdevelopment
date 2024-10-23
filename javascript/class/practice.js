class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log(`username is ${this.name} with emailId ${this.email}`);
    }
}
const student1=new User("abc","abc@gmail.com");
const teacher1=new User("teacher1","teacher2gmail.com");
student1.viewData();
teacher1.viewData();
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        console.log("editing");
    }
}
const admin=new Admin("admin","admin@gmail.com");
admin.editData();

