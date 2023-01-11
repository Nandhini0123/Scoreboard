let counth = 0;
let countg = 0;
let scorehome = document.getElementById("score1")
let scoreguest = document.getElementById("score2")
function add11() {
  counth += 1;
  scorehome.textContent = counth;
}
function add21() {
    counth += 2;
    scorehome.textContent = counth;
}
function add31() {
    counth += 3;
    scorehome.textContent = counth;
}
function add12() {
  countg += 1;
  scoreguest.textContent = countg;
}
function add22() {
    countg += 2;
    scoreguest.textContent = countg;
}
function add32() {
    countg += 3;
    scoreguest.textContent = countg;
}


