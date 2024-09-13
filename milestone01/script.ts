const toggleButton = document.getElementById('button') as HTMLButtonElement
const work = document.getElementById('work-experience') as HTMLElement

toggleButton.addEventListener('click', () => {
    if(work.style.display === 'none') {
        work.style.display = 'block'
    }else {
        work.style.display ='none'
    }
});