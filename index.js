// Login warner
const loginWarning = () => {
  alert("This website is a clone of the official Discord website (www.discord.com) and is created solely for educational and demonstration purposes. It is not affiliated with or endorsed by Discord or its parent company.")
}

// Scroll effect for the different sections of the page
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if(entry.isIntersecting) {
          entry.target.classList.add('show')
      } 
  });
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


// Sidebar menu
const show = () => {
  document.getElementById('sidebar').classList.toggle('active')
  document.body.classList.toggle('lock-scroll')
}


