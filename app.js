import { projects } from './data.js';

// Botanical marks drawn for this project. All share a light, organic stroke.
const drawings = {
  arrow: '<path d="M5 19 19 5M5 5h14v14"/>',
  'arrow-right': '<path d="M4 12h16m-6-6 6 6-6 6"/>',
  back: '<path d="M20 12H4m6-6-6 6 6 6"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  ginkgo: '<path d="M24 42c0-10-4-18-9-27M24 42c0-12 3-22 8-29M24 42c-5-10-10-17-17-22M24 42c5-10 11-16 18-21M24 42V19M24 40C9 35 3 29 4 22c1-5 4-6 7-4-2-6 2-12 7-10 3-9 9-9 12 0 5-3 11 0 10 7 5-2 8 2 6 7-3 9-11 14-22 18Z"/><path d="m24 40-2 7"/>',
  seed: '<path d="M24 44V23M24 34C12 33 7 26 10 18c8-1 15 4 14 13M24 24c-1-10 5-17 14-17 3 9-3 17-14 17M24 43c-7-3-12-2-17 0m17 0c7-3 12-2 17 0"/><path d="m13 21 10 9m11-19-10 12"/>',
  laurel: '<path d="M22 44C7 37 4 20 13 6m13 38C42 36 44 20 35 6"/><path d="M13 32c-7 1-10-2-10-7 6 0 10 2 10 7Zm-3-12c-6-1-8-5-6-9 5 2 7 5 6 9Zm3-9c-2-5 0-8 5-9 0 5-1 8-5 9Zm22 21c7 1 10-2 10-7-6 0-10 2-10 7Zm3-12c6-1 8-5 6-9-5 2-7 5-6 9Zm-3-9c2-5 0-8-5-9 0 5 1 8 5 9Z"/><path d="m19 42 10 4m0-4-10 4"/>',
  bloom: '<path d="M24 38v9M24 24c-9-3-11-9-7-14 3-4 6-2 7 3 2-7 7-9 10-4 3 5-1 11-10 15Zm0 0c9 0 15 5 13 11-2 5-7 3-9-1-1 7-6 10-10 6-4-4-1-12 6-16Zm0 0c-5 8-12 10-16 5-4-4-1-8 5-8-7-4-8-9-3-11 6-2 12 4 14 14Z"/><circle cx="24" cy="24" r="3"/>',
  branch: '<path d="M25 68C26 46 32 23 44 4M27 54C10 49 6 38 12 29c13 3 18 11 15 25Zm6-19C18 28 19 17 25 11c12 5 15 13 8 24Zm-4 13c17 1 29-8 28-20-14-1-23 6-28 20Zm9-27c14-1 21-8 19-18-11-1-18 6-19 18Z"/><path d="m14 33 12 19m1-37 6 18m20-1L30 46M53 7 39 20M25 67c-7-5-14-6-21-2m21 2c8-5 17-6 25-2"/>',
  water: '<path d="M24 4C20 13 9 22 9 31a15 15 0 0 0 30 0C39 22 29 13 24 4Z"/><path d="M16 32c0 6 4 9 8 9M18 22c4-4 9-4 13 0M24 31c6-7 13-7 20-3M24 31c-4-7-10-10-16-8"/>',
  habitat: '<path d="M24 9c-3 6-3 20 0 30M23 20C10 3 1 8 6 22c3 9 10 12 17 7M25 20C38 3 47 8 42 22c-3 9-10 12-17 7M23 29C10 25 9 36 15 40c5 3 9-2 9-6m1-5c13-4 14 7 8 11-5 3-9-2-9-6"/><path d="m20 5 4 4 4-4"/>',
  curve: '<path d="M4 35c5-10 15-12 20-5s14 7 20-3M4 44c5-10 15-12 20-5s14 7 20-3M12 28V14m0 6C3 20 2 12 5 8c6 2 9 7 7 12Zm0-6c0-8 5-12 11-10 1 6-4 10-11 10"/><circle cx="35" cy="12" r="6"/>',
  garden: '<path d="M5 43h38M9 43V25h30v18M5 25l19-14 19 14M24 11V5M24 43V30M24 36c-7 0-11-4-10-9 6 0 10 3 10 9Zm0-4c0-7 4-11 10-10 0 6-4 10-10 10"/><path d="M5 5h7M8 2v7"/>',
  paths: '<path d="M5 43c7-12 21-8 24-18S19 10 24 4M13 44c5-9 18-7 22-17S27 9 32 4M4 25h9m-4-4v8M40 44V32m0 6c-6-1-9-5-7-9 5 0 8 4 7 9Zm0-6c0-6 3-9 7-8 0 5-3 8-7 8"/><circle cx="9" cy="11" r="5"/>',
  sculpture: '<path d="M7 44h34M14 44v-7h20v7M17 37c-6-4-6-11 1-14 10-4 17 0 15-8-1-4-6-3-8-1M17 24c-2-9 5-15 14-15M24 9V3M31 28c11-3 16-10 13-17-7 2-12 8-13 17"/><path d="m33 25 7-9"/>',
  terrace: '<path d="M5 44h38M9 44V27h30v17M6 27l18-7 18 7M15 33v11m9-11v11m9-11v11M24 20V9m0 6c-8-1-11-6-8-11 5 1 9 5 8 11Zm0-3c1-6 5-9 11-7 0 5-4 8-11 7"/>',
  institution: '<path d="M6 44h36M9 44V20h30v24M6 20h36L24 6 6 20Zm11 7v10m7-10v10m7-10v10M20 44v-7h8v7"/><circle cx="24" cy="14" r="1"/>',
  public: '<path d="M24 44V25M24 29C8 31 4 18 11 12c0-9 14-13 19-3 11-4 18 10 10 16-4 4-10 5-16 4ZM24 33l-8-11m8 3 8-8M5 44h38M6 35h7m-3-3v6"/>',
  sun: '<circle cx="24" cy="24" r="10"/><path d="M24 3v6m0 30v6M3 24h6m30 0h6M9 9l4 4m22 22 4 4M9 39l4-4m22-22 4-4"/>',
  renew: '<path d="M39 17C34 5 17 4 9 14M9 14V5m0 9h9M9 31c5 12 22 13 30 3m0 0v9m0-9h-9M24 33V19m0 7c-7 0-11-5-9-10 6 0 10 4 9 10Zm0-5c1-6 5-9 10-8 0 5-4 8-10 8"/>',
  chat: '<path d="M40 27c3-4 4-8 2-12C38 4 14 3 7 13c-5 7-1 16 6 20l-1 9 11-6c7 1 13-2 17-6"/><path d="M16 22h16M16 16h10"/>'
};
const organic = new Set(['ginkgo','seed','laurel','bloom','water','habitat','curve','garden','paths','sculpture','terrace','institution','public','sun','renew','chat']);
function icon(name) {
  const viewBox = name === 'branch' ? '0 0 64 72' : organic.has(name) ? '0 0 48 48' : '0 0 24 24';
  return '<svg viewBox="'+viewBox+'" fill="none" stroke="currentColor" stroke-width="'+(organic.has(name)||name==='branch'?'1.35':'1.4')+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(drawings[name]||drawings.seed)+'</svg>';
}
function fillIcons(root=document) { root.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=icon(el.dataset.icon);}); }
fillIcons();
function labelTextLinks(root=document) {
  root.querySelectorAll('.text-link').forEach(link=>{
    Array.from(link.childNodes).forEach(node=>{
      if(node.nodeType===Node.TEXT_NODE&&node.textContent.trim()) {
        const label=document.createElement('span');
        label.className='link-label';label.textContent=node.textContent.trim();node.replaceWith(label);
      } else if(node.nodeType===Node.ELEMENT_NODE&&node.getAttribute('aria-hidden')==='true') {
        node.classList.add('link-icon');
      }
    });
  });
}
labelTextLinks();
document.getElementById('year').textContent = new Date().getFullYear();
const escapeHTML = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const home=document.getElementById('home-page');
const portfolio=document.getElementById('portfolio-page');
const detail=document.getElementById('project-page');
const notFound=document.getElementById('not-found-page');
const grid=document.getElementById('project-grid');
const filters=document.getElementById('project-filters');
let selectedCategory='Todos';
const categoryNames=['Todos','Residencial','Espacios públicos','Corporativo','Arte y paisajismo'];
function projectCard(p,index,featured=false) {
  const a=document.createElement('a');
  a.className='project-card';
  a.href='/proyectos/'+p.slug;
  const state=['Anteproyecto','Propuesta','Propuesta conceptual','Masterplan','Diseño'].includes(p.status);
  a.innerHTML='<span class="project-image-wrap"><img src="'+p.thumbnail+'" srcset="'+p.thumbnail+' 640w, '+p.image+' 1440w" sizes="'+(featured?'(max-width:600px) 90vw, 45vw':'(max-width:600px) 90vw, (max-width:850px) 45vw, 30vw')+'" alt="'+escapeHTML(p.title)+' · '+escapeHTML(p.place)+'" width="640" height="480" loading="lazy"><span class="project-image-hover">'+icon('arrow')+'</span></span><div class="project-caption"><div><h3>'+escapeHTML(p.title)+'</h3><p>'+escapeHTML(p.category)+' · '+escapeHTML(p.place)+'</p>'+(state?'<span class="project-status">'+escapeHTML(p.status)+'</span>':'')+'</div><span class="project-index">'+String(index+1).padStart(2,'0')+'</span></div>';
  return a;
}
['senderos-de-luz','el-jardin-de-los-sentidos'].forEach((slug,i)=>document.getElementById('featured-projects').append(projectCard(projects.find(p=>p.slug===slug),i,true)));
function renderPortfolio() {
  const list=projects.filter(p=>selectedCategory==='Todos'||p.category===selectedCategory);
  grid.replaceChildren(...list.map((p,i)=>projectCard(p,i)));
  document.getElementById('project-count').textContent=list.length+' proyectos'+(selectedCategory==='Todos'?' del estudio':' · '+selectedCategory.toLowerCase());
  filters.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.category===selectedCategory)));
}
categoryNames.forEach(name=>{
  const button=document.createElement('button');button.type='button';button.className='filter';button.dataset.category=name;button.setAttribute('aria-pressed',String(name===selectedCategory));
  const count=name==='Todos'?projects.length:projects.filter(p=>p.category===name).length;
  button.innerHTML=escapeHTML(name)+'<sup>'+count+'</sup>';
  button.setAttribute('aria-label',name+' · '+count+' proyectos');
  button.addEventListener('click',()=>{selectedCategory=name;renderPortfolio();});
  filters.append(button);
});
renderPortfolio();
function renderProject(p) {
  const photos=p.galleryItems||p.gallery.map(src=>({src,full:src,thumb:src,alt:p.title,width:1440,height:1080}));
  const mediaButton=(item,i,cover=false)=>'<button type="button" class="gallery-image'+(cover?' gallery-cover':'')+(item.width/item.height>1.8?' gallery-wide':'')+'" data-photo="'+i+'" data-project="'+p.slug+'" aria-label="Ampliar fotografía '+(i+1)+' de '+photos.length+' de '+escapeHTML(p.title)+'"><img src="'+item.src+'" alt="'+escapeHTML(item.alt)+'" width="'+item.width+'" height="'+item.height+'" '+(cover?'fetchpriority="high"':'loading="lazy"')+'><span class="gallery-image-label">'+(cover?'Ver fotografías · '+photos.length:'Ampliar fotografía')+' <span aria-hidden="true">'+icon('arrow')+'</span></span></button>';
  const previous=projects[(projects.indexOf(p)-1+projects.length)%projects.length];
  const next=projects[(projects.indexOf(p)+1)%projects.length];
  detail.innerHTML='<article class="section-width"><div class="detail-top"><a href="/proyectos" class="detail-back">'+icon('back')+'<span>Todos los proyectos</span></a></div><header class="detail-heading"><div><p class="eyebrow">'+escapeHTML(p.category)+'</p><h1>'+escapeHTML(p.title)+'</h1></div><p class="detail-description">'+escapeHTML(p.description)+'</p></header><div class="detail-facts"><span>'+escapeHTML(p.place)+'</span>'+(p.status?'<span class="status">'+escapeHTML(p.status)+'</span>':'')+'<span>'+photos.length+' fotografías</span></div><figure class="detail-cover">'+mediaButton(photos[0],0,true)+'</figure><section class="project-story" aria-label="Información del proyecto"><aside class="project-story-meta"><p class="eyebrow">El proyecto</p><div class="original-metadata">'+(p.metadataHtml||'<p>'+escapeHTML(p.place)+'</p>')+'</div><p class="project-author">Paisajismo<br><strong>Rosa Ceño · Ginkgo Landscape</strong></p>'+(p.supplements?.length?'<div class="project-supplements">'+p.supplements.map(m=>'<img src="'+m.src+'" alt="'+escapeHTML(m.alt)+'" width="'+m.width+'" height="'+m.height+'" loading="lazy">').join('')+'</div>':'')+'</aside><div class="project-narrative">'+(p.fullContentHtml||'<p>'+escapeHTML(p.description)+'</p>')+'</div></section>'+(photos.length>1?'<section class="project-photo-section" aria-labelledby="photos-title"><div class="gallery-section-heading"><h2 id="photos-title">El proyecto, <em>en imágenes.</em></h2><span>'+photos.length+' fotografías</span></div><div class="detail-gallery">'+photos.slice(1).map((m,i)=>mediaButton(m,i+1)).join('')+'</div></section>':'')+'<nav class="project-pagination" aria-label="Más proyectos"><a href="/proyectos/'+previous.slug+'"><span>Proyecto anterior</span><strong>'+escapeHTML(previous.title)+'</strong></a><a href="/proyectos/'+next.slug+'"><span>Siguiente proyecto</span><strong>'+escapeHTML(next.title)+'</strong></a></nav><div class="detail-close"><div><h2>Hablemos de<br>tu próximo <em>jardín.</em></h2><button class="button primary" data-open-form>Cuéntame tu proyecto</button></div></div></article>';
  labelTextLinks(detail);
}
const menuToggle=document.querySelector('.menu-toggle');
const mobileMenu=document.getElementById('mobile-menu');
function closeMenu() { mobileMenu.hidden=true;menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Abrir menú'); }
menuToggle.addEventListener('click',()=>{
  const open=mobileMenu.hidden;mobileMenu.hidden=!open;menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileMenu.hidden){closeMenu();menuToggle.focus();}});
