var Todos = function(){
	this.todoList = [];
}

Todos.prototype.displayTodos = function(){
	this.todoList.forEach(function(todo){
		console.log(todo);
	})
}

Todos.prototype.add = function(todoText){
	this.todoList.push({
		todoText: todoText,
		completed: false
	})
	this.displayTodos();
}

Todos.prototype.changeTodo = function(position, todoText){
	this.todoList.forEach(function(todo, index){
		if (position === index) {
			this.todoList[index].todoText = todoText;
		}
	}, this);
	this.displayTodos();
}

Todos.prototype.delete = function(position){
	this.todoList.splice(position, 1);
	this.displayTodos();
}

Todos.prototype.toggleCompleted = function(position){
	var todo = this.todoList[position];
	todo.completed = !todo.completed;
	this.displayTodos();
}

Todos.prototype.toggleAll = function(){
	var completedTodo = 0;
	var totalTodos = this.todoList.length
	// find number of completed
	this.todoList.forEach(function(todo){
		if (todo.completed === true){
			completedTodo++;
		}
	})
	this.todoList.forEach(function(todo){
	//if everything is true then change everything to false
		if (completedTodo === totalTodos){
			todo.completed = false;
	//else make everything true;
		}else{
			todo.completed = true;
		}
	})
	this.displayTodos();
}

var handlers = new Todos();




