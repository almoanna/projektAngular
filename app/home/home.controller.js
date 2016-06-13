export default class HomeController {
    constructor($scope, $stateParams, $firebaseObject, ToDoService) {
        this.todos = [];
        this.user = $stateParams.user;
        this.todos = ToDoService.getAll();
        this.todos.$loaded().then(this.setStatictics.bind(this));
        this.todos.$watch(this.setStatictics.bind(this));
        this.ToDoService = ToDoService;
        this.editingToDo = null;
        this.userAll = 0;
        this.userCompleted = 0;
        this.userInCompleted = 0;
        this.userFilter = {};

    }
    addTodo() {
        // console.log(this.user+" "+this.userText);
        this.ToDoService.add({
            user: this.user,
            title: this.userText,
            completed: false
        });
        
       
    }
    onuser() {
        this.selectedTab = 'user';
    }
    onall() {
        this.selectedTab = 'all';
    }
    removeTodo(toDo) {
        this.ToDoService.remove(toDo);
    }
    editTodo(todo) {
        this.editingToDo = todo;
    }
    doneEditing(todo) {
        this.editingToDo = null;
        this.ToDoService.edit(todo);
    }
    onChangeStatus(status) {
        
      this.statusFilter = (status === 'active') ? {
            completed: false
        } : (status === 'completed') ? {
            completed: true
        } : {};
 /*     if(status==='active')
        return completed: false;
        else if(status==='completed')
           return completed: true;
        else return {};*/
            

    }
    markAll(isChecked) {
        for (var i = 0; i < this.todos.length; i++) {
            if (this.canProcessElement(this.todos[i])) {
                this.todos[i].completed = isChecked;
                this.doneEditing(this.todos[i]);
            }
        }
    }
    clearAllCompleted() {
        for (var i = 0; i < this.todos.length; i++) {
            if (this.canProcessElement(this.todos[i]) && this.todos[i].completed == true) {
                this.removeTodo(this.todos[i]);
            }
        }
    }
    canProcessElement(toDo) {
        return toDo.user == this.user;
    }
    onChangeTab(userTab) {
        if (userTab == 'all') {
            this.userFilter = {};
        }
        else {
            this.userFilter = {
                user: this.user
            };
        }
    }
    setStatictics() {
        this.userAll = 0;
        this.userCompleted = 0;
        for (var i = 0; i < this.todos.length; i++) {
            if (this.user == this.todos[i].user) {
                this.userAll = this.userAll + 1;
                if (this.todos[i].completed) {
                    this.userCompleted = this.userCompleted + 1;
                    //this.userInCompleted = this.userAll - this.userCompleted;
                }
            }
            this.userInCompleted = this.userAll - this.userCompleted;
        }
    }
}