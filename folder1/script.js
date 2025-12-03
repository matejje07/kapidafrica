let Products = [];
let productnumber = 0;

const translations = {
  en: {
    title: "Kapidafrica fashion",
    navProducts: "Products",
    navInfo: "Info",
    basket: "Basket",
    addBtn: "Add",
    basketTitle: "Your Basket",
    totalLabel: "Total: ",
    checkoutBtn: "Continue for payment",
    checkoutHeader: "Choose order method",
    emailRadio: "E-mail",
    phoneRadio: "Phone (WhatsApp)",
    namePlaceholder: "Enter your name and surname",
    addressPlaceholder: "Enter your address",
    emailPlaceholder: "Enter your e-mail",
    phonePlaceholder: "Enter your phone number",
    paymentLabel: "Payment method:",
    buyBtn: "Buy",
    closeBtn: "Close",
    productCategories: [
      "All", "Bags", "Dress", "Hats", "Jackets", "Pants", "Shirts", "Skirts", "Tops", "Outfits"
    ],
    categoryNames: [
      "Bags", "Dress", "Hats", "Jackets", "Pants", "Shirts", "Skirts", "Tops", "Outfits"
    ],
    categoryTitle: "All Products",
    basketEmpty: "Basket is empty!",
    notificationAdd: "added to basket!",
    removeBtn: "Remove",
    paymentMethods: ["IBAN", "Paypal", "Satispay"],
    contact: `<h3>Contact</h3>
      <p>Email: kapidafrica@gmail.com</p>
      <p>Phone (WhatsApp): +39 351 131 1348</p>
      <p>Phone (shop): +39 511 966 1109</p>
      <p>Instagram: kapifashion</p>`,
    location: `<h3>Location</h3>
      <p>Via Massarenti 48/h<br />40138 Bologna<br />Italy</p>`,
    working: `<h3>Working hours</h3>
      <p>Monday: 10:00 - 16:00</p>
      <p>Tuesday: 10:00 - 16:00</p>
      <p>Wednesday: 10:00 - 16:00</p>
      <p>Thursday: 10:00 - 16:00</p>
      <p>Friday: 10:00 - 16:00</p>
      <p>Saturday: 10:00 - 16:00</p>`,
    otherInfo: `
      <p><b>KAPIDAFRICA FASHION</b> is a tailoring and fashion design studio based in Bologna, Italy, specializing in Afro-fusion style. The brand offers unique clothing and accessories that blend traditional African fabrics with modern designs.</p>
      <p><b>Brand Presentation</b></p>
      <p style="padding-left:2em;">Founded by Mohamed Sacko, known as Kapi, a political refugee from Guinea, KAPIDAFRICA FASHION aims to be a “bridge between cultures.” The studio is not only a fashion boutique but also a social and cultural space open to dialogue and the exchange of experiences. The initiative has been supported by the R.I.S.O. project (Refugees, Entrepreneurship, Solidarity) by ARCI, which promotes businesses created by refugees.</p>
      <p><b>Products and Services</b></p>
      <p style="padding-left:2em;">The company offers both ready-to-wear items and custom tailoring services.</p>
      <p><b>Clothing and accessories:</b></p>
      <p style="padding-left:2em;">You will find jackets, coats, T-shirts, scarves, bags, and other accessories for men, women, and children. Each piece is characterized by vibrant colors and unique design.</p>
      <p><b>Tailoring & Styling:</b></p>
      <p style="padding-left:2em;">The custom service allows clients to choose fabrics and materials to create personalized garments, including workwear such as hats and kitchen aprons with an African touch.</p>
      <p><b>Upcycling:</b></p>
      <p style="padding-left:2em;">The studio also transforms old garments (such as jeans) into new creations, including bags or jackets.</p>
    `
  },
  it: {
    title: "Kapidafrica fashion",
    navProducts: "Prodotto",
    navInfo: "Info",
    basket: "Cestino",
    addBtn: "Aggiungi",
    basketTitle: "Il tuo carrello",
    totalLabel: "Totale: ",
    checkoutBtn: "Continua per il pagamento",
    checkoutHeader: "Scegli il metodo di ordine",
    emailRadio: "E-mail",
    phoneRadio: "Telefono (WhatsApp)",
    namePlaceholder: "Inserisci il tuo nome e cognome",
    addressPlaceholder: "Inserisci il tuo indirizzo",
    emailPlaceholder: "Inserisci la tua e-mail",
    phonePlaceholder: "Inserisci il tuo numero di telefono",
    paymentLabel: "Metodo di pagamento:",
    buyBtn: "Acquistare",
    closeBtn: "Vicino",
    productCategories: [
      "Tutti", "Borse", "Vestito", "Capelli", "Giacche", "Pantaloni", "Camicie", "Gonne", "Tops", "Outfits"
    ],
    categoryNames: [
      "Bags", "Dress", "Hats", "Jackets", "Pants", "Shirts", "Skirts", "Tops", "Outfits"
    ],
    categoryTitle: "Tutti i prodotti",
    basketEmpty: "Il carrello è vuoto!",
    notificationAdd: "aggiunto al carrello!",
    removeBtn: "Rimuovi",
    paymentMethods: ["IBAN", "Paypal", "Satispay"],
    contact: `<h3>Contatto</h3>
      <p>Email: kapidafrica@gmail.com</p>
      <p>Telefono (WhatsApp): +39 351 131 1348</p>
      <p>Telefono (shop): +39 511 966 1109</p>
      <p>Instagram: kapifashion</p>`,
    location: `<h3>Posizione</h3>
      <p>Via Massarenti 48/h<br />40138 Bologna<br />Italy</p>`,
    working: `<h3>Orario di lavoro</h3>
      <p>lunedì: 10:00 - 16:00</p>
      <p>martedì: 10:00 - 16:00</p>
      <p>mercoledì: 10:00 - 16:00</p>
      <p>giovedì: 10:00 - 16:00</p>
      <p>venerdì: 10:00 - 16:00</p>
      <p>sabato: 10:00 - 16:00</p>`,
    otherInfo: `
      <p><b>KAPIDAFRICA FASHION</b> è un atelier di sartoria e stilismo con sede a Bologna, specializzato nella moda afro-fusion. Il brand propone capi e accessori unici che uniscono tessuti africani tradizionali e stile moderno.</p>
      <p><b>Presentazione del brand</b></p>
      <p style="padding-left:2em;">Fondato da Mohamed Sacko, conosciuto come Kapi, rifugiato politico originario della Guinea, KAPIDAFRICA FASHION nasce con l’idea di creare un “ponte tra le culture”. L’atelier non è solo una boutique di moda, ma anche uno spazio sociale e culturale aperto al dialogo e alla condivisione di esperienze. Il progetto è stato sostenuto da R.I.S.O. (Rifugiati, Imprenditoria, Solidarietà), iniziativa di ARCI che supporta le imprese fondate da persone rifugiate.</p>
      <p><b>Prodotti e servizi</b></p>
      <p style="padding-left:2em;">L’azienda offre sia abbigliamento prêt-à-porter sia servizi di sartoria su misura.</p>
      <p><b>Abbigliamento e accessori:</b></p>
      <p style="padding-left:2em;">Vestiti, giacche, cappotti, t-shirt, sciarpe, borse e altri accessori per uomo, donna e bambino. I prodotti si distinguono per i colori vivaci e il design unico.</p>
      <p><b>Sartoria & Styling:</b></p>
      <p style="padding-left:2em;">Il servizio su misura permette di scegliere tessuti e materiali per creare capi personalizzati, inclusi abiti da lavoro come cappelli e grembiuli da cucina con un tocco africano.</p>
      <p><b>Upcycling:</b></p>
      <p style="padding-left:2em;">L’atelier offre la possibilità di trasformare vecchi capi (come jeans) in nuove creazioni, come borse o giacche.</p>
    `
  }
};

