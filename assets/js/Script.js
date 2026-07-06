window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("loader-hidden");
                setTimeout(() => {
        preloader.style.display = "none";
    }, 1000);
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; 
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();