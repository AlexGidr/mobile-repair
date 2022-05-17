const form = document.querySelector('.g-3');
const number = '79220054119';
function sendToWhatsapp(text, phone) {
 
  text = encodeURIComponent(text);
 
  let url = `https://web.whatsapp.com/send?phone=${phone}&text=${text}&source=&data=`;
 
  window.open(url);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = e.currentTarget.querySelector('input').value;

  sendToWhatsapp(text, number);
});