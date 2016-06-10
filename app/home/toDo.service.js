/*global Firebase */

export default class toDoService{
    constructor($firebaseArray){
       this.firebaseArray = $firebaseArray;
        this.ref = new Firebase("https://angulartododb.firebaseio.com/");
        this.items = $firebaseArray(this.ref);
    }
    getAll(){
        return this.items;
    }
    add(value){
        this.items.$add({
           'user': value.user,
           'title': value.title,
           'completed': value.completed
        }); 
    }
    edit(value){
        this.items.$save(value);
    }
    remove(ref){
        this.items.$remove(ref);
    }
}