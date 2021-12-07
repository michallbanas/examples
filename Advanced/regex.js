"use strict";

const text = "The quick brown fox jumps over the lazy dog, Michal.";
const regex = new RegExp(/Michal/);

function search() {
    if (regex.test(text)) {
        console.log("Found Michal");
    } else {
        console.log("Michal not found");
    }
}

search()
