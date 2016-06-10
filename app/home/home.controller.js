/*global Firebase */
export default class HomeController{
    constructor($scope,$stateParams, $firebaseObject, ToDoService)
    {
      this.todos = [];
      this.user = $stateParams.user;
      this.data = ToDoService.getAll();
      this.ToDoService = ToDoService;
    }
    addTodo()
    {
        this.ToDoService.add({
                user: this.user,
                title: this.userText,
                completed:false
            });
    }
    
    onuser()
    {
        this.selectedTab = 'user';
    }
    
    onall()
    {
        this.selectedTab = 'all';
    }
    
    removeTodo(toDo)
    {
        var index = this.todos.indexOf(toDo);
        this.todos.splice(index,1);
     }
     editTodo(todo)
    {
        todo.editing = !todo.editing;
        this.originalToDo = todo;
    }
    
    doneEditing(todo)
    {
        todo.editing = false;
        console.log(todo.editing);
    }
    onChangeStatus(status)
    {
        this.statusFilter = (status === 'active') ?
				{ value:{completed: false }} : (status === 'completed') ?
				{ value:{completed: true }} : {};
				 /*     if(status==='active')
        return completed: false;
        else if(status==='completed')
           return completed: true;
        else return {};*/
    }
}


