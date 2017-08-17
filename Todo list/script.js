$(document).ready(function() {
  //поиск дом элементов вынести вверх, чтобы он происходил один раз
  var tasksArray = [];
  var sortedTasks = [];

  var addButton = $('#addButton');
  addButton.on('click', addTaskToList);

  var sortButton = $('#sortButton');
  sortButton.on('click', sortList);


  var list = document.getElementById('list');
  list.state = 0;


  function addTaskToList() {
    var input = document.getElementById('task');
    if (!input.value) return;

    tasksArray.push(input.value);
    var li = document.createElement('li');
    list.appendChild(li);
    li.innerHTML = input.value;

    input.value = "";
    showLog();

    if(tasksArray.length > 1) {
      $('#sortButton').css("visibility", "visible");
    }

    $(li).hover(
      function() {
        var span = document.createElement('span');
        span.innerHTML = 'X';
        $(this).append($(span));
        $(span).on("click", removeTask);

      },
      function() {
        $(this).find("span:last").remove();
      }
    );

  }

  function removeTask() {
    var text = $(this).parent().contents().get(0).nodeValue;
    var search = tasksArray.indexOf(text);

    if (search !== -1) {
      tasksArray.splice(search, 1);
    }
    $(this).parent().remove();
    showLog();

  }

  function showLog() {
    (list.state) ? console.log(sortedTasks) : console.log(tasksArray);
    sortedTasks = [];
  }

  function toggleText() {
    list.state = list.state == 0 ? 1 : 0;//контроллер
    var text = document.getElementById('sortButton').firstChild;
    text.data = text.data == "Sort By Task Name" ? "Sort By Task Number" : "Sort By Task Name";
  }


  function sortList() {
    toggleText();

    var listitems = $(list).children('li').get();
    if (!list.state) {
      $.each(listitems, function(index, value) {
        value = tasksArray[index];
        $(this).contents().get(0).nodeValue = value;
      });

    } else {
      listitems.sort(function(a, b) {
        return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
      })


      $.each(listitems, function(idx, itm) {
        sortedTasks.push($(itm).text());
        $(list).append(itm);
      });

    }
    showLog();
  }

});
