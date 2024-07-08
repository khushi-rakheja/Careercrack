let eventsDiv1 = document.querySelector('.event1');

function slide1() {
    eventsDiv1.scrollLeft += 2; // Adjust speed by changing this value
    if (eventsDiv1.scrollLeft >= (eventsDiv1.scrollWidth - eventsDiv1.clientWidth)) {
        eventsDiv1.scrollLeft = 0; // Reset to start position
    }
}

let slideInterval1 = setInterval(slide1, 50); // Adjust interval for smoother/faster scrolling

let eventsDiv2 = document.querySelector('.event2');

function slide2() {
    eventsDiv2.scrollLeft += 2; // Adjust speed by changing this value
    if (eventsDiv2.scrollLeft >= (eventsDiv2.scrollWidth - eventsDiv2.clientWidth)) {
        eventsDiv2.scrollLeft = 0; // Reset to start position
    }
}

let slideInterval2 = setInterval(slide2, 50); // Adjust interval for smoother/faster scrolling

let eventsDiv3 = document.querySelector('.event3');

function slide3() {
    eventsDiv3.scrollLeft += 2; // Adjust speed by changing this value
    if (eventsDiv3.scrollLeft >= (eventsDiv3.scrollWidth - eventsDiv3.clientWidth)) {
        eventsDiv3.scrollLeft = 0; // Reset to start position
    }
}

let slideInterval3 = setInterval(slide3, 50); // Adjust interval for smoother/faster scrolling

let eventsDiv4 = document.querySelector('.event4');

function slide4() {
    eventsDiv4.scrollLeft += 2; // Adjust speed by changing this value
    if (eventsDiv4.scrollLeft >= (eventsDiv4.scrollWidth - eventsDiv4.clientWidth)) {
        eventsDiv4.scrollLeft = 0; // Reset to start position
    }
}

let slideInterval4= setInterval(slide4, 50); // Adjust interval for smoother/faster scrolling

let eventsDiv5= document.querySelector('.event5');

function slide5() {
    eventsDiv5.scrollLeft += 2; // Adjust speed by changing this value
    if (eventsDiv5.scrollLeft >= (eventsDiv5.scrollWidth - eventsDiv5.clientWidth)) {
        eventsDiv5.scrollLeft = 0; // Reset to start position
    }
}

let slideInterval5= setInterval(slide5, 50); // Adjust interval for smoother/faster scrolling
