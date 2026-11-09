
function show(id){const e=document.getElementById(id);if(e)e.classList.toggle('show')}
function hearts(){const e=document.createElement('span');e.className='float';e.textContent=['♡','♥','✧','💕'][Math.floor(Math.random()*4)];e.style.left=Math.random()*100+'vw';e.style.fontSize=(14+Math.random()*22)+'px';e.style.animationDuration=(7+Math.random()*6)+'s';document.body.appendChild(e);setTimeout(()=>e.remove(),14000)}
setInterval(hearts,1100);
