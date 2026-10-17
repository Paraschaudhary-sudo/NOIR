const women = [
  {id:'w01',name:'Sculpted Satin Dress',type:'Evening dress',category:'western',price:2499,color:'Champagne',swatch:'#d9c6a8',tag:'EVENING',image:'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=85'},
  {id:'w02',name:'Everyday Linen Shirt',type:'Relaxed shirt',category:'casual',price:1299,color:'Ivory',swatch:'#e8e0d4',tag:'EASY WEAR',image:'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=85'},
  {id:'w03',name:'Rosewood Co-ord Set',type:'Two-piece set',category:'western',price:2199,color:'Rosewood',swatch:'#a86f75',tag:'CO-ORD',image:'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=800&q=85'},
  {id:'w04',name:'Classic Straight Denim',type:'High-rise denim',category:'casual',price:1599,color:'Indigo',swatch:'#394b72',tag:'EVERYDAY',image:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=85'},
  {id:'w05',name:'Midnight Slip Skirt',type:'Midi skirt',category:'western',price:1499,color:'Midnight',swatch:'#29272d',tag:'NEW EDIT',image:'https://assets.ajio.com/medias/sys_master/root1/20260509/XQOp/69ff5ffafcb5bb61d2b2d99a/-1117Wx1400H-701131484-red-MODEL2.jpg'},
  {id:'w06',name:'Printed Anarkali',type:'Traditional wear',category:'traditional',price:2899,color:'Marigold',swatch:'#c78c32',tag:'TRADITIONAL',image:'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85'},
  {id:'w07',name:'Soft Knit Cardigan',type:'Layering knit',category:'casual',price:1799,color:'Oatmeal',swatch:'#c6b6a1',tag:'LAYER UP',image:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=85'},
  {id:'w08',name:'Modern Kurta Set',type:'Kurta and trousers',category:'traditional',price:2399,color:'Sage',swatch:'#8d9b81',tag:'SET OF 2',image:'https://images.unsplash.com/photo-1583391733956-6c78276477e8?auto=format&fit=crop&w=800&q=85'},
  {id:'w09',name:'Satin Occasion Dress',type:'Flowing occasion dress',category:'western',price:1999,color:'Champagne',swatch:'#d9c6a8',tag:'OCCASION',image:'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=85'},
  {id:'w10',name:'Midnight Embroidered Suit',type:'Festive three-piece',category:'traditional',price:3299,color:'Deep teal',swatch:'#245e5c',tag:'FESTIVE',image:'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=800&q=85'},
  {id:'w11',name:'Everyday Ribbed Tank',type:'Essential top',category:'casual',price:699,color:'Cocoa',swatch:'#7d5a48',tag:'ESSENTIAL',image:'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=85'},
  {id:'w12',name:'Pearl Button Blazer',type:'Structured blazer',category:'western',price:2699,color:'Cloud grey',swatch:'#b9b9b5',tag:'STATEMENT',image:'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=800&q=85'},
  {id:'w13',name:'Everyday Cotton Kurti',type:'Straight-fit kurti',category:'traditional',price:1199,color:'Soft sage',swatch:'#a8b39b',tag:'EASY TRADITIONAL',image:'https://www.cottonculture.co.in/cdn/shop/files/RUHANICC10712604251.jpg?v=1747477463&width=900'},
  {id:'w14',name:'Midnight Drape Saree',type:'Lightweight occasion saree',category:'traditional',price:2799,color:'Midnight blue',swatch:'#252f49',tag:'OCCASION',image:'https://avighnascreation.in/uploads/products/gallery/1753452370_68838f52a85a5.jpg'},
  {id:'w15',name:'Square-Neck Everyday Top',type:'Cotton blend top',category:'casual',price:799,color:'Warm white',swatch:'#e9e2d7',tag:'DAILY ESSENTIAL',image:'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=85'}];
const men = [
  {id:'m01',name:'Relaxed Oxford Shirt',type:'Cotton shirt',category:'smart',price:1499,color:'Sky blue',swatch:'#9bb9ca',tag:'EVERYDAY',image:'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=85'},
  {id:'m02',name:'Essential Heavy Tee',type:'Heavyweight T-shirt',category:'casual',price:799,color:'Washed black',swatch:'#343331',tag:'ESSENTIAL',image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85'},
  {id:'m03',name:'Classic Denim Jacket',type:'Everyday denim jacket',category:'casual',price:2299,color:'Indigo',swatch:'#394b72',tag:'LAYER UP',image:'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=85'},
  {id:'m04',name:'Utility Overshirt',type:'Layering overshirt',category:'streetwear',price:1899,color:'Olive',swatch:'#6c7553',tag:'LAYER UP',image:'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85'},
  {id:'m05',name:'Minimal Knit Polo',type:'Knit polo',category:'smart',price:1399,color:'Cream',swatch:'#e2d8c7',tag:'SMART CASUAL',image:'https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=800&q=85'},
  {id:'m06',name:'Straight-Fit Denim',type:'Denim jeans',category:'casual',price:1699,color:'Deep indigo',swatch:'#263b5a',tag:'DAILY DENIM',image:'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85'},
  {id:'m07',name:'Structured Bomber',type:'Bomber jacket',category:'streetwear',price:2799,color:'Espresso',swatch:'#594239',tag:'OUTERWEAR',image:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=85'},
  {id:'m08',name:'Textured Resort Shirt',type:'Short-sleeve shirt',category:'casual',price:1299,color:'Sand',swatch:'#c9b89f',tag:'WEEKEND',image:'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=85'},
  {id:'m09',name:'Double-Breasted Blazer',type:'Formal blazer',category:'smart',price:3299,color:'Navy',swatch:'#30394d',tag:'OCCASION',image:'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=800&q=85'},
  {id:'m10',name:'Relaxed Weekend Shirt',type:'Casual button-up shirt',category:'casual',price:1299,color:'Sand',swatch:'#c9b89f',tag:'WEEKEND',image:'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=85'},
  {id:'m11',name:'Minimal Zip Hoodie',type:'Relaxed cotton hoodie',category:'streetwear',price:1599,color:'Charcoal',swatch:'#343331',tag:'OFF-DUTY',image:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=85'},
  {id:'m12',name:'Fine Stripe Formal Shirt',type:'Button-down shirt',category:'smart',price:1599,color:'White / blue',swatch:'#d5e0e5',tag:'WORK TO DINNER',image:'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85'},
  {id:'m13',name:'Everyday Crewneck Sweatshirt',type:'Cotton crewneck sweatshirt',category:'streetwear',price:1499,color:'Forest green',swatch:'#536653',tag:'EVERYDAY LAYER',image:'https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=85'}
];


const accessories = [
  {id:'a01',name:'Sculpted Evening Bag',type:'Structured shoulder bag',category:'accessory',price:1899,color:'Black',swatch:'#262322',tag:'THE FINISHING TOUCH',image:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=85'},
  {id:'a02',name:'Everyday Frame Sunglasses',type:'Classic acetate frames',category:'accessory',price:999,color:'Tortoise',swatch:'#71513b',tag:'SUN EDIT',image:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=85'},
  {id:'a03',name:'Minimal Dial Watch',type:'Everyday wristwatch',category:'accessory',price:2299,color:'Gold / black',swatch:'#9d8050',tag:'TIMELESS',image:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=85'},
  {id:'a04',name:'Soft Leather Belt',type:'Minimal waist belt',category:'accessory',price:799,color:'Espresso',swatch:'#4b3026',tag:'DAILY DETAIL',image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85'},
  {id:'a05',name:'Everyday Carry Tote',type:'Roomy canvas tote',category:'accessory',price:699,color:'Natural',swatch:'#c8b9a2',tag:'CARRY YOUR DAY',image:'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=85'},
  {id:'a06',name:'Soft Touch Scarf',type:'Lightweight styling scarf',category:'accessory',price:599,color:'Dusty rose',swatch:'#b98688',tag:'SOFT LAYERS',image:'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=85'}
];

const allProducts = [...women, ...men, ...accessories];
const uniqueBy = key => new Set(allProducts.map(p => p[key])).size === allProducts.length;
if (!uniqueBy('id') || !uniqueBy('name') || !uniqueBy('image')) console.error('NOIR uniqueness check failed: product IDs, names and image URLs must be unique.');
else console.info('NOIR catalogue check passed: product IDs, names, and image URLs are unique.');

const formatPrice = amount => '₹' + amount.toLocaleString('en-IN');
const wishlistKey = 'noirWishlistV1';
function getWishlist() { try { return JSON.parse(localStorage.getItem(wishlistKey) || '[]'); } catch (_) { return []; } }
function saveWishlist(ids) { try { localStorage.setItem(wishlistKey, JSON.stringify(ids)); } catch (_) {} }
function updateWishlistUI() {
  const ids = getWishlist();
  const count = document.getElementById('wishlistCount'); if (count) count.textContent = ids.length;
  const items = ids.map(id => allProducts.find(product => product.id === id)).filter(Boolean);
  const target = document.getElementById('wishlistItems');
  if (target) target.innerHTML = items.length ? items.map(product => `<article class="wishlist-item"><img src="${product.image}" alt="${product.name}"><div><strong>${product.name}</strong><p>${formatPrice(product.price)} · ${product.color}</p><button type="button" class="wishlist-add" data-add="${product.id}">ADD TO BAG</button></div><button type="button" class="wishlist-remove" data-wishlist="${product.id}" aria-label="Remove ${product.name}">×</button></article>`).join('') : '<p class="empty-bag">Tap the heart on a piece to save it here.</p>';
  document.querySelectorAll('[data-wishlist]').forEach(button => { const saved = ids.includes(button.dataset.wishlist); if (button.classList.contains('wishlist-toggle')) { button.classList.toggle('is-saved', saved); button.setAttribute('aria-pressed', String(saved)); button.textContent = saved ? '♥' : '♡'; } });
}
const sizeGuideModal = document.getElementById('sizeGuideModal');
const sizeGuideContent = document.getElementById('sizeGuideContent');
function openSizeGuide(productId) {
  const product = allProducts.find(item => item.id === productId); if (!product) return;
  const isWomen = women.some(item => item.id === productId);
  const text = `${product.name} · ${product.type}`;
  document.getElementById('sizeGuideTitle').innerHTML = 'Find your <em>fit.</em>';
  document.getElementById('sizeGuideIntro').textContent = `${text}. These general body-measurement ranges help you choose a starting point; fabric, cut and the way you like clothes to sit can change the best fit.`;
  const clothing = product.name.toLowerCase();
  let rows;
  if (/saree/.test(clothing)) {
    rows = [['One size / drape','Usually a 5.5–6.5 m saree length','Blouse fit depends on the blouse piece and tailoring'],['Before ordering','Check fabric width, blouse piece and included accessories','Drape length and personal styling can vary']];
  } else if (/skirt|trouser|pant|denim|jean/.test(clothing)) {
    rows = [['XS','Waist 61–66 cm','Hip 86–91 cm'],['S','Waist 67–72 cm','Hip 92–97 cm'],['M','Waist 73–78 cm','Hip 98–103 cm'],['L','Waist 79–85 cm','Hip 104–110 cm'],['XL','Waist 86–93 cm','Hip 111–118 cm']];
  } else {
    rows = [['XS','Bust/chest 76–81 cm','Waist 60–65 cm'],['S','Bust/chest 82–87 cm','Waist 66–71 cm'],['M','Bust/chest 88–93 cm','Waist 72–77 cm'],['L','Bust/chest 94–101 cm','Waist 78–85 cm'],['XL','Bust/chest 102–110 cm','Waist 86–94 cm']];
  }
  const headers = /saree/.test(clothing) ? ['FIT NOTE','DETAIL','REMEMBER'] : (/skirt|trouser|pant|denim|jean/.test(clothing) ? ['STARTING SIZE','BODY WAIST','BODY HIP'] : ['STARTING SIZE','BODY BUST / CHEST','BODY WAIST']);
  sizeGuideContent.innerHTML = `<p class="size-product-label">${isWomen ? 'WOMEN’S EDIT' : (men.some(item => item.id === productId) ? 'MEN’S EDIT' : 'ACCESSORIES')} / ${product.name}</p><div class="size-table-wrap"><table class="size-table"><thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(cell=>`<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p class="size-fit-tip"><strong>Fit preference:</strong> Choose a closer fit if you like a neat silhouette; consider one size up for extra ease in non-stretch fabric. These are general demo ranges, not brand-certified measurements.</p>`;
  openModal(sizeGuideModal);
}
const productSearch = document.getElementById('productSearch');
let activeSearchGender = 'women';
const searchResultsWrap = document.getElementById('searchResultsWrap');
function runProductSearch(term = productSearch?.value || '') {
  const raw = term.trim().toLowerCase();
  const source = activeSearchGender === 'women' ? women : activeSearchGender === 'men' ? men : allProducts;
  const aliases = {
    kurti: p => /kurti|kurta|anarkali/.test((p.name+' '+p.type).toLowerCase()),
    skirts: p => /skirt/.test((p.name+' '+p.type).toLowerCase()),
    skirt: p => /skirt/.test((p.name+' '+p.type).toLowerCase()),
    saree: p => /saree/.test((p.name+' '+p.type).toLowerCase()),
    top: p => /top|tank|tee|t-shirt|tshirt/.test((p.name+' '+p.type).toLowerCase()),
    shirt: p => /shirt|overshirt/.test((p.name+' '+p.type).toLowerCase()),
    trouser: p => /trouser|pant|jean|denim/.test((p.name+' '+p.type).toLowerCase()),
    trousers: p => /trouser|pant|jean|denim/.test((p.name+' '+p.type).toLowerCase()),
    pant: p => /pant|trouser|jean|denim/.test((p.name+' '+p.type).toLowerCase()),
    pants: p => /pant|trouser|jean|denim/.test((p.name+' '+p.type).toLowerCase()),
    't-shirt': p => /t-shirt|tshirt|tee/.test((p.name+' '+p.type).toLowerCase()),
    tshirt: p => /t-shirt|tshirt|tee/.test((p.name+' '+p.type).toLowerCase())
  };
  const matches = !raw ? [] : source.filter(p => aliases[raw] ? aliases[raw](p) : (p.name+' '+p.type+' '+p.category+' '+p.tag).toLowerCase().includes(raw));
  document.getElementById('searchResultLabel').textContent = raw ? `${matches.length} piece${matches.length===1?'':'s'} for “${term.trim()}”` : 'Recommended pieces';
  document.getElementById('searchResults').innerHTML = matches.length ? matches.map(productCard).join('') : `<div class="search-empty"><strong>No exact match just yet.</strong><p>Try another item, or choose one of the recommendations above.</p></div>`;
  searchResultsWrap.hidden = !raw;
  updateWishlistUI();
}
function setSearchGender(gender) {
  activeSearchGender = gender;
  document.querySelectorAll('[data-gender]').forEach(button => button.classList.toggle('active', button.dataset.gender === gender));
  const rec = document.getElementById('searchRecommendations');
  const terms = gender === 'men' ? ['shirt','trouser','pant','t-shirt'] : gender === 'women' ? ['kurti','skirts','saree','top'] : ['kurti','shirt','saree','t-shirt'];
  rec.innerHTML = '<span>TRY:</span>' + terms.map(term=>`<button type="button" data-search-term="${term}">${term.charAt(0).toUpperCase()+term.slice(1)}</button>`).join('');
  if (productSearch) productSearch.placeholder = gender === 'men' ? 'Try shirt, trouser, pant, t-shirt…' : gender === 'women' ? 'Try kurti, skirt, saree, top…' : 'Search shirts, kurtis, sarees, tees…';
  if (productSearch?.value.trim()) runProductSearch(); else searchResultsWrap.hidden = true;
}
document.querySelectorAll('[data-gender]').forEach(button => button.addEventListener('click', () => setSearchGender(button.dataset.gender)));
productSearch?.addEventListener('input', () => runProductSearch());
document.getElementById('clearSearch')?.addEventListener('click', () => { productSearch.value=''; searchResultsWrap.hidden=true; productSearch.focus(); });
document.getElementById('closeSearchResults')?.addEventListener('click', () => { searchResultsWrap.hidden=true; productSearch.value=''; });
document.getElementById('searchRecommendations')?.addEventListener('click', event => { const button=event.target.closest('[data-search-term]'); if (!button) return; productSearch.value=button.dataset.searchTerm; runProductSearch(button.dataset.searchTerm); document.getElementById('searchResultsWrap').scrollIntoView({behavior:'smooth',block:'nearest'}); });
document.getElementById('wishlistOpen')?.addEventListener('click', () => { updateWishlistUI(); openModal(document.getElementById('wishlistModal')); });
document.addEventListener('click', event => {
  const wish = event.target.closest('[data-wishlist]');
  if (wish) { const id=wish.dataset.wishlist; const ids=getWishlist(); const next=ids.includes(id)?ids.filter(item=>item!==id):[...ids,id]; saveWishlist(next); updateWishlistUI(); if (productSearch?.value.trim()) runProductSearch(); showToast(next.includes(id)?'Saved to your NOIR wishlist':'Removed from your wishlist'); return; }
  const guide = event.target.closest('[data-size-guide]'); if (guide) { openSizeGuide(guide.dataset.sizeGuide); return; }
});

function productCard(product, index) {
  const saved = getWishlist().includes(product.id);
  return `<article class="product-card" style="animation-delay:${Math.min(index * 35, 280)}ms">
    <div class="product-image"><img src="${product.image}" alt="${product.name} — ${product.type}" loading="lazy" decoding="async" onerror="this.onerror=null;this.style.display='none';this.parentElement.classList.add('image-unavailable');"><span class="product-tag">${product.tag}</span><button class="quick-add" type="button" data-add="${product.id}" aria-label="Add ${product.name} to bag">+</button><button class="wishlist-toggle ${saved ? 'is-saved' : ''}" type="button" data-wishlist="${product.id}" aria-label="${saved ? 'Remove' : 'Save'} ${product.name} ${saved ? 'from' : 'to'} wishlist" aria-pressed="${saved}">${saved ? '♥' : '♡'}</button></div>
    <div class="product-info"><div class="product-name-line"><h3 class="product-name">${product.name}</h3><span class="product-price">${formatPrice(product.price)}</span></div>
    <p class="product-type">${product.type}</p><div class="product-bottom"><span class="swatch" style="--swatch:${product.swatch}" aria-label="${product.color}"></span><span class="product-color">${product.color}</span><button class="add-button" type="button" data-add="${product.id}">ADD TO BAG +</button></div><button class="size-guide-link" type="button" data-size-guide="${product.id}">FIT & SIZE GUIDE ↗</button></div></article>`;
}
function renderProducts(collection, targetId, filter = 'all') {
  const target = document.getElementById(targetId);
  if (!target) return;
  const visible = filter === 'all' ? collection : collection.filter(item => item.category === filter);
  target.innerHTML = visible.map(productCard).join('');
}
renderProducts(women, 'womenProducts');
renderProducts(men, 'menProducts');
renderProducts(accessories, 'accessoryProducts');
updateWishlistUI();

document.querySelectorAll('[data-filter-group]').forEach(group => {
  group.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    group.querySelectorAll('[data-filter]').forEach(item => item.classList.toggle('active', item === button));
    const collection = group.dataset.filterGroup === 'women' ? women : men;
    renderProducts(collection, group.dataset.filterGroup === 'women' ? 'womenProducts' : 'menProducts', button.dataset.filter);
  });
});

const welcome = document.getElementById('welcome');
const enterButton = document.getElementById('enterNoir');
function enterSite() {
  if (!welcome || welcome.classList.contains('is-leaving')) return;
  welcome.classList.add('is-leaving');
  document.body.classList.remove('no-scroll');
  window.setTimeout(() => welcome.remove(), 700);
}
document.body.classList.add('no-scroll');
enterButton?.addEventListener('click', enterSite);
welcome?.addEventListener('click', event => { if (event.target === welcome) enterSite(); });

const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('navigation');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false');
}));

const toast = document.getElementById('toast');
let toastTimeout;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message; toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove('show'), 2400);
}
const bag = new Map();
const bagDrawer = document.getElementById('bagDrawer');
const overlay = document.getElementById('overlay');
const bagItems = document.getElementById('bagItems');
const bagCount = document.getElementById('bagCount');
const bagSubtotal = document.getElementById('bagSubtotal');
function bagTotal() { return [...bag.entries()].reduce((sum, [id, qty]) => sum + allProducts.find(p => p.id === id).price * qty, 0); }
function updateBag() {
  const quantity = [...bag.values()].reduce((sum, qty) => sum + qty, 0);
  bagCount.textContent = quantity;
  bagSubtotal.textContent = formatPrice(bagTotal());
  if (!bag.size) { bagItems.innerHTML = '<p class="empty-bag">Your bag is waiting for something you love.</p>'; return; }
  bagItems.innerHTML = [...bag.entries()].map(([id, qty]) => {
    const product = allProducts.find(p => p.id === id);
    return `<article class="bag-item"><img src="${product.image}" alt=""><div class="bag-item-copy"><h3>${product.name}</h3><p>${product.color} · ${formatPrice(product.price)}</p><div class="quantity-controls"><button type="button" data-qty="${id}" data-step="-1" aria-label="Remove one">−</button><span>${qty}</span><button type="button" data-qty="${id}" data-step="1" aria-label="Add one">+</button><button class="remove-item" type="button" data-remove="${id}">REMOVE</button></div></div><strong>${formatPrice(product.price * qty)}</strong></article>`;
  }).join('');
}
function openBag() { bagDrawer.classList.add('open'); bagDrawer.setAttribute('aria-hidden','false'); overlay.classList.add('open'); document.body.classList.add('no-scroll'); }
function closePanels() { bagDrawer.classList.remove('open'); bagDrawer.setAttribute('aria-hidden','true'); overlay.classList.remove('open'); document.querySelectorAll('.modal.open').forEach(modal => modal.classList.remove('open')); document.body.classList.remove('no-scroll'); }
function openModal(modal) { closePanels(); modal.classList.add('open'); overlay.classList.add('open'); document.body.classList.add('no-scroll'); }
document.getElementById('bagOpen')?.addEventListener('click', openBag);
document.getElementById('footerBag')?.addEventListener('click', openBag);
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', closePanels));
overlay?.addEventListener('click', closePanels);
document.addEventListener('keydown', event => { if (event.key === 'Escape') closePanels(); });

document.addEventListener('click', event => {
  const addButton = event.target.closest('[data-add]');
  if (addButton) {
    const product = allProducts.find(item => item.id === addButton.dataset.add);
    if (!product) return;
    bag.set(product.id, (bag.get(product.id) || 0) + 1);
    updateBag(); showToast(`${product.name} added to your bag`); return;
  }
  const qtyButton = event.target.closest('[data-qty]');
  if (qtyButton) {
    const id = qtyButton.dataset.qty; const next = (bag.get(id) || 0) + Number(qtyButton.dataset.step);
    if (next <= 0) bag.delete(id); else bag.set(id, next);
    updateBag(); return;
  }
  const removeButton = event.target.closest('[data-remove]');
  if (removeButton) { bag.delete(removeButton.dataset.remove); updateBag(); }
});

const accountModal = document.getElementById('accountModal');
const checkoutModal = document.getElementById('checkoutModal');
const memberStudio = document.getElementById('memberStudio');
const accountStorageKey = 'noirDemoAccountsV2';
const sessionStorageKey = 'noirDemoSessionV2';
const profileKey = email => 'noirDemoProfileV2:' + email.toLowerCase();
const readJSON = (key, fallback) => { try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; } catch { return fallback; } };
const getAccounts = () => readJSON(accountStorageKey, []);
let currentUser = null;
let authMode = 'signup';
async function passwordDigest(password) {
  try {
    if (window.crypto && crypto.subtle) {
      const bytes = new TextEncoder().encode(password);
      const digest = await crypto.subtle.digest('SHA-256', bytes);
      return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
    }
  } catch (_) {}
  // Local-only fallback for browsers where Web Crypto is unavailable; never use a real password here.
  return 'demo-' + btoa(unescape(encodeURIComponent(password)));
}
function getProfile(email) { return readJSON(profileKey(email), {philosophy:'', reviews:[], orders:[]}); }
function saveProfile(email, profile) { localStorage.setItem(profileKey(email), JSON.stringify(profile)); }
function setAuthMessage(message, success = false) {
  const el = document.getElementById('accountMessage');
  el.textContent = message; el.classList.toggle('success', success);
}
function updateAccountUI() {
  const accountButton = document.getElementById('accountOpen');
  if (currentUser) {
    accountButton.textContent = 'HI, ' + currentUser.name.split(/\s+/)[0].toUpperCase();
    memberStudio.hidden = false;
    document.getElementById('studioGreeting').textContent = `Welcome back, ${currentUser.name}. This is your personal NOIR space.`;
    renderStudio();
  } else {
    accountButton.textContent = 'MY NOIR';
    memberStudio.hidden = true;
  }
}
function renderStudio() {
  if (!currentUser) return;
  const profile = getProfile(currentUser.email);
  document.getElementById('personalPhilosophy').value = profile.philosophy || '';
  document.getElementById('savedPhilosophy').textContent = profile.philosophy || 'Your philosophy will appear here once you save it.';
  const personalReviews = document.getElementById('personalReviews');
  personalReviews.innerHTML = profile.reviews.length ? profile.reviews.slice().reverse().map(review => `<article class="personal-review"><div class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</div><p>${escapeHTML(review.text)}</p><span>— ${escapeHTML(currentUser.name)} · YOUR NOIR NOTE</span></article>`).join('') : '<p class="empty-bag">Your published demo reviews will appear here.</p>';
  document.getElementById('personalReviews').querySelectorAll('article').forEach(item => item.classList.add('review-card'));
  const personalOrders = document.getElementById('personalOrders');
  personalOrders.innerHTML = profile.orders.length ? profile.orders.slice().reverse().map(order => { const ordered = (order.items || []).map(([id, qty]) => { const item = allProducts.find(p => p.id === id); return item ? `${qty} × ${item.name}` : `${qty} × item`; }).join(' · '); return `<article class="personal-order"><strong>${escapeHTML(order.code)}</strong><span>${formatPrice(order.total)}</span><small>${escapeHTML(order.method)} · ${new Date(order.date).toLocaleDateString()}</small><p class="order-item-list">${escapeHTML(ordered || 'Items unavailable')}</p></article>`; }).join('') : 'Your demo orders will appear here.';
}
function escapeHTML(value) { return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
function openAccount() {
  if (currentUser) { memberStudio.hidden = false; closePanels(); memberStudio.scrollIntoView({behavior:'smooth', block:'start'}); return; }
  openModal(accountModal);
}
document.getElementById('accountOpen')?.addEventListener('click', openAccount);
document.getElementById('footerAccount')?.addEventListener('click', openAccount);
document.querySelectorAll('[data-auth-mode]').forEach(button => button.addEventListener('click', () => {
  authMode = button.dataset.authMode;
  document.querySelectorAll('[data-auth-mode]').forEach(item => item.classList.toggle('active', item === button));
  document.getElementById('accountTitle').innerHTML = authMode === 'signup' ? 'Create your <em>account.</em>' : 'Welcome <em>back.</em>';
  document.getElementById('accountNameLabel').hidden = authMode === 'login';
  document.getElementById('accountName').hidden = authMode === 'login';
  document.getElementById('accountName').required = authMode === 'signup';
  document.getElementById('accountPassword').autocomplete = authMode === 'signup' ? 'new-password' : 'current-password';
  document.getElementById('accountSubmit').innerHTML = authMode === 'signup' ? 'CREATE DEMO ACCOUNT <span>↗</span>' : 'LOG IN TO DEMO <span>↗</span>';
  setAuthMessage('');
}));
document.getElementById('accountForm')?.addEventListener('submit', async event => {
  event.preventDefault();
  const name = document.getElementById('accountName').value.trim();
  const email = document.getElementById('accountEmail').value.trim().toLowerCase();
  const password = document.getElementById('accountPassword').value;
  const accounts = getAccounts();
  try {
    if (authMode === 'signup') {
      if (accounts.some(account => account.email === email)) { setAuthMessage('An account with this email already exists. Please log in.'); return; }
      accounts.push({name, email, passwordHash: await passwordDigest(password)});
      localStorage.setItem(accountStorageKey, JSON.stringify(accounts));
      saveProfile(email, {philosophy:'', reviews:[], orders:[]});
      currentUser = {name, email};
      localStorage.setItem(sessionStorageKey, JSON.stringify(currentUser));
      setAuthMessage('Your NOIR demo account is ready. Opening your Studio…', true);
    } else {
      const account = accounts.find(item => item.email === email);
      if (!account || account.passwordHash !== await passwordDigest(password)) { setAuthMessage('Email or password does not match this browser’s demo accounts.'); return; }
      currentUser = {name:account.name, email:account.email};
      localStorage.setItem(sessionStorageKey, JSON.stringify(currentUser));
      setAuthMessage('You are logged in. Welcome back.', true);
    }
    updateAccountUI();
    window.setTimeout(() => { closePanels(); memberStudio.scrollIntoView({behavior:'smooth', block:'start'}); }, 500);
  } catch (_) { setAuthMessage('Browser storage is unavailable. Please enable site storage and try again.'); }
});
document.getElementById('logoutButton')?.addEventListener('click', () => {
  currentUser = null; localStorage.removeItem(sessionStorageKey); updateAccountUI();
  memberStudio.scrollIntoView({behavior:'smooth', block:'start'}); showToast('You have logged out of NOIR demo.');
});
document.getElementById('philosophyForm')?.addEventListener('submit', event => {
  event.preventDefault(); if (!currentUser) return;
  const profile = getProfile(currentUser.email); profile.philosophy = document.getElementById('personalPhilosophy').value.trim(); saveProfile(currentUser.email, profile);
  document.getElementById('savedPhilosophy').textContent = profile.philosophy || 'Your philosophy will appear here once you save it.';
  const msg = document.getElementById('philosophyMessage'); msg.textContent = 'Your philosophy has been saved in this browser.'; msg.classList.add('success');
});
document.getElementById('reviewForm')?.addEventListener('submit', event => {
  event.preventDefault(); if (!currentUser) return;
  const profile = getProfile(currentUser.email);
  const review = {rating:Number(document.getElementById('reviewRating').value), text:document.getElementById('personalReview').value.trim(), date:new Date().toISOString()};
  profile.reviews.push(review); saveProfile(currentUser.email, profile); renderStudio();
  document.getElementById('personalReview').value = '';
  const msg = document.getElementById('reviewMessage'); msg.textContent = 'Your review is published in your personal demo space.'; msg.classList.add('success');
});
// Restore the demo session when the same browser opens the site again.
try {
  const savedSession = readJSON(sessionStorageKey, null);
  if (savedSession && getAccounts().some(account => account.email === savedSession.email)) currentUser = savedSession;
} catch (_) {}
updateAccountUI();

document.getElementById('checkoutOpen')?.addEventListener('click', () => {
  if (!bag.size) { showToast('Add a product to your bag first.'); return; }
  document.getElementById('checkoutTotal').textContent = formatPrice(bagTotal());
  document.getElementById('checkoutMessage').textContent = '';
  if (currentUser) {
    document.getElementById('checkoutName').value = currentUser.name;
    document.getElementById('checkoutEmail').value = currentUser.email;
  }
  openModal(checkoutModal);
});
const orderSuccess = document.getElementById('orderSuccess');
function closeOrderSuccess() { orderSuccess.classList.remove('open'); orderSuccess.setAttribute('aria-hidden','true'); document.body.classList.remove('no-scroll'); }
document.getElementById('orderSuccessClose')?.addEventListener('click', closeOrderSuccess);
orderSuccess?.addEventListener('click', event => { if (event.target === orderSuccess) closeOrderSuccess(); });
document.getElementById('checkoutForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const orderCode = 'NOIR-DEMO-' + Math.random().toString(36).slice(2,7).toUpperCase();
  const method = new FormData(event.currentTarget).get('paymentMethod');
  const total = bagTotal();
  if (currentUser) {
    const profile = getProfile(currentUser.email);
    profile.orders.push({code:orderCode, total, method, date:new Date().toISOString(), items:[...bag.entries()]});
    saveProfile(currentUser.email, profile);
  }
  document.getElementById('orderSuccessCopy').textContent = `Thanks for trying the NOIR demo. Your simulated order total is ${formatPrice(total)} using ${method}.`;
  document.getElementById('orderSuccessCode').textContent = orderCode;
  closePanels(); bag.clear(); updateBag();
  orderSuccess.classList.add('open'); orderSuccess.setAttribute('aria-hidden','false'); document.body.classList.add('no-scroll');
});

document.getElementById('year').textContent = new Date().getFullYear();
// Failed product images never get replaced with another product's image.
document.addEventListener('error', event => {
  const image = event.target;
  if (image.tagName !== 'IMG' || image.dataset.errorHandled) return;
  image.dataset.errorHandled = 'true'; image.style.visibility = 'hidden';
  if (image.parentElement) image.parentElement.classList.add('image-unavailable');
}, true);
