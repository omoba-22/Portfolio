// THEME TOGGLE
const themeBtn=document.getElementById('themeBtn');
themeBtn.addEventListener('click',()=>{document.body.classList.toggle('dark');themeBtn.textContent=document.body.classList.contains('dark')?'Light Mode':'Dark Mode'})

// SMOOTH SCROLL FOR ANCHORS
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const t=document.querySelector(a.getAttribute('href'));if(t) t.scrollIntoView({behavior:'smooth',block:'start'})}))

// SKILL BARS ANIMATION (intersection observer)
const bars = document.querySelectorAll('.bar');

const obs = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      bar.style.width = bar.dataset.value + "%";
      observer.unobserve(bar);
    }
  });
}, { threshold: 0.4 });

bars.forEach(bar => obs.observe(bar));


// SIMPLE CONTACT HANDLER (mailto)
function sendMail(e){e.preventDefault();const n=document.getElementById('nameInput').value.trim();const em=document.getElementById('emailInput').value.trim();const msg=document.getElementById('messageInput').value.trim();if(!n||!em||!msg){alert('Please fill all fields');return}const subject=encodeURIComponent('Portfolio contact from '+n);const body=encodeURIComponent(msg+'\n\n--\n'+n+'\n'+em);window.location.href=`mailto:olaoluogunwale@gmail.com?subject=${subject}&body=${body}`}

    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const menuBtn = document.getElementById("menuBtn");
    const sidebarLinks = document.querySelectorAll("#sidebar a");

    menuBtn.addEventListener("click", () => {
      sidebar.style.left = "0";
      overlay.style.display = "block";
    });

    overlay.addEventListener("click", () => {
      sidebar.style.left = "-260px";
      overlay.style.display = "none";
    });
    sidebarLinks.forEach(link => {
      link.addEventListener("click", () => {
        sidebar.style.left = "-260px";
        overlay.style.display = "none";
      });
    });