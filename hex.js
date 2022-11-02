const hex = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D' ,'E', 'F'];

const color = document.querySelector('.color');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let randomHex = '#';
    // An iteration thru the hex array to produce 6 values each time starting with #. After producing one set, continue producing others(i++).
    for( let i = 0; i < 6; i++){
        // start the random hex with # and apply the function of getting a random number to the hex array.
    randomHex += hex [getRandomHex()];
    }
    color.textContent = randomHex;
    color.style.color = randomHex;
    document.body.style.backgroundColor = randomHex;
})
// get a random whole(rounded down) between 0 and the hex length which is 15.
const getRandomHex = () =>{
       return  Math.floor(Math.random() * hex.length);
}
