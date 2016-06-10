/*global Firebase */
export default class HomeController{
    constructor($scope,$stateParams, $firebaseObject, ToDoService)
    {
      this.todos = [];
      this.user = $stateParams.user;
      this.todos = ToDoService.getAll();
      this.ToDoService = ToDoService;
      this.editingToDo = null;
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
        this.ToDoService.remove(toDo);
     }
     editTodo(todo)
    {
        this.editingToDo = todo;
    }
    
    doneEditing(todo)
    {
        this.editingToDo = null;
        this.ToDoService.edit(todo);
    }
    onChangeStatus(status)
    {
        this.statusFilter = (status === 'active') ?
				{ completed: false } : (status === 'completed') ?
				{ completed: true } : {};
				 /*     if(status==='active')
        return completed: false;
        else if(status==='completed')
           return completed: true;
        else return {};*/
    }
}