const mobileMedia=matchMedia('(min-width:851px)');
mobileMedia.addEventListener('change',e=>{if(e.matches)closeMenu();});
function route(focus=false) {
  let path=decodeURI(location.pathname).replace(/\/+$/,'')||'/';
  home.hidden=path!=='/';
  portfolio.hidden=path!=='/proyectos';
  detail.hidden=true;notFound.hidden=true;
  let title='Rosa Ceño · Paisajismo para vivirlo';
  if(path.startsWith('/proyectos/')){
    const p=projects.find(p=>'/proyectos/'+p.slug===path);
    if(p){renderProject(p);detail.hidden=false;title=p.title+' · Rosa Ceño';}
    else notFound.hidden=false;
  } else if(path==='/proyectos')title='Proyectos · Rosa Ceño · Paisajismo';
  else if(path!=='/')notFound.hidden=false;
  document.title=title;
  document.querySelectorAll('[data-nav="portfolio"]').forEach(el=>{if(path.startsWith('/proyectos'))el.setAttribute('aria-current','page');else el.removeAttribute('aria-current');});
  closeMenu();
  const anchor=path==='/'?document.getElementById(location.hash.slice(1)):null;
  if(anchor) {
    requestAnimationFrame(()=>anchor.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'}));
  } else if(focus) {
    window.scrollTo({top:0,behavior:'instant'});
    document.getElementById('main').focus({preventScroll:true});
  }
}
document.addEventListener('click',e=>{
  const a=e.target.closest('a[href]');
  if(!a||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.target||a.hasAttribute('download'))return;
  const url=new URL(a.href,location.href);
  if(url.origin!==location.origin||!['http:','https:'].includes(url.protocol)||a.classList.contains('skip-link'))return;
  e.preventDefault();history.pushState({},'',url.pathname+url.hash);route(true);
});
window.addEventListener('popstate',()=>route(true));
route();

const galleryDialog=document.getElementById('gallery-dialog');
const galleryPhoto=document.getElementById('gallery-photo');
const galleryThumbs=document.getElementById('gallery-thumbnails');
let galleryProject=null,galleryIndex=0,galleryTrigger=null;
function showPhoto(index) {
  const items=galleryProject.galleryItems;
  galleryIndex=(index+items.length)%items.length;
  const item=items[galleryIndex];
  galleryPhoto.src=item.full;galleryPhoto.alt=item.alt;
  document.getElementById('gallery-photo-caption').textContent=item.alt;
  document.getElementById('gallery-photo-count').textContent=(galleryIndex+1)+' / '+items.length;
  galleryThumbs.querySelectorAll('button').forEach((button,i)=>{
    button.setAttribute('aria-pressed',String(i===galleryIndex));
    if(i===galleryIndex)button.scrollIntoView({block:'nearest',inline:'nearest'});
  });
}
function openGallery(project,index,trigger) {
  galleryProject=project;galleryTrigger=trigger;
  document.getElementById('gallery-project-title').textContent=project.title;
  galleryDialog.setAttribute('aria-label','Fotografías de '+project.title);
  galleryThumbs.replaceChildren();
  project.galleryItems.forEach((item,i)=>{
    const button=document.createElement('button');button.type='button';button.className='gallery-thumbnail';
    button.setAttribute('aria-label','Ver fotografía '+(i+1)+' de '+project.title);
    const img=document.createElement('img');img.src=item.thumb;img.alt='';img.loading='lazy';button.append(img);
    button.addEventListener('click',()=>showPhoto(i));galleryThumbs.append(button);
  });
  document.getElementById('gallery-prev').hidden=project.galleryItems.length<2;
  document.getElementById('gallery-next').hidden=project.galleryItems.length<2;
  document.body.classList.add('dialog-open');galleryDialog.showModal();showPhoto(index);
}
document.addEventListener('click',e=>{
  const button=e.target.closest('[data-photo]');
  if(!button)return;
  const project=projects.find(p=>p.slug===button.dataset.project);
  if(project?.galleryItems?.length)openGallery(project,Number(button.dataset.photo),button);
});
document.getElementById('close-gallery').addEventListener('click',()=>galleryDialog.close());
document.getElementById('gallery-prev').addEventListener('click',()=>showPhoto(galleryIndex-1));
document.getElementById('gallery-next').addEventListener('click',()=>showPhoto(galleryIndex+1));
galleryDialog.addEventListener('keydown',e=>{
  if(e.key==='ArrowLeft'){e.preventDefault();showPhoto(galleryIndex-1);}
  if(e.key==='ArrowRight'){e.preventDefault();showPhoto(galleryIndex+1);}
});
let photoTouch=null;
const galleryStage=galleryDialog.querySelector('.gallery-viewer-stage');
galleryStage.addEventListener('touchstart',e=>{
  if(e.touches.length===1&&!e.target.closest('button'))photoTouch={x:e.touches[0].clientX,y:e.touches[0].clientY};
  else photoTouch=null;
},{passive:true});
galleryStage.addEventListener('touchend',e=>{
  if(!photoTouch||!e.changedTouches.length)return;
  const dx=e.changedTouches[0].clientX-photoTouch.x,dy=e.changedTouches[0].clientY-photoTouch.y;
  if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.3)showPhoto(galleryIndex+(dx<0?1:-1));
  photoTouch=null;
},{passive:true});
galleryDialog.addEventListener('close',()=>{
  photoTouch=null;
  if(!document.querySelector('dialog[open]'))document.body.classList.remove('dialog-open');
  if(galleryTrigger?.isConnected)galleryTrigger.focus({preventScroll:true});
});

