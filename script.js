const canvas = document.getElementById('canvas');
const scaling = document.getElementById('scaling');
const ctx = canvas.getContext('2d');
let scale = .7;
let background = new Image();
background.width = 500 * scale;
background.height = 500 * scale;
background.src = 'pictures/background.avif';
format();
canvas.style.touchAction = 'none'
let lock = false;

class Figure{
    constructor({row, column, sx, sy, sw, sh}){
        this.image = new Image();
        this.image.src = 'pictures/Group 13.svg';
        this.width = 54.70 * scale;
        this.height = 54.70 * scale;
        this.frame = 31.25 * scale;
        this.row = row;
        this.column = column;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.originX = this.frame + (this.column * this.width);
        this.originY = this.frame + (this.row * this.height);
        this.x = this.originX;
        this.y = this.originY;
        this.clicked = false;
    };

    draw(context){   
        context.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.width, this.height)
    };

    resize(context){
        this.width = 54.70 * scale;
        this.height = 54.70 * scale;
        this.frame = 31.25 * scale;
        this.originX = this.frame + (this.column * this.width);
        this.originY = this.frame + (this.row * this.height);
        this.x = this.originX;
        this.y = this.originY;
        this.draw(context);
    };
};

const bturmOne = new Figure({row:0, column:0, sx:240, sy:260, sw:200, sh:200});
const bturmTwo = new Figure({row:0, column:7, sx:240, sy:260, sw:200, sh:200});
const bknightOne = new Figure({row:0, column:1, sx:440, sy:260, sw:200, sh:200});
const bknightTwo = new Figure({row:0, column:6, sx:440, sy:260, sw:200, sh:200});
const bbishopOne = new Figure({row:0, column:2, sx:640, sy:260, sw:200, sh:200});
const bbishopTwo = new Figure({row:0, column:5, sx:640, sy:260, sw:200, sh:200});
const bqueen = new Figure({row:0, column:3, sx:840, sy:260, sw:200, sh:200});
const bking = new Figure({row:0, column:4, sx:1040, sy:260, sw:200, sh:200});
const bbauerOne = new Figure({row:1, column:0, sx:40, sy:260, sw:200, sh:200});
const bbauerTwo = new Figure({row:1, column:1, sx:40, sy:260, sw:200, sh:200});
const bbauerThree = new Figure({row:1, column:2, sx:40, sy:260, sw:200, sh:200});
const bbauerFour = new Figure({row:1, column:3, sx:40, sy:260, sw:200, sh:200});
const bbauerFive = new Figure({row:1, column:4, sx:40, sy:260, sw:200, sh:200});
const bbauerSix = new Figure({row:1, column:5, sx:40, sy:260, sw:200, sh:200});
const bbauerSeven = new Figure({row:1, column:6, sx:40, sy:260, sw:200, sh:200});
const bbauerEight = new Figure({row:1, column:7, sx:40, sy:260, sw:200, sh:200});

const wturmOne = new Figure({row:7, column:0, sx:240, sy:470, sw:200, sh:200});
const wturmTwo = new Figure({row:7, column:7, sx:240, sy:470, sw:200, sh:200});
const wknightOne = new Figure({row:7, column:1, sx:440, sy:470, sw:200, sh:200});
const wknightTwo = new Figure({row:7, column:6, sx:440, sy:470, sw:200, sh:200});
const wbishopOne = new Figure({row:7, column:2, sx:640, sy:470, sw:200, sh:200});
const wbishopTwo = new Figure({row:7, column:5, sx:640, sy:470, sw:200, sh:200});
const wqueen = new Figure({row:7, column:3, sx:840, sy:470, sw:200, sh:200});
const wking = new Figure({row:7, column:4, sx:1040, sy:470, sw:200, sh:200});
const wbauerOne = new Figure({row:6, column:0, sx:40, sy:470, sw:200, sh:200});
const wbauerTwo = new Figure({row:6, column:1, sx:40, sy:470, sw:200, sh:200});
const wbauerThree = new Figure({row:6, column:2, sx:40, sy:470, sw:200, sh:200});
const wbauerFour = new Figure({row:6, column:3, sx:40, sy:470, sw:200, sh:200});
const wbauerFive = new Figure({row:6, column:4, sx:40, sy:470, sw:200, sh:200});
const wbauerSix = new Figure({row:6, column:5, sx:40, sy:470, sw:200, sh:200});
const wbauerSeven = new Figure({row:6, column:6, sx:40, sy:470, sw:200, sh:200});
const wbauerEight = new Figure({row:6, column:7, sx:40, sy:470, sw:200, sh:200});

const setArray = [
    wturmOne, wturmTwo, wknightOne, wknightTwo, wbishopOne, wbishopTwo, wqueen, wking, wbauerOne, wbauerTwo, wbauerThree, wbauerFour, wbauerFive, wbauerSix, wbauerSeven, wbauerEight, bturmOne, bturmTwo, bknightOne, bknightTwo, bbishopOne, bbishopTwo, bqueen, bking, bbauerOne, bbauerTwo, bbauerThree, bbauerFour, bbauerFive, bbauerSix, bbauerSeven, bbauerEight,
];

window.addEventListener('load', () => {
    ctx.drawImage(background, 0, 0, background.width, background.height)
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
        };
    });  
});
canvas.addEventListener('pointermove', (e) => {
    e.preventDefault()
    ctx.clearRect(0, 0, 1000, 1000)
    ctx.drawImage(background, 0, 0, background.width, background.height)
    setArray.forEach(figure => {
        if(lock && figure.clicked){
            figure.x = e.clientX - figure.width/2;
            figure.y = e.clientY - figure.height/2;
        };
        figure.draw(ctx); 
    });  
});
canvas.addEventListener('pointerup', (e) => {
    e.preventDefault()
    setArray.forEach(figure => {
        figure.clicked = false;
        lock = false;
    });
    scaling.style.display = 'none'
});

scaling.addEventListener('change', ()=>{
    scale = scaling.value;
    background.width = 500 * scale;
    background.height = 500 * scale;
    format();
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(background, 0, 0, background.width, background.height)
    setArray.forEach(figure => {
        figure.resize(ctx);        
    });
});

function format(){
    if(window.innerWidth > window.innerHeight){
        canvas.width = window.innerWidth - 10;
        canvas.height = background.height;
    } else {
        canvas.height = window.innerHeight - 10;
        canvas.width = background.width;
    };    
};