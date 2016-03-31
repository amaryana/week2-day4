$('document').ready(function() {
var todoApp = $('#todoApp');
var todoTitle = $('<h1>Life List</hi>');
var todoInput = $('<input placeholder=\'add an item...\'></input>');
var todoAddItemButton = $('<button>Add</button>');
var todoClearButton = $('<button>Remove All Done</button>');
var todoList = $('<ol></ol>');
var todoItem = $('<li></li>');
var list = [];

$('#newTaskForm').hide();

var Task = function(task) {
this.task = task;
this.id = 'new';
}

var addTask = function(task) {
	if(task) {
	}
};

var addTask = function(task) {
	if(task) {
		task = new Task(task);
		listo.push(task);
	}
};

var addTask = function(task) {
	if(task) {
		task = new Task(task);
		listo.push(task);

		$('#newItemInput').val('');
		$('#newList').append('<a href="#" class="" id="item"><li class="list-group-item">' + task.task + '<span class="arrow pull-right"><i class="glyphicon glyphicon-arrow-right"></span></li></a>');

	}
};

var addTask = function(task) {
	if(task) {
		task = new Task(task);
		listo.push(task);

		$('#newItemInput').val('');

		$('#newList').append('<a href="#finish" class="" id="item"><li class="list-group-item">' + task.task + '<span class="arrow pull-right"><i class="glyphicon glyphicon-arrow-right"></span></li></a>');

	}
	$('#newTaskForm,  #newListItem').fadeToggle('fast', 'linear');

};


$('#saveNewItem').on('click', function (e) {
    e.preventDefault();
    var task = $('#newItemInput').val().trim();
    addTask(task);
});



todoApp.append(todoTitle);
todoApp.append(todoAddItemButton);
todoApp.append(todoList);
todoApp.append(todoClearButton);

todoAddItemButton.on('click', function() {
  var userInput = todoInput.val();
  var todoItem = $('<li></li>')
  todoItem.text(userInput);
  todoList.append(todoItem);

})

todoList.on('click', 'li', function(){
  var clickedItem = $(this)
  clickedItem.toggleClass("done");
  })

todoClearButton.on('click', function(){
  $("li.done").remove();

})

$('#saveNewItem').on('click', function (e) {
    e.preventDefault();
    var task = $('#newItemInput').val().trim();
    addTask(task);
});

$('#newListItem').on('click', function () {
      $('#newTaskForm,  #newListItem').fadeToggle('fast', 'linear');
  });

$('#cancel').on('click', function (e) {
		e.preventDefault();
		$('#newTaskForm,  #newListItem').fadeToggle('fast', 'linear');
});

var advanceTask = function(task) {
  var modified = task.innerText.trim()
  for (var i = 0; i < listo.length; i++) {
    if (listo[i].task === modified) {
      if (listo[i].id === 'new') {
        listo[i].id = 'inProgress';
      } else if (listo[i].id === 'inProgress') {
        listo[i].id = 'archived';
      } else {
        listo.splice(i, 1);
      }
      break;
    }
  }
  task.remove();
};

$(document).on('click', '#item', function(e) {
	e.preventDefault();
});

$(document).on('click', '#item', function(e) {
	e.preventDefault();
  var task = this;
  advanceTask(task);
  this.id = 'inProgress';
});

$(document).on('click', '#item', function(e) {
	e.preventDefault();
  var task = this;
  advanceTask(task);
  this.id = 'inProgress';
  $('#currentList').append(this.outerHTML);
});

$(document).on('click', '#inProgress', function (e) {
  e.preventDefault();
  var task = this;
  task.id = "archived";
  var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
  advanceTask(task);
  $('#archivedList').append(changeIcon);
});

$(document).on('click', '#archived', function (e) {
  e.preventDefault();
  var task = this;
  advanceTask(task);
});


})

// 2) Insert this :
//     var todoApp = $('#todoApp');

//     var todoTitle = $('<h1>jQuery Todo App</h1>');

//     var todoInput = $('<input placeholder=\'add an item...\'></input>');
//     var todoAddItemButton = $('<button>Add</button>');
//     var todoClearButton = $('<button>Remove All Done</button>');
//     var todoList = $('<ul></ul>');
//     var todoItem = $('<li></li>');
// 3) Append
//     todoApp.append(todoTitle);
//     todoApp.append(todoInput);
//     todoApp.append(todoAddItemButton);
//     todoApp.append(todoList);
//     todoApp.append(todoClearButton);
