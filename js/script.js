document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");

    const updateCount = (counter) => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText.replace("+", "");
        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment) + "+";
            setTimeout(() => updateCount(counter), 20);
        } else {
            counter.innerText = target + "+";
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                updateCount(counter);
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tab-btn");
    const smallTabContents = document.querySelectorAll(".tab-content-sm .tab-pane");
    const largeTabContents = document.querySelectorAll(".d-md-block .tab-pane");
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-bs-target").substring(1);

            if (mediaQuery.matches) {
                smallTabContents.forEach(content => {
                    content.classList.remove("show", "active");
                });
                document.getElementById(targetId).classList.add("show", "active");
            } else {
                largeTabContents.forEach(content => {
                    content.classList.remove("show", "active");
                });
                document.getElementById(targetId + "-lg").classList.add("show", "active");
            }

            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    let currentUrl = window.location.href;

    navLinks.forEach(link => {
      if (link.href === currentUrl) {
        link.classList.add("active");
      }
    });
  });

$(function(){
    const elements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add(entry.target.getAttribute('data-animate'));
                    entry.target.style.opacity = 1;
    
                    observer.unobserve(entry.target);
                }, delay);
            }
        });
    }, {
        threshold: 0.1
    });
    elements.forEach(el => observer.observe(el));    
});