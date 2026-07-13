document.querySelectorAll('a[href^="#"]').forEach(a=>a.onclick=e=>{
e.preventDefault();
document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
});
const hero=document.querySelector('.hero');
document.addEventListener('mousemove',e=>{
hero.style.transform=`translate(${(e.clientX-window.innerWidth/2)/80}px,${(e.clientY-window.innerHeight/2)/80}px)`;
});
