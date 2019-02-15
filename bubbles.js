"use strict";

let bubbleArray = [];
let counter = 0;
let bubbleArrayLimit = 256;

window.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("init");
    createBubbles();
}

// - - - - - create the bubbles - - - - -

function createBubbles(number) {
    console.log("createBubbles");

    // loop to make 256 divs
    for (counter = 0; counter < 256; counter++) {
        // call createBubble for clone
        createBubble();
    }
}

function createBubble() {
    console.log("createBubble");
    // clone destination
    const clone = document
        .querySelector("#bubbleTemp")
        .content.cloneNode(true);

    // copy it to #bubbles    
    const bubble = clone.querySelector(".bubble");
    const clonedest = document.querySelector("#bubbles").append(clone);

    // get an array of all the bubbles created
}

function colorBubble(bubble, color) {
    // bubble = div-index of array - - - color = every loop returned color

    console.log("colorBubbles");
    // find the bubble div

    // set the color of the div
}

function colorBubbles() {
    console.log("colorBubbles");
    // do multiple loops to set color for ranges og bubbles - loop from A to B, Step C

    // green loop, return index and color for colorBubble()

    // red loop, return index and color for colorBubble()

    //  lightgreen loop, return index and color for colorBubble()

    //  lightblue loop, return index and color for colorBubble()

    //  pink loop, return index and color for colorBubble()

    //  orange loop, return index and color for colorBubble()

    //  black loop, return index and color for colorBubble()

    //  yellow loop, return index and color for colorBubble()

    //  purple loop, return index and color for colorBubble()

    //  hotpink loop, return index and color for colorBubble()

    //  cyan loop, return index and color for colorBubble()
}