// Inquiry wizard: browser-local until the visitor chooses to open their email app.
const dialog=document.getElementById('project-dialog');
const form=document.getElementById('inquiry-form');
const ready=document.getElementById('inquiry-ready');
const steps=Array.from(form.querySelectorAll('[data-step]'));
let step=0,lastTrigger=null,inquiryText='';
const spaces=[
  ['Jardín privado','garden'],['Terraza o patio','terrace'],['Comunidad residencial','paths'],
  ['Empresa o institución','institution'],['Espacio público','public'],['Arte y paisajismo','sculpture']
];
const needs=[
  ['Diseñar desde cero','seed'],['Renovar el espacio','renew'],['Menos agua y mantenimiento','water'],
  ['Sombra y espacios para vivir','sun'],['Más vida y biodiversidad','habitat'],['Necesito orientación','chat']
];
function makeChoices(container,items,name,type){
  const target=document.getElementById(container);
  for(const [value,draw] of items) {
    const label=document.createElement('label');label.className='choice';
    label.innerHTML='<input type="'+type+'" name="'+name+'" value="'+escapeHTML(value)+'"><span class="choice-icon" aria-hidden="true">'+icon(draw)+'</span><span>'+escapeHTML(value)+'</span>';
    target.append(label);
  }
}
makeChoices('space-options',spaces,'space','radio');
makeChoices('need-options',needs,'needs','checkbox');
const value=name=>(form.elements.namedItem(name)?.value||'').trim();
const chosenNeeds=()=>Array.from(form.querySelectorAll('input[name="needs"]:checked')).map(i=>i.value);
function reviewData(){
  return [
    ['Espacio',value('space')],
    ['Ubicación',[value('location'),value('country')].filter(Boolean).join(', ')],
    ['Superficie',value('area')?Number(value('area')).toLocaleString('es-ES')+' m²':'Por definir'],
    ['Objetivos',chosenNeeds().join(', ')],
    ['Notas',value('description')||'Sin notas adicionales'],
    ['Plazo',value('timing')],
    ['Inversión',value('budget')?Number(value('budget')).toLocaleString('es-ES')+' € · diseño y ejecución':'Por definir']
  ];
}
function renderReview(){
  const dl=document.getElementById('inquiry-review');dl.replaceChildren();
  reviewData().forEach(([key,val])=>{const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=key;dd.textContent=val;dl.append(dt,dd);});
}
function showStep(focus=false){
  steps.forEach((el,i)=>{el.hidden=i!==step;const h=el.querySelector('h2');h.id=i===step?'form-title':'form-title-'+i;});
  document.getElementById('step-label').textContent=String(step+1).padStart(2,'0')+' / 05 · '+['Tu espacio','El lugar','Tu idea','El momento','Conocernos'][step];
  const progress=form.querySelector('.wizard-progress');progress.setAttribute('aria-valuenow',step+1);progress.setAttribute('aria-valuetext','Paso '+(step+1)+' de 5');
  progress.querySelectorAll('span').forEach((el,i)=>el.classList.toggle('done',i<=step));
  document.getElementById('form-back').hidden=step===0;
  document.getElementById('form-smallprint').hidden=step!==0;
  document.getElementById('form-next').innerHTML=(step===4?'Preparar mi consulta':'Continuar')+' '+icon('arrow-right');
  document.getElementById('form-error').hidden=true;
  form.querySelectorAll('[aria-invalid]').forEach(el=>el.removeAttribute('aria-invalid'));
  if(step===4)renderReview();
  const scroll=form.querySelector('.wizard-scroll');scroll.scrollTop=0;
  if(focus)steps[step].querySelector('h2').focus({preventScroll:true});
}
function openForm(trigger){
  closeMenu();lastTrigger=trigger;
  document.body.classList.add('dialog-open');
  dialog.showModal();
  if(!form.hidden)requestAnimationFrame(()=>steps[step].querySelector('h2').focus({preventScroll:true}));
}
document.addEventListener('click',e=>{
  const button=e.target.closest('[data-open-form]');
  if(button){e.preventDefault();openForm(button);}
});
document.getElementById('close-form').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');if(lastTrigger?.isConnected)lastTrigger.focus({preventScroll:true});});
dialog.addEventListener('click',e=>{if(e.target===dialog){const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)dialog.close();}});
function fail(message,field){
  const error=document.getElementById('form-error');error.textContent=message;error.hidden=false;
  if(field){field.setAttribute('aria-invalid','true');field.focus();}else error.scrollIntoView({block:'nearest'});
  return false;
}
function validate(){
  if(step===0&&!value('space'))return fail('Elige el espacio que tienes en mente para continuar.',form.querySelector('[name="space"]'));
  if(step===1){
    if(!value('location'))return fail('Indica la localidad y provincia del espacio.',form.elements.location);
    if(!value('country'))return fail('Indica el país donde está el espacio.',form.elements.country);
    if(value('area')&&!form.elements.area.checkValidity())return fail('La superficie debe ser un número mayor que cero.',form.elements.area);
  }
  if(step===2&&!chosenNeeds().length)return fail('Elige al menos una opción. Si aún no lo tienes claro, selecciona «Necesito orientación».',form.querySelector('[name="needs"]'));
  if(step===3){
    if(!value('timing'))return fail('Elige un momento aproximado para empezar.',form.elements.timing);
    if(value('budget')&&!form.elements.budget.checkValidity())return fail('Escribe un importe válido o deja la inversión por definir.',form.elements.budget);
  }
  if(step===4){
    if(!value('name'))return fail('Escribe tu nombre para que Rosa sepa cómo dirigirse a ti.',form.elements.name);
    if(!value('email')||!form.elements.email.checkValidity())return fail('Revisa el email; debe tener un formato válido.',form.elements.email);
    if(!form.elements.privacy.checked)return fail('Lee la política de privacidad y marca la casilla para continuar.',form.elements.privacy);
  }
  return true;
}
function prepareInquiry(){
  inquiryText='Hola Rosa,\n\nMe gustaría hablar contigo sobre un proyecto de paisajismo.\n\n'+reviewData().map(([key,val])=>key+': '+val).join('\n')+'\n\nMis datos de contacto:\nNombre: '+value('name')+'\nEmail: '+value('email')+'\nTeléfono: '+(value('phone')||'No facilitado')+'\n\nHe leído la política de privacidad para gestionar esta consulta.\n\nGracias,\n'+value('name');
  const subject='Proyecto de paisajismo · '+value('space')+' · '+value('location');
  document.getElementById('send-email').href='mailto:hola@rosapaisajista.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(inquiryText);
  form.hidden=true;ready.hidden=false;ready.scrollTop=0;
  dialog.setAttribute('aria-labelledby','ready-heading');
  const heading=ready.querySelector('h2');heading.id='ready-heading';heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});
}
function advance(e){
  e.preventDefault();if(!validate())return;
  if(step<4){step++;showStep(true);}else prepareInquiry();
}
document.getElementById('form-next').addEventListener('click',advance);
form.addEventListener('submit',advance);
form.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.tagName==='INPUT'&&!['checkbox','radio'].includes(e.target.type))advance(e);});
document.getElementById('form-back').addEventListener('click',()=>{step=Math.max(0,step-1);showStep(true);});
form.addEventListener('input',e=>{if(e.target.hasAttribute('aria-invalid'))e.target.removeAttribute('aria-invalid');document.getElementById('form-error').hidden=true;});
document.getElementById('edit-inquiry').addEventListener('click',()=>{ready.hidden=true;form.hidden=false;dialog.setAttribute('aria-labelledby','form-title');showStep(true);});
document.getElementById('copy-inquiry').addEventListener('click',async()=>{
  const status=document.getElementById('copy-status');
  try {await navigator.clipboard.writeText(inquiryText);status.textContent='Consulta copiada. Puedes pegarla en tu correo.';}
  catch {status.textContent='No se ha podido copiar. Descarga el resumen para conservarlo.';}
});
document.getElementById('download-inquiry').addEventListener('click',()=>{
  const url=URL.createObjectURL(new Blob([inquiryText],{type:'text/plain;charset=utf-8'}));
  const a=document.createElement('a');a.href=url;a.download='mi-proyecto-de-paisajismo.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
showStep();
