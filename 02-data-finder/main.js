let sizes = [];
let cols = 10;
let rows = 10;
let numCircles = cols * rows;

// Stores index for find function
let foundIndex = -1;

function setup() {
    let container = document.getElementById('canvas-container');
    let canvas = createCanvas(container.offsetWidth, container.offsetHeight);
    canvas.parent('canvas-container');
    textAlign(CENTER, CENTER);

    resetData();

    // DOM Listeners
    document.getElementById('btn-find').addEventListener('click', findValue);
    document.getElementById('btn-sort-up').addEventListener('click', sortUp);
    document.getElementById('btn-sort-down').addEventListener('click', sortDown);
    document.getElementById('btn-reset').addEventListener('click', resetData);
}

function draw() {
    background(255); // White background

    let cellW = width / cols;
    let cellH = height / rows;


    // Loop through the sizes
    fill(0, 119, 255);//bright bleu

    for (let i = 0; i < cols; i++) { //i --> colls is x coordinaat
        for (let j = 0; j = rows; j++) {
            let size = sizes[i * j];
            let x = i * cellW + cellW / 2;
            let y = j * cellH + cellH / 2;
            circle(x, y, size);
            if (size > 25) {
                fill(255);
                text(size, x, y);
            }
        };
    };
    // Drawing
    // Check for found index: red or blue


}

function resetData() {
    //generate sizes
    let sizes = [];
    for (let i = 0; i < numCircles; i++) {
        sizes.push(random(10, 100));
    };
    //reset foundIndex
    //calculate stats

}

function findValue() {
    //get input value
    let valueToSearch = document.querySelector("#find-input").value;
    //search for value
foundIndex = sizes.findIndex(function(size){
if(size==valueToSearch){
    console.log("PING! FOUND!")
    return true;
};
});

    //if value not found, alert
    if (foundIndex == -1) {
        alert("Value not found!");
    }
};

function sortUp() {
    // sort ascending

}

function sortDown() {
    // sort descending

}

function calculateStats() {
    //use reduce to calculate total

    //calculate average
    calculateStats();
    //add both to DOM
}