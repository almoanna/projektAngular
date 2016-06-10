export default class HomeController{
    constructor($scope,$stateParams)
    {
      this.todos = [];
      this.user = $stateParams.user;
    }
    addTodo()
    {
        this.todos.push({
            value:{
              user: this.user,
              title: this.userText,
              completed:false
           },
            editing: false
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


