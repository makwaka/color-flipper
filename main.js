const colors = ['blue', 'red', 'orange', '#41d067' ];

const color = document.querySelector('.color');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
 let randomColor =  colors [getRandomColor()];

    document.body.style.backgroundColor = randomColor;

   color.textContent = randomColor;
   color.style.color= randomColor;
});

const getRandomColor = () => {
    return Math.floor(Math.random() * colors.length);
}