const IMAGE_BASE_PATH = "images/";
const productsData = {
  en: [
    { name: "Bag", price: 15, category: "Bags", picture: "images/bag1.jpg" },
    { name: "Bag", price: 15, category: "Bags", picture: "images/bag2.jpg" },
    { name: "Bag", price: 25, category: "Bags", picture: "images/bag3.jpg" },
    { name: "Bag", price: 25, category: "Bags", picture: "images/bag4.jpg" },
    { name: "Bag", price: 45, category: "Bags", picture: "images/bag5.jpg" },
    { name: "Bag", price: 45, category: "Bags", picture: "images/bag6.jpg" },
    { name: "Bag", price: 50, category: "Bags", picture: "images/bag7.jpg" },
	
    { name: "Dress", price: 25, category: "Dress", picture: "images/dress1.jpg" },
    { name: "Dress", price: 39, category: "Dress", picture: "images/dress2.jpg" },
    { name: "Dress", price: 75, category: "Dress", picture: "images/dress3.jpg" },
    { name: "Dress", price: 120, category: "Dress", picture: "images/dress4.jpg" },
    { name: "Dress", price: 120, category: "Dress", picture: "images/dress5.jpg" },
    { name: "Dress", price: 120, category: "Dress", picture: "images/dress6.jpg" },
    { name: "Dress", price: 120, category: "Dress", picture: "images/dress7.jpg" },
    { name: "Dress", price: 120, category: "Dress", picture: "images/dress8.jpg" },
    { name: "Dress", price: 120, category: "Dress", picture: "images/dress9.jpg" },
    { name: "Dress", price: 60, category: "Dress", picture: "images/dress10.jpg" },
    { name: "Dress", price: 35, category: "Dress", picture: "images/dress11.jpg" },
    { name: "Beach Dress", price: 35, category: "Dress", picture: "images/dress12.jpg" },
	
    { name: "Shirt", price: 20, category: "Shirts", picture: "images/shirt1.jpg" },
    { name: "Shirt", price: 65, category: "Shirts", picture: "images/shirt2.jpg" },
    { name: "Shirt", price: 65, category: "Shirts", picture: "images/shirt3.jpg" },
    { name: "Shirt", price: 65, category: "Shirts", picture: "images/shirt4.jpg" },
    { name: "Shirt", price: 65, category: "Shirts", picture: "images/shirt5.jpg" },
    { name: "Shirt", price: 65, category: "Shirts", picture: "images/shirt6.jpg" },
    { name: "Shirt", price: 65, category: "Shirts", picture: "images/shirt7.jpg" },
    { name: "Shirt", price: 65, category: "Shirts", picture: "images/shirt8.jpg" },
    { name: "Shirt", price: 65, category: "Shirts", picture: "images/shirt9.jpg" },
    { name: "Shirt", price: 25, category: "Shirts", picture: "images/shirt10.jpg" },
    { name: "Shirt", price: 25, category: "Shirts", picture: "images/shirt11.jpg" },
    { name: "Shirt", price: 65, category: "Shirts", picture: "images/shirt12.jpg" },
    { name: "Shirt", price: 65, category: "Shirts", picture: "images/shirt13.jpg" },
    { name: "Shirt", price: 39, category: "Shirts", picture: "images/shirt14.jpg" },
    { name: "Shirt", price: 39, category: "Shirts", picture: "images/shirt15.jpg" },
    { name: "Shirt", price: 39, category: "Shirts", picture: "images/shirt16.jpg" },
    { name: "Shirt", price: 39, category: "Shirts", picture: "images/shirt17.jpg" },
    { name: "Shirt", price: 35, category: "Shirts", picture: "images/shirt18.jpg" },
    { name: "Shirt", price: 35, category: "Shirts", picture: "images/shirt19.jpg" },
    { name: "Shirt", price: 35, category: "Shirts", picture: "images/shirt20.jpg" },
    { name: "Shirt", price: 80, category: "Shirts", picture: "images/shirt21.jpg" },
    { name: "Shirt", price: 65, category: "Shirts", picture: "images/shirt22.jpg" },
	
    { name: "Skirt", price: 60, category: "Skirts", picture: "images/skirt1.jpg" },
    { name: "Skirt", price: 60, category: "Skirts", picture: "images/skirt2.jpg" },
    { name: "Skirt", price: 60, category: "Skirts", picture: "images/skirt3.jpg" },
    { name: "Skirt", price: 75, category: "Skirts", picture: "images/skirt4.jpg" },
    { name: "Skirt", price: 75, category: "Skirts", picture: "images/skirt5.jpg" },
    { name: "Skirt", price: 25, category: "Skirts", picture: "images/skirt6.jpg" },
    { name: "Skirt", price: 35, category: "Skirts", picture: "images/skirt7.jpg" },
    { name: "Skirt", price: 60, category: "Skirts", picture: "images/skirt8.jpg" },
    { name: "Skirt", price: 120, category: "Skirts", picture: "images/skirt9.jpg" },
	
    { name: "Pants", price: 25, category: "Pants", picture: "images/pants1.jpg" },
    { name: "Pants", price: 20, category: "Pants", picture: "images/pants2.jpg" },
    { name: "Pants", price: 20, category: "Pants", picture: "images/pants3.jpg" },
    { name: "Pants", price: 20, category: "Pants", picture: "images/pants4.jpg" },
    { name: "Pants", price: 20, category: "Pants", picture: "images/pants5.jpg" },
    { name: "Pants", price: 45, category: "Pants", picture: "images/pants6.jpg" },
    { name: "Pants", price: 65, category: "Pants", picture: "images/pants7.jpg" },
    { name: "Pants", price: 65, category: "Pants", picture: "images/pants8.jpg" },
    { name: "Pants", price: 65, category: "Pants", picture: "images/pants9.jpg" },
    { name: "Pants", price: 65, category: "Pants", picture: "images/pants10.jpg" },
    { name: "Pants", price: 65, category: "Pants", picture: "images/pants11.jpg" },
    { name: "Pants", price: 65, category: "Pants", picture: "images/pants12.jpg" },
    { name: "Pants", price: 65, category: "Pants", picture: "images/pants13.jpg" },
    { name: "Pants", price: 65, category: "Pants", picture: "images/pants14.jpg" },
    { name: "Pants", price: 65, category: "Pants", picture: "images/pants15.jpg" },
    { name: "Pants", price: 65, category: "Pants", picture: "images/pants16.jpg" },
    { name: "Pants", price: 65, category: "Pants", picture: "images/pants17.jpg" },
    { name: "Pants", price: 65, category: "Pants", picture: "images/pants18.jpg" },
    { name: "Pants", price: 35, category: "Pants", picture: "images/pants19.jpg" },
    { name: "Pants", price: 65, category: "Pants", picture: "images/pants20.jpg" },
    { name: "Pants", price: 65, category: "Pants", picture: "images/pants21.jpg" },
    { name: "Pants", price: 35, category: "Pants", picture: "images/pants22.jpg" },
    { name: "Pants", price: 35, category: "Pants", picture: "images/pants23.jpg" },
    { name: "Pants", price: 65, category: "Pants", picture: "images/pants24.jpg" },
    { name: "Pants", price: 20, category: "Pants", picture: "images/pants25.jpg" },
	
    { name: "Jacket", price: 75, category: "Jackets", picture: "images/jacket1.jpg" },
	
    { name: "Hat", price: 35, category: "Hats", picture: "images/hat1.jpg" },
    { name: "Hat", price: 15, category: "Hats", picture: "images/hat2.jpg" },
    { name: "Hat", price: 15, category: "Hats", picture: "images/hat3.jpg" },
	
    { name: "Top", price: 35, category: "Tops", picture: "images/top1.jpg" },
    { name: "Top", price: 35, category: "Tops", picture: "images/top2.jpg" },
	
    { name: "Outfit", price: 120, category: "Outfits", picture: "images/fit1.jpg" },
    { name: "Outfit", price: 95, category: "Outfits", picture: "images/fit2.jpg" },
    { name: "Outfit", price: 85, category: "Outfits", picture: "images/fit3.jpg" },
    { name: "Outfit", price: 125, category: "Outfits", picture: "images/fit4.jpg" },
    { name: "Outfit", price: 50, category: "Outfits", picture: "images/fit5.jpg" },
    { name: "Outfit", price: 170, category: "Outfits", picture: "images/fit6.jpg" },
    { name: "Outfit", price: 115, category: "Outfits", picture: "images/fit7.jpg" },
    { name: "Outfit", price: 155, category: "Outfits", picture: "images/fit8.jpg" },
    { name: "Outfit", price: 100, category: "Outfits", picture: "images/fit9.jpg" },
    { name: "Outfit", price: 138, category: "Outfits", picture: "images/fit10.jpg" },
    { name: "Outfit", price: 164, category: "Outfits", picture: "images/fit11.jpg" },
    { name: "Outfit", price: 164, category: "Outfits", picture: "images/fit12.jpg" },
    { name: "Outfit", price: 128, category: "Outfits", picture: "images/fit13.jpg" },
    { name: "Outfit", price: 200, category: "Outfits", picture: "images/fit14.jpg" },
    { name: "Outfit", price: 85, category: "Outfits", picture: "images/fit15.jpg" },
    { name: "Outfit", price: 85, category: "Outfits", picture: "images/fit16.jpg" },
    { name: "Outfit", price: 75, category: "Outfits", picture: "images/fit17.jpg" },
  ],
  it: [
    { name: "Borsa", price: 15, category: "Bags", picture: "images/bag1.jpg" },
    { name: "Borsa", price: 15, category: "Bags", picture: "images/bag2.jpg" },
    { name: "Borsa", price: 25, category: "Bags", picture: "images/bag3.jpg" },
    { name: "Borsa", price: 25, category: "Bags", picture: "images/bag4.jpg" },
    { name: "Borsa", price: 45, category: "Bags", picture: "images/bag5.jpg" },
    { name: "Borsa", price: 45, category: "Bags", picture: "images/bag6.jpg" },
    { name: "Borsa", price: 50, category: "Bags", picture: "images/bag7.jpg" },
	
    { name: "Vestito", price: 25, category: "Dress", picture: "images/dress1.jpg" },
    { name: "Vestito", price: 39, category: "Dress", picture: "images/dress2.jpg" },
    { name: "Vestito", price: 39, category: "Dress", picture: "images/dress3.jpg" },
    { name: "Vestito", price: 39, category: "Dress", picture: "images/dress4.jpg" },
    { name: "Vestito", price: 39, category: "Dress", picture: "images/dress5.jpg" },
    { name: "Vestito", price: 39, category: "Dress", picture: "images/dress6.jpg" },
    { name: "Vestito", price: 39, category: "Dress", picture: "images/dress7.jpg" },
    { name: "Vestito", price: 39, category: "Dress", picture: "images/dress8.jpg" },
    { name: "Vestito", price: 39, category: "Dress", picture: "images/dress9.jpg" },
    { name: "Vestito", price: 60, category: "Dress", picture: "images/dress10.jpg" },
    { name: "Vestito", price: 35, category: "Dress", picture: "images/dress11.jpg" },
    { name: "Vestito per la spiaggia", price: 35, category: "Dress", picture: "images/dress12.jpg" },
	
    { name: "Camicia", price: 20, category: "Shirts", picture: "images/shirt1.jpg" },
    { name: "Camicia", price: 65, category: "Shirts", picture: "images/shirt2.jpg" },
    { name: "Camicia", price: 65, category: "Shirts", picture: "images/shirt3.jpg" },
    { name: "Camicia", price: 65, category: "Shirts", picture: "images/shirt4.jpg" },
    { name: "Camicia", price: 65, category: "Shirts", picture: "images/shirt5.jpg" },
    { name: "Camicia", price: 65, category: "Shirts", picture: "images/shirt6.jpg" },
    { name: "Camicia", price: 65, category: "Shirts", picture: "images/shirt7.jpg" },
    { name: "Camicia", price: 65, category: "Shirts", picture: "images/shirt8.jpg" },
    { name: "Camicia", price: 65, category: "Shirts", picture: "images/shirt9.jpg" },
    { name: "Camicia", price: 25, category: "Shirts", picture: "images/shirt10.jpg" },
    { name: "Camicia", price: 25, category: "Shirts", picture: "images/shirt11.jpg" },
    { name: "Camicia", price: 65, category: "Shirts", picture: "images/shirt12.jpg" },
    { name: "Camicia", price: 65, category: "Shirts", picture: "images/shirt13.jpg" },
    { name: "Camicia", price: 39, category: "Shirts", picture: "images/shirt14.jpg" },
    { name: "Camicia", price: 39, category: "Shirts", picture: "images/shirt15.jpg" },
    { name: "Camicia", price: 39, category: "Shirts", picture: "images/shirt16.jpg" },
    { name: "Camicia", price: 39, category: "Shirts", picture: "images/shirt17.jpg" },
    { name: "Camicia", price: 35, category: "Shirts", picture: "images/shirt18.jpg" },
    { name: "Camicia", price: 35, category: "Shirts", picture: "images/shirt19.jpg" },
    { name: "Camicia", price: 35, category: "Shirts", picture: "images/shirt20.jpg" },
    { name: "Camicia", price: 80, category: "Shirts", picture: "images/shirt21.jpg" },
    { name: "Camicia", price: 65, category: "Shirts", picture: "images/shirt22.jpg" },
	
    { name: "Gonna", price: 60, category: "Skirts", picture: "images/skirt1.jpg" },
    { name: "Gonna", price: 60, category: "Skirts", picture: "images/skirt2.jpg" },
    { name: "Gonna", price: 60, category: "Skirts", picture: "images/skirt3.jpg" },
    { name: "Gonna", price: 75, category: "Skirts", picture: "images/skirt4.jpg" },
    { name: "Gonna", price: 75, category: "Skirts", picture: "images/skirt5.jpg" },
    { name: "Gonna", price: 25, category: "Skirts", picture: "images/skirt6.jpg" },
    { name: "Gonna", price: 35, category: "Skirts", picture: "images/skirt7.jpg" },
    { name: "Gonna", price: 60, category: "Skirts", picture: "images/skirt8.jpg" },
    { name: "Gonna", price: 120, category: "Skirts", picture: "images/skirt9.jpg" },
	
    { name: "Pantaloni", price: 25, category: "Pants", picture: "images/pants1.jpg" },
    { name: "Pantaloni", price: 20, category: "Pants", picture: "images/pants2.jpg" },
    { name: "Pantaloni", price: 20, category: "Pants", picture: "images/pants3.jpg" },
    { name: "Pantaloni", price: 20, category: "Pants", picture: "images/pants4.jpg" },
    { name: "Pantaloni", price: 20, category: "Pants", picture: "images/pants5.jpg" },
    { name: "Pantaloni", price: 45, category: "Pants", picture: "images/pants6.jpg" },
    { name: "Pantaloni", price: 65, category: "Pants", picture: "images/pants7.jpg" },
    { name: "Pantaloni", price: 65, category: "Pants", picture: "images/pants8.jpg" },
    { name: "Pantaloni", price: 65, category: "Pants", picture: "images/pants9.jpg" },
    { name: "Pantaloni", price: 65, category: "Pants", picture: "images/pants10.jpg" },
    { name: "Pantaloni", price: 65, category: "Pants", picture: "images/pants11.jpg" },
    { name: "Pantaloni", price: 65, category: "Pants", picture: "images/pants12.jpg" },
    { name: "Pantaloni", price: 65, category: "Pants", picture: "images/pants13.jpg" },
    { name: "Pantaloni", price: 65, category: "Pants", picture: "images/pants14.jpg" },
    { name: "Pantaloni", price: 65, category: "Pants", picture: "images/pants15.jpg" },
    { name: "Pantaloni", price: 65, category: "Pants", picture: "images/pants16.jpg" },
    { name: "Pantaloni", price: 65, category: "Pants", picture: "images/pants17.jpg" },
    { name: "Pantaloni", price: 65, category: "Pants", picture: "images/pants18.jpg" },
    { name: "Pantaloni", price: 35, category: "Pants", picture: "images/pants19.jpg" },
    { name: "Pantaloni", price: 65, category: "Pants", picture: "images/pants20.jpg" },
    { name: "Pantaloni", price: 65, category: "Pants", picture: "images/pants21.jpg" },
    { name: "Pantaloni", price: 35, category: "Pants", picture: "images/pants22.jpg" },
    { name: "Pantaloni", price: 35, category: "Pants", picture: "images/pants23.jpg" },
    { name: "Pantaloni", price: 65, category: "Pants", picture: "images/pants24.jpg" },
    { name: "Pantaloni", price: 20, category: "Pants", picture: "images/pants25.jpg" },
	
    { name: "Giacca", price: 75, category: "Jackets", picture: "images/jacket1.jpg" },
	
    { name: "Cappello", price: 35, category: "Hats", picture: "images/hat1.jpg" },
    { name: "Cappello", price: 15, category: "Hats", picture: "images/hat2.jpg" },
    { name: "Cappello", price: 15, category: "Hats", picture: "images/hat3.jpg" },
	
    { name: "Top", price: 35, category: "Tops", picture: "images/top1.jpg" },
    { name: "Top", price: 35, category: "Tops", picture: "images/top2.jpg" },
	
    { name: "Outfit", price: 120, category: "Outfits", picture: "images/fit1.jpg" },
    { name: "Outfit", price: 95, category: "Outfits", picture: "images/fit2.jpg" },
    { name: "Outfit", price: 85, category: "Outfits", picture: "images/fit3.jpg" },
    { name: "Outfit", price: 125, category: "Outfits", picture: "images/fit4.jpg" },
    { name: "Outfit", price: 50, category: "Outfits", picture: "images/fit5.jpg" },
    { name: "Outfit", price: 170, category: "Outfits", picture: "images/fit6.jpg" },
    { name: "Outfit", price: 115, category: "Outfits", picture: "images/fit7.jpg" },
    { name: "Outfit", price: 155, category: "Outfits", picture: "images/fit8.jpg" },
    { name: "Outfit", price: 100, category: "Outfits", picture: "images/fit9.jpg" },
    { name: "Outfit", price: 138, category: "Outfits", picture: "images/fit10.jpg" },
    { name: "Outfit", price: 164, category: "Outfits", picture: "images/fit11.jpg" },
    { name: "Outfit", price: 164, category: "Outfits", picture: "images/fit12.jpg" },
    { name: "Outfit", price: 128, category: "Outfits", picture: "images/fit13.jpg" },
    { name: "Outfit", price: 200, category: "Outfits", picture: "images/fit14.jpg" },
    { name: "Outfit", price: 85, category: "Outfits", picture: "images/fit15.jpg" },
    { name: "Outfit", price: 85, category: "Outfits", picture: "images/fit16.jpg" },
    { name: "Outfit", price: 75, category: "Outfits", picture: "images/fit17.jpg" },
  ]
};

