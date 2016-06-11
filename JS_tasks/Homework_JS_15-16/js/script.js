

$(function () {

// AJAX-запросы
    $('button').on('click', search);

    function search(e) {
        e.preventDefault();
        $('img').remove();
        var $searchKey = $('.text').val();

        $.ajax({
            url: 'https://pixabay.com/api/?key=2716174-89a9b125a63640e63bc918f65&q=' + $searchKey + '&image_type=photo' + '&per_page=200',
            dataType: 'jsonp',

            success: function (data) {
                var $results = data.hits;
                for (var i = 0; i < data.hits.length; i++) {
                    $('.result').append('<img src="' + $results[i].previewURL + '">');
                }

            },
            error: function () {
                alert('Error!');
            }
        });

        $('.text').val('');
    }

// Прототипы
    var Human = {
        name: 'Sam',
        age: 25,
        sex: 'male',
        height: 180,
        weight: 80
    }

    var Worker = {
      job: 'Developer',
      salary: 1000 + '$',
      toWork: function (){
        alert('I work!');
      }
    }

    Worker.__proto__ = Human;


    var Student = {
      studyPlace: 'KPI',
      scolarship: 700 + 'hrn',
      watchSeries: function() {
        alert('I watch TV!');
      }
    }
    Student.__proto__ = Human;

    var worker1 = Object.create(Worker);
    var worker2 = Object.create(Worker);
    var worker3 = Object.create(Worker);


    var student1 = Object.create(Student);
    var student2 = Object.create(Student);
    var student3 = Object.create(Student);


    console.log('worker1.name', worker1.name);
    console.log('worker2.age', worker2.age);
    console.log('worker3.sex', worker3.sex);

    console.log('student1.height', student1.height);
    console.log('student2.weight', student2.weight);
    console.log('student3.name', student3.name);

  });
