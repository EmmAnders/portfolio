
gsap.from("header", { duration: 1, opacity: 0, delay: 0.8 });
gsap.from(".intro", { duration: 1, opacity: 0, delay: 0.9 });
gsap.from(".selected-projects", { duration: 1, opacity: 0, delay: 1 });
gsap.from(".projects", { duration: 1, opacity: 0, delay: 1.1 });


// Cursor
let mouse = document.querySelector(".cursor");

function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}

window.addEventListener("mousemove", cursor);