let currentLang = "en";
let allproducts = [];

function attachContactMethodListeners() {
  const emailRadio = document.querySelector('input[name="method"][value="mail"]');
  const phoneRadio = document.querySelector('input[name="method"][value="Phone"]');
  const emailData = document.getElementById('emailData');
  const phoneData = document.getElementById('phoneData');
  if (!emailRadio || !phoneRadio || !emailData || !phoneData) return;
  emailRadio.addEventListener('change', function () {
    if (emailRadio.checked) {
      emailData.style.display = 'block';
      phoneData.style.display = 'none';
    }
  });
  phoneRadio.addEventListener('change', function () {
    if (phoneRadio.checked) {
      emailData.style.display = 'none';
      phoneData.style.display = 'block';
    }
  });
  // Inicijalno
  if (emailRadio.checked) {
    emailData.style.display = 'block';
    phoneData.style.display = 'none';
  } else if (phoneRadio.checked) {
    emailData.style.display = 'none';
    phoneData.style.display = 'block';
  }
}

function switchLanguage(lang) {
  currentLang = lang;
  allproducts = productsData[lang].map((product, i) => ({
    ...product,
    id: `p-${(i + 1).toString().padStart(4, "0")}`
  }));
  setTexts();
  showproducts();
  showBasket();
}

