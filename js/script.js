// Функция для включения красивого переливающегося фона сайта
function changeColor() {
    const body = document.body;
    // Переключаем класс анимации градиента
    body.classList.toggle('animated-bg');
    
    // Меняем цвет текста маленького блока для красоты
    const myDiv = document.getElementById('myDiv');
    if (myDiv) {
        myDiv.style.color = body.classList.contains('animated-bg') ? '#00f7ff' : '#a3c6c0';
    }
}

// Функции-подкаты для каждой отдельной личности
function yuy1() {
    alert('Подкат для Марка: "Ради него мужчины становятся геями, а девушки встают на колени" хвхахазахпахха😺🎉🎊');
}

function yuy2() {
    alert('Подкат для Альбины: "Я конечно не дикобраз, но я бы тебя дико и не раз" хвхахазахпахха😺🎉🎊');
}

function yuy3() {
    alert('Подкат для Мехрангез: "Ты конечно не икона, но на колени перед тобой я встану" хвхахазахпахха😺🎉🎊');
}

function yuy4() {
    alert('ТЫ ЧТО ХОЧЕШЬ НАПИСАТЬ БОГДАНУ!? Его номер и сердце для тебя недоступны😲🙄😝');
}

function yuy51() {
    alert('Подкат для Вити: "Ты случайно не закон всемирного тяготения? Тогда почему меня так сильно тянет к тебе?" 🍏🧲⚛️');
}

// Счётчик нажатий для открытия секретного Вани
let clickCount = 0;

function incrementClick() {
    clickCount++;
    
    // Если нажали любые кнопки в сумме 3 раза — открывается Ваня (#lic6)
    if (clickCount === 3) {
        const secretSection = document.getElementById('lic6');
        if (secretSection) {
            secretSection.style.display = 'flex';
            alert('Поздравляем! Открыта СЕКРЕТНАЯ личность — ВАНЯ! 👑🔥');
        }
    }
}

// Автоматически и надежно связываем кнопки из HTML с функциями в JS
window.addEventListener('DOMContentLoaded', () => {
    
    // Привязываем вызовы фраз-алертов к кнопкам по их ID
    const btn1 = document.getElementById('lilil1');
    const btn2 = document.getElementById('lilil2');
    const btn3 = document.getElementById('lilil3');
    const btn4 = document.getElementById('lilil4');
    const btn5 = document.getElementById('lilil51');

    if (btn1) {
        btn1.addEventListener('click', yuy1);
        btn1.addEventListener('click', incrementClick); // эта кнопка тоже считает клики
    }
    if (btn2) {
        btn2.addEventListener('click', yuy2);
        btn2.addEventListener('click', incrementClick);
    }
    if (btn3) {
        btn3.addEventListener('click', yuy3);
        btn3.addEventListener('click', incrementClick);
    }
    if (btn4) {
        btn4.addEventListener('click', yuy4);
        btn4.addEventListener('click', incrementClick);
    }
    if (btn5) {
        btn5.addEventListener('click', yuy51);
    }
});
