// ===== Bubble Nav =====
document.querySelectorAll('.nav-links').forEach(group=>{
  const pill=group.querySelector('.nav-pill');
  const links=group.querySelectorAll('.nav-link');
  const move=el=>{
    if(!pill||!el)return;
    const r=el.getBoundingClientRect();
    const g=group.getBoundingClientRect();
    pill.style.width=r.width+'px';
    pill.style.height=r.height+'px';
    pill.style.transform=`translateX(${r.left-g.left}px)`;
    pill.style.opacity=1;
  };
  const reset=()=>{
    const active=group.querySelector('.nav-link.active');
    if(active) move(active); else pill.style.opacity=0;
  };
  links.forEach(a=>{
    a.addEventListener('mouseenter',()=>move(a));
  });
  group.addEventListener('mouseleave',reset);
  window.addEventListener('load',reset);
  window.addEventListener('resize',reset);
});

// ===== Reveal on scroll =====
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}});
},{threshold:.12,rootMargin:'0px 0px -60px 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
