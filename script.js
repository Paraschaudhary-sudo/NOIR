const women = [
  {id:'w01',name:'Sculpted Satin Dress',type:'Evening dress',category:'western',price:2499,color:'Champagne',swatch:'#d9c6a8',tag:'EVENING',image:'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=85'},
  {id:'w02',name:'Everyday Linen Shirt',type:'Relaxed shirt',category:'casual',price:1299,color:'Ivory',swatch:'#e8e0d4',tag:'EASY WEAR',image:'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=85'},
  {id:'w03',name:'Rosewood Co-ord Set',type:'Two-piece set',category:'western',price:2199,color:'Rosewood',swatch:'#a86f75',tag:'CO-ORD',image:'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=800&q=85'},
  {id:'w04',name:'Classic Straight Denim',type:'High-rise denim',category:'casual',price:1599,color:'Indigo',swatch:'#394b72',tag:'EVERYDAY',image:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=85'},
  {id:'w05',name:'Midnight Slip Skirt',type:'Midi skirt',category:'western',price:1499,color:'Midnight',swatch:'#29272d',tag:'NEW EDIT',image:'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=85'},
  {id:'w06',name:'Printed Anarkali',type:'Traditional wear',category:'traditional',price:2899,color:'Marigold',swatch:'#c78c32',tag:'TRADITIONAL',image:'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85'},
  {id:'w07',name:'Soft Knit Cardigan',type:'Layering knit',category:'casual',price:1799,color:'Oatmeal',swatch:'#c6b6a1',tag:'LAYER UP',image:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=85'},
  {id:'w08',name:'Modern Kurta Set',type:'Kurta and trousers',category:'traditional',price:2399,color:'Sage',swatch:'#8d9b81',tag:'SET OF 2',image:'https://images.unsplash.com/photo-1583391733956-6c78276477e8?auto=format&fit=crop&w=800&q=85'},
  {id:'w09',name:'Tailored Wide-Leg Trousers',type:'Tailored trousers',category:'western',price:1699,color:'Stone',swatch:'#aaa093',tag:'TAILORED',image:'https://images.unsplash.com/photo-1506629905607-d9d7a3e2f3d7?auto=format&fit=crop&w=800&q=85'},
  {id:'w10',name:'Midnight Embroidered Suit',type:'Festive three-piece',category:'traditional',price:3299,color:'Deep teal',swatch:'#245e5c',tag:'FESTIVE',image:'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=800&q=85'},
  {id:'w11',name:'Everyday Ribbed Tank',type:'Essential top',category:'casual',price:699,color:'Cocoa',swatch:'#7d5a48',tag:'ESSENTIAL',image:'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=85'},
  {id:'w12',name:'Pearl Button Blazer',type:'Structured blazer',category:'western',price:2699,color:'Cloud grey',swatch:'#b9b9b5',tag:'STATEMENT',image:'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=800&q=85'}
];
const men = [
  {id:'m01',name:'Relaxed Oxford Shirt',type:'Cotton shirt',category:'smart',price:1499,color:'Sky blue',swatch:'#9bb9ca',tag:'EVERYDAY',image:'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=85'},
  {id:'m02',name:'Essential Heavy Tee',type:'Heavyweight T-shirt',category:'casual',price:799,color:'Washed black',swatch:'#343331',tag:'ESSENTIAL',image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85'},
  {id:'m03',name:'City Pleat Trousers',type:'Pleated trousers',category:'smart',price:1799,color:'Charcoal',swatch:'#4b4948',tag:'TAILORED',image:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=85'},
  {id:'m04',name:'Utility Overshirt',type:'Layering overshirt',category:'streetwear',price:1899,color:'Olive',swatch:'#6c7553',tag:'LAYER UP',image:'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85'},
  {id:'m05',name:'Minimal Knit Polo',type:'Knit polo',category:'smart',price:1399,color:'Cream',swatch:'#e2d8c7',tag:'SMART CASUAL',image:'https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=800&q=85'},
  {id:'m06',name:'Straight-Fit Denim',type:'Denim jeans',category:'casual',price:1699,color:'Deep indigo',swatch:'#263b5a',tag:'DAILY DENIM',image:'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85'},
  {id:'m07',name:'Structured Bomber',type:'Bomber jacket',category:'streetwear',price:2799,color:'Espresso',swatch:'#594239',tag:'OUTERWEAR',image:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=85'},
  {id:'m08',name:'Textured Resort Shirt',type:'Short-sleeve shirt',category:'casual',price:1299,color:'Sand',swatch:'#c9b89f',tag:'WEEKEND',image:'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=85'},
  {id:'m09',name:'Double-Breasted Blazer',type:'Formal blazer',category:'smart',price:3299,color:'Navy',swatch:'#30394d',tag:'OCCASION',image:'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=800&q=85'},
  {id:'m10',name:'Graphic Street Sweatshirt',type:'Relaxed sweatshirt',category:'streetwear',price:1599,color:'Rust',swatch:'#a35f43',tag:'STREET EDIT',image:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=85'},
  {id:'m11',name:'Linen Blend Drawstring Pants',type:'Relaxed trousers',category:'casual',price:1399,color:'Natural beige',swatch:'#c9bda9',tag:'LIGHTWEIGHT',image:'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=85'},
  {id:'m12',name:'Fine Stripe Formal Shirt',type:'Button-down shirt',category:'smart',price:1599,color:'White / blue',swatch:'#d5e0e5',tag:'WORK TO DINNER',image:'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85'}
];

// Guardrails: unique product IDs, names and image URLs across both collections.
const allProducts = [...women, ...men];
const uniqueBy = key => new Set(allProducts.map(p => p[key])).size === allProducts.length;
if (!uniqueBy('id') || !uniqueBy('name') || !uniqueBy('image')) console.error('NOIR product uniqueness check failed.');

const formatPrice = amount => '₹' + amount.toLocaleString('en-IN');
function productCard(product, index) {
  return `<article class="product-card" style="animation-delay:${Math.min(index * 35, 280)}ms">
    <div class="product-image"><img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async"><span class="product-tag">${product.tag}</span></div>
    <div class="product-info"><div class="product-name-line"><h3 class="product-name">${product.name}</h3><span class="product-price">${formatPrice(product.price)}</span></div>
    <p class="product-type">${product.type}</p><div class="product-bottom"><span class="swatch" style="--swatch:${product.swatch}" aria-label="${product.color}"></span><span class="product-color">${product.color}</span><button class="add-button" type="button" data-add="${product.id}">ADD TO BAG +</button></div></div></article>`;
}
function renderProducts(collection, targetId, filter = 'all') {
  const target = document.getElementById(targetId);
  const visible = filter === 'all' ? collection : collection.filter(item => item.category === filter);
  target.innerHTML = visible.map(productCard).join('');
}
renderProducts(women, 'womenProducts');
renderProducts(men, 'menProducts');

document.querySelectorAll('[data-filter-group]').forEach(group => {
  group.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    group.querySelectorAll('[data-filter]').forEach(item => item.classList.toggle('active', item === button));
    const isWomen = group.dataset.filterGroup === 'women';
    renderProducts(isWomen ? women : men, isWomen ? 'womenProducts' : 'menProducts', button.dataset.filter);
  });
});

const welcome = document.getElementById('welcome');
const enterButton = document.getElementById('enterNoir');
function enterSite() {
  welcome.classList.add('is-leaving');
  document.body.classList.remove('no-scroll');
  window.setTimeout(() => welcome.remove(), 750);
}
document.body.classList.add('no-scroll');
enterButton.addEventListener('click', enterSite);
welcome.addEventListener('click', event => { if (event.target === welcome) enterSite(); });

const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('navigation');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const toast = document.getElementById('toast');
let toastTimeout;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove('show'), 2200);
}
const bag = new Map();
document.addEventListener('click', event => {
  const addButton = event.target.closest('[data-add]');
  if (!addButton) return;
  const product = allProducts.find(item => item.id === addButton.dataset.add);
  if (!product) return;
  bag.set(product.id, (bag.get(product.id) || 0) + 1);
  showToast(`${product.name} added to your demo bag · ${bag.size} unique item${bag.size === 1 ? '' : 's'}`);
});

document.getElementById('year').textContent = new Date().getFullYear();

// If a remote product image fails, hide only that image rather than reusing another product photo.
document.addEventListener('error', event => {
  const image = event.target;
  if (image.tagName !== 'IMG' || image.dataset.errorHandled) return;
  image.dataset.errorHandled = 'true';
  image.style.visibility = 'hidden';
  image.parentElement.style.background = 'linear-gradient(135deg, #e8ded5, #d6c7bb)';
}, true);
