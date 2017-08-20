$(document).ready(function() {
  var tasks = [];

  var addButton = $('#addButton');
  addButton.on('click', addTaskToList);

  var sortButton = $('#sortButton');
  sortButton.on('click', sortList);

  var list = document.getElementById('list');
  list.state = 0;


  function addTaskToList() {
    var input = document.getElementById('task');
    if (!input.value) return;
    var task = {
      number: tasks.length + 1,
      name: input.value
    };

    tasks.push(task);

    var li = document.createElement('li');
    $(li).addClass('wrapper__task');
    list.appendChild(li);
    li.innerHTML = task.number + ". " + input.value;
    input.value = "";
    $(li).append(addCross());
    enableSorting();
    showLog();

  }

  function addCross(){
    var span = document.createElement('span');
    $(span).addClass('wrapper__task__cross');
    span.innerHTML = 'X';

    $(span).on("click", removeTask);

    $(span).hover(
      function() {
        $(this).parent().css('color', 'red');
      },
      function() {
        $(this).parent().css('color', 'black');
      }
    );

    return span;
  }

  function removeTask() {
    var indexLi = $(this).parent().index();
    tasks.splice(indexLi, 1);
    $(this).parent().remove();
    var listitems = $(list).children('li').get();

    $.each(listitems, function(index) {
      if (tasks[index].number <= indexLi) return;
      tasks[index].number--;
      listitems[index].innerHTML = tasks[index].number + '. ' + tasks[index].name;
      listitems[index].append(addCross());

    });
    enableSorting();
    showLog();
  }

  function showLog() {
    console.log(tasks);
  }

  function enableSorting() {
    if (tasks.length > 1) {
      $('#sortButton').css("visibility", "visible");
    } else {
      $('#sortButton').css("visibility", "hidden");
    }
  }

  function toggleText() {
    var text = document.getElementById('sortButton').firstChild;
    text.data = list.state == 1 ? "Sort By Task Number" : "Sort By Task Name";
  }

  function toggleListState() {
    list.state = list.state == 0 ? 1 : 0;
  }


  function sortList() {
    toggleListState();
    toggleText();

    var listitems = $(list).children('li').get();
    (!list.state) ? tasks.sort(compareNumber): tasks.sort(compareName);

    $.each(listitems, function(index) {
      listitems[index].innerHTML = tasks[index].number + '. ' + tasks[index].name;
      listitems[index].append(addCross());

    });
    showLog();
  }

  function compareNumber(a, b) {
    return a.number - b.number;
  }

  function compareName(a, b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

});
