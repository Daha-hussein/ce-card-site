// Try multiple extensions for each local image base name.
(function(){
  const exts=['.webp','.png','.jpg','.jpeg','.svg'];
  document.querySelectorAll('img[data-fallback]').forEach(img=>{
    const base=img.getAttribute('data-fallback');
    let i=0;
    function next(){ if(i>=exts.length) return; const url=base+exts[i++]; const t=new Image(); t.onload=()=>{img.src=url}; t.onerror=next; t.src=url; }
    next();
  });
})();