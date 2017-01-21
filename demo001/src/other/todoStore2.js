class ObservableTodoStore {
    @observable
    todos = [] ;
    get completedTodosCount (){
        return this.todos.filter(
            todo => todo.completed === true
        ).length ;
    }
    report (){
        if(this.todos.length === 0){
            return "<none>" ;
        }
        return `Next todo : "${this.todos[0].task}".
                Progress : ${this.completedTodosCount}/${this.todos.length}` ;
    }
    addTodo(task){
        this.todos.push({
            task:task,
            completed:false,
            assignee:null
        }) ;
    }
}



(function demo001(){
    const todoStore = new TodoStore() ;
    todoStore.addTodo('hello world') ;
    console.info(todoStore.report()) ;

    todoStore.addTodo('try MobX') ;
    console.info(todoStore.report()) ;

    todoStore.todos[0].completed = true ;
    console.info(todoStore.report()) ;

    todoStore.todos[1].task = 'try Mobx in own project';
    console.info(todoStore.report()) ;

})() ;





