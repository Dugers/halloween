const states = [
    {
        img: 'https://masterpiecer-images.s3.yandex.net/f8bf0b806f8011eeaaec1e5d9776cfa6:upscaled',
        alt: 'тыковка',
        buttonText: 'Can you?'
    },
    {
        img: 'https://i.pinimg.com/736x/cd/2f/e5/cd2fe53844ab36642911ce5183f8e2f5.jpg',
        alt: 'жаль что не грузит',
        buttonText: 'Stop!'
    },
    {
        img: 'https://pro-chislo.ru/data/moduleImages/Numbers/149/34d06d5fb144be2b67be962b4c4bc77a.png',
        alt: '149',
        buttonText: 'ой'
    },
    {
        img: 'https://tyulyagin.ru/wp-content/uploads/2021/06/%D0%9A%D0%B0%D1%80%D0%BB-%D0%9C%D0%B0%D1%80%D0%BA%D1%81-%D0%B1%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D1%82%D1%80%D1%83%D0%B4%D1%8B-%D1%82%D0%B5%D0%B7%D0%B8%D1%81%D1%8B-%D0%9A%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BB%D0%B0-.jpg',
        alt: 'карл маркс',
        buttonText: 'Last dance?'
    },
    {
        img: 'img/Луч 5 часов мы ждем вас :).jpg',
        alt: 'ждать загрузки',
        buttonText: 'DOWNLOAD!!!!'
    }
];

const img = document.querySelector('.main-img');
const button = document.querySelector('.main-button');
let currentStateIndex = 0;
let lastTime = new Date()

window.onload = (_) => {
    setStateValue()
}

function setStateValue() {
    if (currentStateIndex >= states.length) {
        alert("read the button text")
        return
    }
    img.setAttribute('src', states[currentStateIndex].img);
    img.setAttribute('alt', states[currentStateIndex].alt);
    button.textContent = states[currentStateIndex].buttonText
}

function changeState() {
    const DurationTime = ((new Date) - lastTime)/100
    if (DurationTime < 20) {
        alert("Sleep...... a bit")
        return
    }
    ++currentStateIndex;
    if (currentStateIndex < states.length) {
        lastTime = new Date()
    }
    setStateValue()
}