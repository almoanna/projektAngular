/*global Firebase */

export default class toDoService
{
    constructor($firebaseObject)
    {
        this.firebaseObject = $firebaseObject;
        this.ref = new Firebase("https://angularto.firebaseio.com/");
        this.ref.push({
           'user': 'test1',
           'title':'test1',
           'completed':'false'
        });
        this.elementref = this.ref.push({
           'user': 'test2',
           'title':'test2',
           'completed':'false'
        }); 
    }
    
    getAll()
    {
        return this.firebaseObject(this.ref);
    }
    
    add(value)
    {
        this.ref.push({
           'user': value.user,
           'title': value.title,
           'completed': value.completed
        }); 
    }
}; 