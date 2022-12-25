const reveal = document.querySelector(".reveal");
const heightWindow = document.documentElement.clientHeight;

//Событие "прокрутка":
window.addEventListener('scroll', function() {
    //Если элемент находится в видимом диапазоне:
    if (((reveal.getBoundingClientRect().y + reveal.getBoundingClientRect().height)> 0) && (reveal.getBoundingClientRect().y < heightWindow)) {reveal.className = "reveal reveal_active"}
    //Отключение элемента, если он не виден: (нет в задании, поэтому функция отключена)
    //else {reveal.className = "reveal"}
})