const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

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
    const floatingMain = document.getElementById('floatingMain');
    const floatingButtons = document.querySelectorAll('.floating-button');
    const backToTop = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');
    
    if (floatingMain) {
        // Toggle floating buttons
        floatingMain.addEventListener('click', function() {
            this.classList.toggle('active');
            
            floatingButtons.forEach(button => {
                button.classList.toggle('show');
            });
        });
        
        // Back to top functionality
        window.addEventListener('scroll', function() {
            if (backToTop) {
                if (window.pageYOffset > 300) {
                    backToTop.classList.add('show');
                } else {
                    backToTop.classList.remove('show');
                }
            }
        });
        
        if (backToTop) {
            backToTop.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
        
        // Button actions
        if (whatsappButton) {
            whatsappButton.addEventListener('click', function() {
                window.open('https://wa.me/201206000988', '_blank');
            });
        }
        
        // Simulate other button actions
        const callButton = document.querySelector('.call-button');
        if (callButton) {
            callButton.addEventListener('click', function() {
                alert('Calling: +201206000988');
            });
        }
        
        if (floatingButtons.length >= 3) {
            floatingButtons[2].addEventListener('click', function() {
                alert('Redirecting to appointment booking page...');
            });
        }
        
        if (floatingButtons.length >= 4) {
            floatingButtons[3].addEventListener('click', function() {
                alert('Emergency contact: +201206000988 (24/7)');
            });
        }
        
        if (floatingButtons.length >= 5) {
            floatingButtons[4].addEventListener('click', function() {
                alert('Opening location in maps...');
            });
        }
    }

    // Scroll animations
    const animatedElements = document.querySelectorAll('.animated');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add staggered animation delays based on element type
                let delay = 0;
                
                if (entry.target.classList.contains('service-card')) {
                    const cards = document.querySelectorAll('.service-card');
                    const index = Array.from(cards).indexOf(entry.target);
                    delay = index * 0.1;
                } else if (entry.target.classList.contains('step-card')) {
                    const cards = document.querySelectorAll('.step-card');
                    const index = Array.from(cards).indexOf(entry.target);
                    delay = index * 0.2;
                } else if (entry.target.classList.contains('feature')) {
                    const features = document.querySelectorAll('.feature');
                    const index = Array.from(features).indexOf(entry.target);
                    delay = index * 0.1;
                } else if (entry.target.classList.contains('stat-item')) {
                    const stats = document.querySelectorAll('.stat-item');
                    const index = Array.from(stats).indexOf(entry.target);
                    delay = index * 0.2;
                } else if (entry.target.classList.contains('blog-card')) {
                    const cards = document.querySelectorAll('.blog-card');
                    const index = Array.from(cards).indexOf(entry.target);
                    delay = index * 0.1;
                } else if (entry.target.classList.contains('featured-post')) {
                    delay = 0.2;
                } else if (entry.target.classList.contains('gallery-item')) {
                    const items = document.querySelectorAll('.gallery-item');
                    const index = Array.from(items).indexOf(entry.target);
                    delay = index * 0.1;
                } else if (entry.target.classList.contains('comparison-item')) {
                    const items = document.querySelectorAll('.comparison-item');
                    const index = Array.from(items).indexOf(entry.target);
                    delay = index * 0.2;
                } else if (entry.target.classList.contains('video-item')) {
                    const items = document.querySelectorAll('.video-item');
                    const index = Array.from(items).indexOf(entry.target);
                    delay = index * 0.1;
                } else if (entry.target.classList.contains('qualification-card')) {
                    const cards = document.querySelectorAll('.qualification-card');
                    const index = Array.from(cards).indexOf(entry.target);
                    delay = index * 0.1;
                } else if (entry.target.classList.contains('value-card')) {
                    const cards = document.querySelectorAll('.value-card');
                    const index = Array.from(cards).indexOf(entry.target);
                    delay = index * 0.2;
                } else if (entry.target.classList.contains('about-feature')) {
                    const features = document.querySelectorAll('.about-feature');
                    const index = Array.from(features).indexOf(entry.target);
                    delay = index * 0.1;
                } else if (entry.target.classList.contains('team-member')) {
                    const members = document.querySelectorAll('.team-member');
                    const index = Array.from(members).indexOf(entry.target);
                    delay = index * 0.1;
                }
                
                entry.target.style.animationDelay = `${delay}s`;
                entry.target.classList.add('animate-on-scroll');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
  Fancybox.bind("[data-fancybox]", {
    Thumbs: false,
    Toolbar: {
      display: ["close"],
    },
    dragToClose: true,
    animated: true,
  });