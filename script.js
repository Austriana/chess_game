const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 1000;
canvas.style.touchAction = 'none'
let background = new Image();
background.src = 'pictures/background.avif';
let lock = false;

class Figure{
    constructor(row, column, color, sx, sy, sw, sh){
        this.image = new Image();
        this.image.src = 'pictures/Group 13.svg';
        this.image.style.fill = 'red'
        this.width = 54.70;
        this.height = 54.70;
        this.frame = 31.25;
        this.row = row;
        this.column = column;
        this.color = color;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.originX = this.frame + (this.column * this.width);
        this.originY = this.frame + (this.row * this.height);
        this.x = this.originX;
        this.y = this.originY;
        this.clicked = false;
    }

    draw(context){
        context.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.width, this.height)
    } ;   
};

const bturmOne = new Figure(0, 0, 'hsla(36, 100%, 50%, 1.00)', 240, 260, 200, 200);
const bturmTwo = new Figure(0, 7, 'hsla(24, 100%, 50%, 1.00)', 240, 260, 200, 200);
const bknightOne = new Figure(0, 1, 'hsla(59, 100%, 50%, 1.00)', 440, 260, 200, 200);
const bknightTwo = new Figure(0, 6, 'hsla(108, 100%, 50%, 1.00)', 440, 260, 200, 200);
const bbishopOne = new Figure(0, 2, 'hsla(207, 100%, 50%, 1.00)', 640, 260, 200, 200);
const bbishopTwo = new Figure(0, 5, 'hsla(229, 100%, 50%, 1.00)', 640, 260, 200, 200);
const bqueen = new Figure(0, 3, 'hsla(335, 100%, 50%, 1.00)', 840, 260, 200, 200);
const bking = new Figure(0, 4, 'hsla(0, 100%, 50%, 1.00)', 1040, 260, 200, 200);
const bbauerOne = new Figure(1, 0, 'hsla(145, 100%, 50%, 1.00)', 40, 260, 200, 200);
const bbauerTwo = new Figure(1, 1, 'hsla(145, 100%, 50%, 1.00)', 40, 260, 200, 200);
const bbauerThree = new Figure(1, 2, 'hsla(145, 100%, 50%, 1.00)', 40, 260, 200, 200);
const bbauerFour = new Figure(1, 3, 'hsla(145, 100%, 50%, 1.00)', 40, 260, 200, 200);
const bbauerFive = new Figure(1, 4, 'hsla(145, 100%, 50%, 1.00)', 40, 260, 200, 200);
const bbauerSix = new Figure(1, 5, 'hsla(145, 100%, 50%, 1.00)', 40, 260, 200, 200);
const bbauerSeven = new Figure(1, 6, 'hsla(145, 100%, 50%, 1.00)', 40, 260, 200, 200);
const bbauerEight = new Figure(1, 7, 'hsla(145, 100%, 50%, 1.00)', 40, 260, 200, 200);

const wturmOne = new Figure(7, 0, 'hsla(36, 100%, 50%, 1.00)', 240, 470, 200, 200);
const wturmTwo = new Figure(7, 7, 'hsla(24, 100%, 50%, 1.00)', 240, 470, 200, 200);
const wknightOne = new Figure(7, 1, 'hsla(59, 100%, 50%, 1.00)', 440, 470, 200, 200);
const wknightTwo = new Figure(7, 6, 'hsla(108, 100%, 50%, 1.00)', 440, 470, 200, 200);
const wbishopOne = new Figure(7, 2, 'hsla(207, 100%, 50%, 1.00)', 640, 470, 200, 200);
const wbishopTwo = new Figure(7, 5, 'hsla(229, 100%, 50%, 1.00)', 640, 470, 200, 200);
const wqueen = new Figure(7, 3, 'hsla(335, 100%, 50%, 1.00)', 840, 470, 200, 200);
const wking = new Figure(7, 4, 'hsla(0, 100%, 50%, 1.00)', 1040, 470, 200, 200);
const wbauerOne = new Figure(6, 0, 'hsla(145, 100%, 50%, 1.00)', 40, 470, 200, 200);
const wbauerTwo = new Figure(6, 1, 'hsla(145, 100%, 50%, 1.00)', 40, 470, 200, 200);
const wbauerThree = new Figure(6, 2, 'hsla(145, 100%, 50%, 1.00)', 40, 470, 200, 200);
const wbauerFour = new Figure(6, 3, 'hsla(145, 100%, 50%, 1.00)', 40, 470, 200, 200);
const wbauerFive = new Figure(6, 4, 'hsla(145, 100%, 50%, 1.00)', 40, 470, 200, 200);
const wbauerSix = new Figure(6, 5, 'hsla(145, 100%, 50%, 1.00)', 40, 470, 200, 200);
const wbauerSeven = new Figure(6, 6, 'hsla(145, 100%, 50%, 1.00)', 40, 470, 200, 200);
const wbauerEight = new Figure(6, 7, 'hsla(145, 100%, 50%, 1.00)', 40, 470, 200, 200);

const setArray = [
    wturmOne, wturmTwo, wknightOne, wknightTwo, wbishopOne, wbishopTwo, wqueen, wking, wbauerOne, wbauerTwo, wbauerThree, wbauerFour, wbauerFive, wbauerSix, wbauerSeven, wbauerEight, bturmOne, bturmTwo, bknightOne, bknightTwo, bbishopOne, bbishopTwo, bqueen, bking, bbauerOne, bbauerTwo, bbauerThree, bbauerFour, bbauerFive, bbauerSix, bbauerSeven, bbauerEight,
];

window.addEventListener('load', () => {
    ctx.drawImage(background, 0, 0)
    setArray.forEach(figure => {
        figure.draw(ctx);        
    });
});
canvas.addEventListener('pointerdown', (e) => {
    e.preventDefault()
    setArray.forEach(figure => {
        if(!lock && !figure.clicked && e.clientX > figure.x && e.clientX < figure.x + figure.width && e.clientY > figure.y && e.clientY < figure.y + figure.height){
            figure.clicked = true;
            lock = true;
        }
    });  
});
canvas.addEventListener('pointermove', (e) => {
    e.preventDefault()
    ctx.clearRect(0, 0, 1000, 1000)
    ctx.drawImage(background, 0, 0)
    setArray.forEach(figure => {
        if(lock && figure.clicked){
            figure.x = e.clientX - figure.width/2;
            figure.y = e.clientY - figure.height/2;
        }
        figure.draw(ctx); 
    });  
});
canvas.addEventListener('pointerup', (e) => {
    e.preventDefault()
    setArray.forEach(figure => {
        figure.clicked = false;
        lock = false;
    });  
});