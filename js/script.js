(() => {
 const menu=document.querySelector('.menu-button'),nav=document.querySelector('.site-header nav');
 menu?.addEventListener('click',()=>menu.setAttribute('aria-expanded',String(nav.classList.toggle('open'))));
 nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
 document.querySelectorAll('#experiencia .filters button').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('#experiencia .filters button').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});
 document.querySelectorAll('#experiencia .job').forEach(job=>job.hidden=button.dataset.filter!=='todos'&&job.dataset.category!==button.dataset.filter);
 }));
 const tabs=[...document.querySelectorAll('[role=tab]')];
 function select(tab){tabs.forEach(t=>{const yes=t===tab;t.setAttribute('aria-selected',String(yes));t.tabIndex=yes?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!yes})}
 tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>select(tab));tab.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%tabs.length;if(e.key==='ArrowLeft')n=(i+tabs.length-1)%tabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=tabs.length-1;if(n!==undefined){e.preventDefault();select(tabs[n]);tabs[n].focus()}})});
 const levels=['Nivel por definir','Básico','Intermedio','Avanzado'];
 window.herramientas?.forEach(tool=>{const row=document.createElement('div');row.className='language';const line=document.createElement('span');line.append(document.createTextNode(tool.nombre));const b=document.createElement('b');b.textContent=levels[tool.nivel||0];line.append(b);row.append(line);const bar=document.createElement('i');bar.setAttribute('aria-hidden','true');if(tool.nivel){const fill=document.createElement('em');fill.style.width=(tool.nivel/3*100)+'%';bar.append(fill)}else bar.className='pending';row.append(bar);document.querySelector('#tool-levels').append(row)});
 const list=document.querySelector('#course-list');if(!list)return;
 const all=[...certificates,...window.cursosAdicionales];let page=0;const size=4;const search=document.querySelector('#course-search');
 const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 function render(){const found=all.filter(c=>norm(c.title+' '+c.issuer).includes(norm(search.value)));const pages=Math.max(1,Math.ceil(found.length/size));page=Math.min(page,pages-1);list.replaceChildren();found.slice(page*size,(page+1)*size).forEach(c=>{const card=document.createElement('div');card.className='course';const wrap=document.createElement('div');const h=document.createElement('h3');h.textContent=c.title;const p=document.createElement('p');p.textContent=c.issuer;wrap.append(h,p);card.append(document.createElement('i'),wrap);list.append(card)});document.querySelector('#course-count').textContent=found.length?`${page+1} / ${pages} · ${found.length} cursos`:'Sin resultados';document.querySelector('#course-prev').disabled=page===0;document.querySelector('#course-next').disabled=page===pages-1}
 search.addEventListener('input',()=>{page=0;render()});document.querySelector('#course-prev').onclick=()=>{page--;render()};document.querySelector('#course-next').onclick=()=>{page++;render()};render();
})();