function setTexts() {
  const t = translations[currentLang];
  document.title = t.title;
  document.getElementById('mainTitle').innerText = t.title;
  document.getElementById('navProducts').innerText = t.navProducts;
  document.getElementById('navInfo').innerText = t.navInfo;
  document.getElementById('Basket').innerText = `${t.basket} (${productnumber})`;
  setCategoryMenu();
  document.getElementById('currentCategory').innerText = t.categoryTitle;
  document.getElementById('basketTitle').innerText = t.basketTitle;
  document.getElementById('totalLabel').innerText = t.totalLabel;
  document.getElementById('checkoutBtn').innerText = t.checkoutBtn;
  document.getElementById('checkoutHeader').innerText = t.checkoutHeader;
  document.getElementById('emailRadio').innerHTML = `<input type="radio" name="method" value="mail" checked /> ${t.emailRadio}`;
  document.getElementById('phoneRadio').innerHTML = `<input type="radio" name="method" value="Phone" /> ${t.phoneRadio}`;
  document.getElementById('nameSurnameInput').placeholder = t.namePlaceholder;
  document.getElementById('addressInput').placeholder = t.addressPlaceholder;
  document.getElementById('emailInput').placeholder = t.emailPlaceholder;
  document.getElementById('telInput').placeholder = t.phonePlaceholder;
  document.getElementById('paymentLabel').innerText = t.paymentLabel;
  const paymentSel = document.getElementById('paymentMethod');
  paymentSel.innerHTML = '';
  t.paymentMethods.forEach(p => {
    paymentSel.innerHTML += `<option value="${p}">${p}</option>`;
  });
  document.getElementById('buyBtn').innerText = t.buyBtn;
  document.getElementById('closeBtnLabel').innerText = t.closeBtn;
  document.getElementById('contactBox').innerHTML = t.contact;
  document.getElementById('locationBox').innerHTML = t.location;
  document.getElementById('workingBox').innerHTML = t.working;
  document.getElementById('otherInfoBox').innerHTML = t.otherInfo;
  attachContactMethodListeners();
}

