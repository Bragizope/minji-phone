/* 언어 설정 */
window.LANGS=[['ko','한국어'],['en','English'],['ja','日本語'],['zh','简体中文'],['vi','Tiếng Việt'],['th','ภาษาไทย'],['id','Bahasa Indonesia']];
(function(){
 const ok=l=>window.LANGS.some(x=>x[0]===l);let sel='zh';
 try{const u=new URLSearchParams(location.search).get('lang');if(ok(u))sel=u}catch(e){}
 if(sel==='zh'){try{const s=localStorage.getItem('wb_lang');if(ok(s))sel=s}catch(e){}}
 window.LANG=sel;
})();
function setLang(l){try{localStorage.setItem('wb_lang',l)}catch(e){}const u=new URL(location.href);u.searchParams.set('lang',l);location.replace(u.toString())}
