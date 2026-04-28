const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

sections.forEach(sec=>{
observer.observe(sec);
});


document.querySelectorAll(".nav-links a[href^='#']").forEach(link=>{
link.addEventListener("click", function(e){
e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth",
block:"start"
});
});
});


document.getElementById("scrollBtn").addEventListener("click", function(e){
e.preventDefault();
document.querySelector("#projects").scrollIntoView({
behavior:"smooth",
block:"start"
});
});