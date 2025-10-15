 // Prevent bouncing effect on mobile when swiping fast
// document.addEventListener('touchmove', function(e){ e.preventDefault(); }, { passive:false });
const roles = ["Full-Stack Developer", "AI Researcher", "Tech Innovator"];
let i = 0;
let j = -1;
let currentRole = "";
let isDeleting = false;
const typingElement = document.getElementById("typing");
function type() {
    if (i < roles.length) {
    if (!isDeleting && j <= roles[i].length) {
        currentRole = roles[i].substring(0, j+1);
        j++;
        typingElement.innerHTML = `And I’m a <span class="highlight"> ${currentRole}</span> `;
    }

    if (isDeleting && j >= 0) {
        currentRole = roles[i].substring(0, j-1);
        j--;
        typingElement.innerHTML = `And I’m a <span class="highlight"> ${currentRole}</span>`;
    }

    if (!isDeleting && j === roles[i].length) {
        isDeleting = true;
        setTimeout(type, 3000); // wait before deleting
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
    }
    }
    setTimeout(type, isDeleting ? 80 : 120);
}
type();
  
function toggleDetails(element) {
    const extraPoints = element.parentElement.nextElementSibling;
    if (extraPoints.style.display === "block") {
        extraPoints.style.display = "none";
        element.textContent = "Read More";
    } else {
        extraPoints.style.display = "block";
        element.textContent = "Read Less";
    }
}

document.querySelectorAll('.nav-items a').forEach(link => {
    link.addEventListener('click', e => {
        if (!link.getAttribute('href') || link.getAttribute('href') === "#") return;
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        document.querySelector('.nav-items').classList.remove('open');
    });
});

const sections = document.querySelectorAll(".block");
const navLinks = document.querySelectorAll(".nav-items a");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + entry.target.id) {
                    link.classList.add("active");
                }
            });
        }
    });
}, {
    root: null,
    rootMargin: "-50% 0px -50% 0px", 
    threshold: 0
});

sections.forEach(section => {
    observer.observe(section);
});
(function(){
    emailjs.init("_Qo25k8H6cpMUW7_p"); // Replace with your EmailJS Public Key
})();
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    emailjs.sendForm("service_2jihm92", "template_s3ork4d", this)
    .then(function() {
        alert("✅ Message Sent Successfully!");
        document.getElementById("contact-form").reset(); // Clear form
    }, function(error) {
        alert("❌ Failed to Send: " + JSON.stringify(error));
    });
}); 

/* Initialize Tippy for tooltips */
tippy('.tech-badge', {
    theme: 'light',
    animation: 'shift-away',
    duration: [200, 180],
    placement: 'top',
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 30) {
    navbar.style.background = "rgba(13, 21, 38, 0.85)";
    navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
  } else {
    navbar.style.background = "rgba(13, 21, 38, 0.102)";
    navbar.style.boxShadow = "none";
  }
});
            
AOS.init({
  duration: 1000,     // animation duration (ms)
  once: true,         // animate only once
  offset: 100,        // trigger point
  easing: "ease-in-out"
});
window.addEventListener("DOMContentLoaded", () => {
    // Scroll to home on page refresh
     history.replaceState(null, null, "#");
    const homeSection = document.getElementById("home");
    if (homeSection) {
        // Using scrollIntoView ensures smooth jump to top of #home
        homeSection.scrollIntoView({ behavior: "auto" });
    }
});
