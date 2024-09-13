var toggleButton = document.getElementById('button');
var work = document.getElementById('work-experience');
toggleButton.addEventListener('click', function () {
    if (work.style.display === 'none') {
        work.style.display = 'block';
    }
    else {
        work.style.display = 'none';
    }
});
