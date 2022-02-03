import langArr from "./langArr";

const lang = () => {
   const allLang = ['ru', 'ua'];
   const li = document.querySelector('.lng-change');
   const link = document.querySelectorAll('.link');

   li.addEventListener('click', (e) => {
      if (e.target.closest('.link')) {
         const btn = e.target.closest('.link');
         link.forEach((tab) => {
            if (tab === btn) {
               tab.classList.add('active');
            } else {
               tab.classList.remove('active');
            }
         });
      }
   });

   link.forEach(item => item.addEventListener('click', () => {
      let lang = item.textContent.toLowerCase();
      location.href = window.location.pathname + '#' + lang;
      location.reload();
   }));
   function changeLanguage() {
      let hash = window.location.hash;
      hash = hash.substr(1);
      if (!allLang.includes(hash)) {
         location.href = window.location.pathname + '#ru';
         location.reload();
      }
      document.querySelector('title').innerHTML = langArr['title'][hash];
      
   }
   changeLanguage();

}
export default lang;