function setCategoryMenu() {
  const t = translations[currentLang];
  const menu = document.getElementById('categoryMenu');
  menu.innerHTML = '';
  t.productCategories.forEach(cat => {
    menu.innerHTML += `<button onclick="filterProducts('${cat}')">${cat}</button>`;
  });
}

function showproducts(category = translations[currentLang].productCategories[0]) {
  const t = translations[currentLang];
  const container = document.getElementById("productList");
  container.innerHTML = "";
  let selectedCategory = null;

  if (category === t.productCategories[0]) { // All / Tutti
    selectedCategory = null;
  } else {
    // Ako je talijanski, prevedi kategoriju u engleski radi filtriranja
    if (currentLang === 'it') {
      const index = t.productCategories.indexOf(category);
      if (index > 0) {
        selectedCategory = translations.en.categoryNames[index - 1]; // index -1 jer prva kategorija je "All"
      }
    } else {
      selectedCategory = category;
    }
  }

  let filteredproducts = selectedCategory
    ? allproducts.filter(p => t.categoryNames.includes(p.category) && p.category === selectedCategory)
    : allproducts;

  filteredproducts.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <span class="product-id">ID: ${p.id}</span>
        <img src="${p.picture}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${t.totalLabel.replace(':','')}: ${p.price} €</p>
        <button onclick="addToBasket('${p.id}', '${p.name}', ${p.price})">${t.addBtn}</button>
      </div>
    `;
  });

  document.getElementById("currentCategory").innerText = selectedCategory
    ? category
    : t.categoryTitle;

  const buttons = document.querySelectorAll("#categoryMenu button");
  buttons.forEach(b => {
    if (b.innerText === category) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
}


function filterProducts(category) { showproducts(category); }
function addToBasket(id, name, price) {
  productnumber++;
  Products.push({ id, name, price });
  document.getElementById('Basket').innerText = `${translations[currentLang].basket} (${productnumber})`;
  showNotification(`${name} ${translations[currentLang].notificationAdd}`);
  saveBasket();
  showBasket();
}
function showNotification(text) {
  const notif = document.getElementById('notification');
  notif.innerText = text;
  notif.style.display = 'block';
  setTimeout(() => { notif.style.display = 'none'; }, 2000);
}
function showBasket() {
  const t = translations[currentLang];
  const list = document.getElementById('listProducts');
  let Total = 0;
  list.innerHTML = '';
  Products.forEach((p, index) => {
    list.innerHTML += `<div class="Basket-product">[ID: ${p.id}] ${p.name} - ${p.price} € 
      <button onclick="removeproduct(${index})">${t.removeBtn}</button></div>`;
    Total += p.price;
  });
  document.getElementById('Total').innerText = Total;
}
function removeproduct(index) {
  Products.splice(index, 1);
  productnumber = Products.length;
  document.getElementById('Basket').innerText = `${translations[currentLang].basket} (${productnumber})`;
  saveBasket();
  showBasket();
}
function toggleBasket() {
  const popup = document.getElementById('basketPopup');
  const darkening = document.getElementById('darkening');
  if (popup.style.display === 'flex') {
    popup.style.display = 'none';
    darkening.style.display = 'none';
    document.getElementById('checkoutForm').style.display = 'none';
    document.getElementById('checkoutBtn').style.display = 'block';
    document.getElementById('listProducts').style.display = 'block';
    document.getElementById('Total').parentElement.style.display = 'block';
  } else {
    showBasket();
    popup.style.display = 'flex';
    darkening.style.display = 'block';
  }
}
function showSection(id) {
  const sections = ['productSection', 'infoSection'];
  sections.forEach(s => {
    document.getElementById(s).classList.add('hiddenSection');
    document.getElementById(s).classList.remove('activeSection');
  });
  document.getElementById(id).classList.remove('hiddenSection');
  document.getElementById(id).classList.add('activeSection');
}
function showCheckout() {
  document.getElementById('checkoutForm').style.display = 'flex';
  document.getElementById('checkoutBtn').style.display = 'none';
  document.getElementById('listProducts').style.display = 'none';
  document.getElementById('Total').parentElement.style.display = 'none';
}
document.addEventListener("DOMContentLoaded", () => {
  loadBasket();
  switchLanguage('en');
  showSection('productSection');
  showproducts();
  document.getElementById('menuSelect').addEventListener('change', function() {
    switchLanguage(this.value);
  });
  attachContactMethodListeners();
});

function loadBasket() {
  const data = localStorage.getItem('Basket');
  if (data) {
    Products = JSON.parse(data);
    productnumber = Products.length;
    document.getElementById('Basket').innerText = `${translations[currentLang].basket} (${productnumber})`;
  }
}
function saveBasket() {
  localStorage.setItem('Basket', JSON.stringify(Products));
}
function sendOrder() {
  const t = translations[currentLang];
  if (Products.length === 0) {
    alert(t.basketEmpty);
    return;
  }
  const method = document.querySelector('input[name="method"]:checked').value;
  const nameSurname = document.getElementById('nameSurnameInput').value.trim();
  const address = document.getElementById('addressInput').value.trim();
  if (!nameSurname) {
    alert(t.namePlaceholder);
    return;
  }
  if (!address) {
    alert(t.addressPlaceholder);
    return;
  }
  let userContact = '';
  if (method === 'mail') {
    userContact = document.getElementById('emailInput').value.trim();
    if (!userContact || !userContact.includes('@')) {
      alert(t.emailPlaceholder);
      return;
    }
  } else {
    userContact = document.getElementById('telInput').value.trim();
    if (!userContact.match(/^[0-9+\s]+$/)) {
      alert(t.phonePlaceholder);
      return;
    }
  }
  const paymentMethod = document.getElementById('paymentMethod').value;
  let textOrder;
  if (currentLang === 'en') {
    textOrder = `New order by ${method}:\n\nName & surname: ${nameSurname}\nAddress: ${address}\nPayment method: ${paymentMethod}\n\nProducts:\n`;
  } else {
    textOrder = `Nuovo ordine tramite ${method}:\n\nNome e cognome: ${nameSurname}\nIndirizzo: ${address}\nMetodo di pagamento: ${paymentMethod}\n\nProdotti:\n`;
  }
  Products.forEach(p => {
    textOrder += `- [ID: ${p.id}] ${p.name} (${p.price} €)\n`;
  });
  const Total = Products.reduce((sum, p) => sum + p.price, 0);
  if (currentLang === 'en') {
    textOrder += `\nTotal: ${Total} €\n\nUser contact: ${userContact}`;
  } else {
    textOrder += `\nTotale: ${Total} €\n\nContatto: ${userContact}`;
  }
  if (method === 'mail') {
    const subject = currentLang === 'en'
      ? "Order from web shop"
      : "Ordine dal negozio online";
    const mailto = `mailto:kapidafrica@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(textOrder)}`;
    window.location.href = mailto;
  } else {
    const whatsappNumber = '+393511311348';
    const message = currentLang === 'en'
      ? `Hi,%20I%20would%20like%20to%20order%20via%20WhatsApp.%20Details:%0A${encodeURIComponent(textOrder)}`
      : `Ciao,%20vorrei%20ordinare%20tramite%20WhatsApp.%20Dettagli:%0A${encodeURIComponent(textOrder)}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }
  toggleBasket();
  Products = [];
  productnumber = 0;
  saveBasket();
  document.getElementById('Basket').innerText = `${t.basket} (0)`;
}

