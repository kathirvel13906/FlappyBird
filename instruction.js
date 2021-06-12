class Form {
    constructor() {
        this.title = createElement('h1');
        this.button = createButton('Play');
        this.greeting = createElement('h2');

        this.i1 = createElement('h3');
        this.i2 = createElement('h4');
        this.i3 = createElement('h4');
        this.i4 = createElement('h4');
        this.i5 = createElement('h4');
    }

    hide() {
        this.title.hide();
        this.greeting.hide();
        this.button.hide();
        this.i1.hide();
        this.i2.hide();
        this.i3.hide();
        this.i4.hide();
        this.i5.hide();
    }

    display() {
        this.title.html("Flappy Bird");
        this.title.position(430, 20);

        this.greeting.html("Hello Bird!");
        this.greeting.position(455, 90);

        this.button.position(500, 460);

        this.i1.html("Press The Play Button To Start");
        this.i1.position(390,150);

        this.i2.html("Press SPACE To Make The Bird Fly Higher.");
        this.i2.position(370,260);
        this.i3.html("Avoid The Obstacles To Gain Score.");
        this.i3.position(390,290);
        this.i4.html("The Game Ends If You Hit The Bird On The Wall.");
        this.i4.position(350,320);
        this.i5.html("Don't Lose Your Hope! Try Again And Give Your Best.");
        this.i5.position(340,350);


        this.button.mousePressed(()=>{
            this.greeting.hide();
            this.button.hide();
            this.title.hide();
            this.i1.hide();
            this.i2.hide();
            this.i3.hide();
            this.i4.hide();
            this.i5.hide();
            gameState = 1;
        })
    }
}