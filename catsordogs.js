let dogNum = 0;
let catNum = 0;
const p1cat = document.querySelector(".page1 #lazy");
const p1dog = document.querySelector(".page1 #productive");
const p2cat = document.querySelector(".page2 #fish");
const p2dog = document.querySelector(".page2 #chicken");
const p3cat = document.querySelector(".page3 #sleep");
const p3dog = document.querySelector(".page3 #exercise");
const p4cat = document.querySelector(".page4 #quiet");
const p4dog = document.querySelector(".page4 #loud");
const p5cat = document.querySelector(".page5 #night");
const p5dog = document.querySelector(".page5 #day");
const p6cat = document.querySelector(".page6 #climb");
const p6dog = document.querySelector(".page6 #run");
const p7cat = document.querySelector(".page7 #indoors");
const p7dog = document.querySelector(".page7 #outdoors");
const p8cat = document.querySelector(".page8 #agility");
const p8dog = document.querySelector(".page8 #strength");
const p9cat = document.querySelector(".page9 #cats");
const p9dog = document.querySelector(".page9 #dogs");
const start = document.querySelector("#start");
const results = document.querySelector(".results");

function next(pageNum) {
    let currentPage;
    let nextPage;
    let questionsAnswered;
    let result1;
    let result2;
    let result3;

    if (pageNum < 10) {
        currentPage = document.querySelector(`.page${pageNum}`);
        nextPage = document.querySelector(`.page${pageNum += 1}`);
        currentPage.style.display = "none";
        nextPage.style.display = "flex";

        questionsAnswered = document.querySelector(`.page${pageNum} .questions-answered span`);
        if (pageNum == 10) {
            questionsAnswered.textContent = `${pageNum -= 1} / 9`;
        } else {
            questionsAnswered.textContent = `${pageNum} / 9`;
        }
        
    }

    if (nextPage.classList.contains("results")) {
        result1 = results.querySelector("h2 span");
        result2 = results.querySelector(".cat-percentage span");
        result3 = results.querySelector(".dog-percentage span");

        if (catNum > dogNum) {
            result1.textContent = "cat";
        } else if (dogNum > catNum) {
            result1.textContent = "dog";
        }

        result2.textContent = `${((catNum / 9) * 100).toPrecision(3)}%`;
        result3.textContent = `${((dogNum / 9) * 100).toPrecision(3)}%`;
    }
}

start.onclick = function() {
    next(0);
}

p1cat.onclick = function() {
    catNum++;
    next(1);
}

p2cat.onclick = function() {
    catNum++;
    next(2);
}

p3cat.onclick = function() {
    catNum++;
    next(3);
}

p4cat.onclick = function() {
    catNum++;
    next(4);
}

p5cat.onclick = function() {
    catNum++;
    next(5);
}

p6cat.onclick = function() {
    catNum++;
    next(6);
}

p7cat.onclick = function() {
    catNum++;
    next(7);
}

p8cat.onclick = function() {
    catNum++;
    next(8);
}

p9cat.onclick = function() {
    catNum++;
    next(9);
}

p1dog.onclick = function() {
    dogNum++;
    next(1);
}

p2dog.onclick = function() {
    dogNum++;
    next(2);
}

p3dog.onclick = function() {
    dogNum++;
    next(3);
}

p4dog.onclick = function() {
    dogNum++;
    next(4);
}

p5dog.onclick = function() {
    dogNum++;
    next(5);
}

p6dog.onclick = function() {
    dogNum++;
    next(6);
}

p7dog.onclick = function() {
    dogNum++;
    next(7);
}

p8dog.onclick = function() {
    dogNum++;
    next(8);
}

p9dog.onclick = function() {
    dogNum++;
    next(9);
}
