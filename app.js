const products = [
  {
    id: "plain",
    category: "classic",
    price: 45, // TODO: Price placeholder. Update this number when final pricing is decided.
    zh: { name: "原味", desc: "淡淡麥香與微韌外皮，最適合抹果醬、奶油乳酪或做三明治。" },
    en: { name: "Plain", desc: "A clean wheat aroma with a chewy crust, ready for spreads or sandwiches." },
    color: "#d9a35a",
    toppings: []
  },
  {
    id: "whole-wheat",
    category: "classic",
    price: 48, // TODO: Price placeholder. Update this number when final pricing is decided.
    zh: { name: "全麥", desc: "全麥香氣更厚實，口感紮實但不乾，適合每天當早餐。" },
    en: { name: "Whole Wheat", desc: "Nutty whole wheat flavor with a hearty, breakfast-friendly bite." },
    color: "#b77b43",
    toppings: ["grain"]
  },
  {
    id: "multigrain",
    category: "classic",
    price: 52, // TODO: Price placeholder. Update this number when final pricing is decided.
    zh: { name: "雜糧穀物", desc: "混合穀物與種子，香氣層次豐富，咀嚼感最明顯。" },
    en: { name: "Multigrain", desc: "Seeds and grains create a layered aroma and a satisfying chew." },
    color: "#bf8546",
    toppings: ["grain", "sesame"]
  },
  {
    id: "sesame",
    category: "classic",
    price: 48, // TODO: Price placeholder. Update this number when final pricing is decided.
    zh: { name: "芝麻", desc: "烘烤白芝麻覆滿表面，越嚼越香。" },
    en: { name: "Sesame", desc: "Toasted sesame seeds cover the crust for a deep roasted aroma." },
    color: "#d49b51",
    toppings: ["sesame"]
  },
  {
    id: "jalapeno-cheese",
    category: "classic",
    price: 58, // TODO: Price placeholder. Update this number when final pricing is decided.
    zh: { name: "起司墨西哥辣椒", desc: "鹹香起司搭配微辣墨西哥辣椒，適合熱熱吃。" },
    en: { name: "Jalapeno Cheese", desc: "Savory cheese with mild jalapeno heat, best enjoyed warm." },
    color: "#d69a4b",
    toppings: ["cheese", "jalapeno"]
  },
  {
    id: "cinnamon-raisin",
    category: "classic",
    price: 52, // TODO: Price placeholder. Update this number when final pricing is decided.
    zh: { name: "肉桂葡萄", desc: "肉桂香氣與葡萄乾甜味，烤過後像甜點早餐。" },
    en: { name: "Cinnamon Raisin", desc: "Warm cinnamon and sweet raisins make a dessert-like breakfast." },
    color: "#b97843",
    toppings: ["raisin"]
  },
  {
    id: "cheese",
    category: "classic",
    price: 55, // TODO: Price placeholder. Update this number when final pricing is decided.
    zh: { name: "起司", desc: "表面烤出金黃起司，鹹香直接，做熱壓很合適。" },
    en: { name: "Cheese", desc: "Golden baked cheese on top, straightforward and savory." },
    color: "#d9964b",
    toppings: ["cheese"]
  },
  {
    id: "blueberry",
    category: "classic",
    price: 55, // TODO: Price placeholder. Update this number when final pricing is decided.
    zh: { name: "藍莓", desc: "麵糰帶果香與微酸甜，切開能看到紫藍色果粒。" },
    en: { name: "Blueberry", desc: "Fruity, lightly tart dough with blue-purple berry spots inside." },
    color: "#9c7896",
    toppings: ["blueberry"]
  },
  {
    id: "mixed-berry",
    category: "classic",
    price: 58, // TODO: Price placeholder. Update this number when final pricing is decided.
    zh: { name: "綜合莓果", desc: "莓果酸甜更明亮，適合搭配優格或奶油乳酪。" },
    en: { name: "Mixed Berry", desc: "Bright berry sweetness pairs beautifully with yogurt or cream cheese." },
    color: "#a76784",
    toppings: ["blueberry", "berry"]
  },
  {
    id: "onion-cheese",
    category: "classic",
    price: 58, // TODO: Price placeholder. Update this number when final pricing is decided.
    zh: { name: "洋蔥起司", desc: "洋蔥甜味與起司鹹香融合，適合鹹食派。" },
    en: { name: "Onion Cheese", desc: "Sweet onion and savory cheese for a richer salty profile." },
    color: "#cb8849",
    toppings: ["cheese", "onion"]
  },
  {
    id: "ruby-mochi-cheese",
    category: "filled",
    price: 72, // TODO: Price placeholder. Update this number when final pricing is decided.
    zh: { name: "紅玉貝果包黑糖麻糬奶酪", desc: "紅玉茶香貝果，包入黑糖麻糬與滑順奶酪。" },
    en: { name: "Ruby Tea Bagel with Brown Sugar Mochi Panna Cotta", desc: "Ruby tea dough filled with brown sugar mochi and creamy panna cotta." },
    color: "#b85b4b",
    filling: "#80502c",
    toppings: ["tea"]
  },
  {
    id: "coffee-strawberry",
    category: "filled",
    price: 72, // TODO: Price placeholder. Update this number when final pricing is decided.
    zh: { name: "咖啡貝果包草莓奶酪", desc: "咖啡麵糰微苦，草莓奶酪帶來酸甜平衡。" },
    en: { name: "Coffee Bagel with Strawberry Panna Cotta", desc: "Bittersweet coffee dough balanced by strawberry panna cotta." },
    color: "#7c5a45",
    filling: "#df6f84",
    toppings: ["coffee", "berry"]
  },
  {
    id: "purple-tuna-corn",
    category: "filled",
    price: 78, // TODO: Price placeholder. Update this number when final pricing is decided.
    zh: { name: "紫薯貝果包鮪魚玉米", desc: "紫薯自然甜味包著鹹香鮪魚玉米，甜鹹很平衡。" },
    en: { name: "Purple Sweet Potato Bagel with Tuna Corn", desc: "Purple sweet potato dough with a savory tuna and corn filling." },
    color: "#8f6aa6",
    filling: "#f0c66a",
    toppings: ["corn"]
  },
  {
    id: "tomato-pork-floss",
    category: "filled",
    price: 76, // TODO: Price placeholder. Update this number when final pricing is decided.
    zh: { name: "番茄貝果包辣味肉鬆", desc: "番茄香氣清爽，辣味肉鬆帶一點台式鹹香。" },
    en: { name: "Tomato Bagel with Spicy Pork Floss", desc: "Fresh tomato dough with spicy, savory pork floss." },
    color: "#cc6248",
    filling: "#b85c30",
    toppings: ["pepper"]
  },
  {
    id: "matcha-cream",
    category: "filled",
    price: 76, // TODO: Price placeholder. Update this number when final pricing is decided.
    zh: { name: "抹茶貝果包抹茶奶酥", desc: "雙重抹茶，茶苦韻搭配奶酥的甜香。" },
    en: { name: "Matcha Bagel with Matcha Milk Crumble", desc: "Double matcha with gentle bitterness and sweet milky crumble." },
    color: "#6f873f",
    filling: "#a7b35b",
    toppings: ["matcha"]
  },
  {
    id: "pumpkin-cheese",
    category: "filled",
    price: 76, // TODO: Price placeholder. Update this number when final pricing is decided.
    zh: { name: "南瓜貝果包南瓜乳酪", desc: "南瓜香甜柔和，內餡是濃郁南瓜乳酪。" },
    en: { name: "Pumpkin Bagel with Pumpkin Cream Cheese", desc: "Soft pumpkin sweetness with a rich pumpkin cream cheese center." },
    color: "#d88736",
    filling: "#f0a343",
    toppings: ["pumpkin"]
  },
  {
    id: "red-pepper-sausage",
    category: "filled",
    price: 82, // TODO: Price placeholder. Update this number when final pricing is decided.
    zh: { name: "紅椒貝果包德腸起司", desc: "紅椒麵糰包入德腸與起司，鹹香飽足。" },
    en: { name: "Red Pepper Bagel with Sausage Cheese", desc: "Red pepper dough filled with sausage and melted cheese." },
    color: "#c74f3d",
    filling: "#d49b4a",
    toppings: ["pepper", "cheese"]
  }
];

const i18n = {
  zh: {
    topStrip: "新鮮出爐貝果｜滿 12 入可自選口味｜本週冷凍宅配免運",
    navHome: "主頁",
    navMenu: "菜單",
    navShop: "購物頁面",
    navCart: "購物車",
    navFaq: "常見問題",
    searchLabel: "搜尋網站",
    accountCta: "新帳戶",
    cartShort: "購物車",
    heroKicker: "台灣烘焙室 · 手感貝果 · 每日小批量",
    heroTitle: "ACCDENT OVEN",
    heroText: "參考紐約貝果店的自選盒購物體驗，做成更溫暖的街角烘焙網站：從原味、芝麻到包餡甜鹹口味，都能直接加入購物車。",
    heroShop: "開始選貝果",
    heroMenu: "查看菜單",
    freshKicker: "Boiled, then baked",
    freshTitle: "外皮微韌、內裡鬆軟，剛好適合每天早晨。",
    freshText: "菜單和購物頁分開：菜單適合瀏覽口味與切面，購物頁則可以快速選數量、加入購物車、計算小計。",
    menuKicker: "Menu",
    menuTitle: "貝果菜單",
    menuText: "每個口味都有同角度商品圖與切面圖，方便客戶比較口味和餡料。",
    filterAll: "全部",
    filterClassic: "無包餡",
    filterFilled: "包餡",
    shopKicker: "Build your box",
    shopTitle: "購物頁面",
    shopText: "每種貝果都能單獨選數量加入購物車，之後可在購物車調整。",
    cartKicker: "Cart",
    cartTitle: "購物車",
    summaryTitle: "訂單摘要",
    summaryItems: "商品數量",
    summarySubtotal: "小計",
    checkout: "送出預訂",
    checkoutNote: "示範網站不會真的付款，送出後會顯示訂單資訊。",
    faqKicker: "FAQ",
    faqTitle: "常見問題",
    accountTitle: "建立新帳戶",
    accountText: "帳號可使用 Email 或手機號碼，方便查詢預訂與宅配資訊。",
    accountId: "Email 或手機號碼",
    accountName: "姓名",
    accountSubmit: "建立帳戶",
    classic: "無包餡",
    filled: "包餡",
    topView: "完整外觀",
    cutView: "自然切面",
    add: "加入購物車",
    emptyCart: "購物車目前是空的，先去購物頁面挑幾個貝果吧。",
    orderReady: "預訂資料已建立：",
    searchPlaceholder: "搜尋口味、保存、加熱..."
  },
  en: {
    topStrip: "Fresh baked bagels | Build your own 12-pack | Frozen delivery promo this week",
    navHome: "Home",
    navMenu: "Menu",
    navShop: "Shop",
    navCart: "Cart",
    navFaq: "FAQ",
    searchLabel: "Search site",
    accountCta: "New Account",
    cartShort: "Cart",
    heroKicker: "Taiwan bakery · Hand-shaped bagels · Small batches daily",
    heroTitle: "ACCDENT OVEN",
    heroText: "A warm neighborhood bagel shop inspired by New York build-a-box ordering: from plain and sesame to sweet and savory filled bagels, every flavor can go straight into the cart.",
    heroShop: "Start Shopping",
    heroMenu: "View Menu",
    freshKicker: "Boiled, then baked",
    freshTitle: "Chewy crust, soft center, ready for better mornings.",
    freshText: "The menu is for browsing flavors and cross-sections, while the shop page is built for quick quantities, cart adds, and subtotal checks.",
    menuKicker: "Menu",
    menuTitle: "Bagel Menu",
    menuText: "Each flavor includes a matching product view and a natural cutaway view for easy comparison.",
    filterAll: "All",
    filterClassic: "Classic",
    filterFilled: "Filled",
    shopKicker: "Build your box",
    shopTitle: "Shop",
    shopText: "Choose quantities for each flavor, add them to the cart, and adjust later.",
    cartKicker: "Cart",
    cartTitle: "Shopping Cart",
    summaryTitle: "Order Summary",
    summaryItems: "Items",
    summarySubtotal: "Subtotal",
    checkout: "Send Preorder",
    checkoutNote: "Demo site only. No real payment is processed.",
    faqKicker: "FAQ",
    faqTitle: "Frequently Asked Questions",
    accountTitle: "Create Account",
    accountText: "Use an email or mobile number so customers can track preorders and delivery details.",
    accountId: "Email or mobile number",
    accountName: "Name",
    accountSubmit: "Create Account",
    classic: "Classic",
    filled: "Filled",
    topView: "Whole view",
    cutView: "Cutaway",
    add: "Add to Cart",
    emptyCart: "Your cart is empty. Pick a few bagels from the shop page first.",
    orderReady: "Preorder created:",
    searchPlaceholder: "Search flavors, storage, reheating..."
  }
};

const faq = [
  {
    zh: { q: "貝果可以保存多久？", a: "常溫建議當天食用；冷藏約 2 天；冷凍可保存約 14 到 21 天。包餡口味建議冷凍保存，退冰後再加熱。" },
    en: { q: "How long do the bagels keep?", a: "Room temperature is best for same-day eating. Refrigerate for about 2 days, or freeze for 14 to 21 days. Filled bagels are best kept frozen and reheated after thawing." }
  },
  {
    zh: { q: "要怎麼加熱？", a: "冷凍貝果可先退冰 10 到 20 分鐘，噴少量水後用烤箱 180°C 烤 5 到 8 分鐘。包餡口味可用 160°C 烤 8 到 10 分鐘，讓中心慢慢回溫。" },
    en: { q: "How should I reheat them?", a: "Thaw frozen bagels for 10 to 20 minutes, mist lightly with water, then bake at 180°C for 5 to 8 minutes. Filled bagels reheat better at 160°C for 8 to 10 minutes." }
  },
  {
    zh: { q: "可以切半冷凍嗎？", a: "可以。建議收到後先切半、單顆密封，再冷凍保存。要吃時不用硬切冷凍貝果，會更安全也更方便。" },
    en: { q: "Can I freeze them sliced?", a: "Yes. Slice, wrap individually, and freeze. It makes reheating safer and more convenient." }
  },
  {
    zh: { q: "包餡貝果會不會需要冷藏？", a: "短時間運送後請盡快冷凍或冷藏；若 24 小時內食用可冷藏，超過一天建議冷凍。" },
    en: { q: "Do filled bagels need refrigeration?", a: "After delivery, refrigerate or freeze as soon as possible. Refrigeration is fine if eaten within 24 hours; otherwise freeze them." }
  },
  {
    zh: { q: "帳號可以用什麼申請？", a: "可以使用 Email 或手機號碼作為帳號，之後可用來查詢預訂與聯絡資料。" },
    en: { q: "What can I use to create an account?", a: "Customers can use either an email address or mobile number to create an account and track preorder details." }
  }
];

let lang = "zh";
const cart = new Map();

const sourceImage = document.querySelector("#sourceBagel");
const menuGrid = document.querySelector("#menuGrid");
const shopGrid = document.querySelector("#shopGrid");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const summaryQty = document.querySelector("#summaryQty");
const summarySubtotal = document.querySelector("#summarySubtotal");
const faqList = document.querySelector("#faqList");
const searchInput = document.querySelector("#siteSearch");

function t(key) {
  return i18n[lang][key] || key;
}

function money(value) {
  return `NT$${value.toLocaleString("zh-TW")}`;
}

function productText(product) {
  return product[lang];
}

function drawBagel(canvas, product, mode = "whole") {
  const ctx = canvas.getContext("2d");
  const { width: w, height: h } = canvas;
  ctx.clearRect(0, 0, w, h);
  if (sourceImage.complete) {
    ctx.drawImage(sourceImage, 0, 0, w, h);
  }
  ctx.fillStyle = "rgba(245, 229, 197, 0.42)";
  ctx.fillRect(0, 0, w, h);

  ctx.save();
  ctx.translate(w * 0.5, h * 0.55);
  ctx.rotate(-0.05);

  const outer = { x: -210, y: -105, w: 420, h: 210 };
  const inner = { x: -70, y: -42, w: 140, h: 84 };
  const grad = ctx.createRadialGradient(-70, -80, 40, 0, 0, 250);
  grad.addColorStop(0, lighten(product.color, 32));
  grad.addColorStop(0.55, product.color);
  grad.addColorStop(1, darken(product.color, 18));

  if (mode === "cut") {
    ctx.beginPath();
    ctx.ellipse(-95, 0, 145, 95, -0.18, 0, Math.PI * 2);
    ctx.ellipse(110, 0, 145, 95, 0.18, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "rgba(96, 58, 24, 0.5)";
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(0, 8, 155, 78, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#f2c783";
    ctx.fill();

    if (product.category === "filled") {
      ctx.beginPath();
      ctx.ellipse(0, 10, 104, 48, 0, 0, Math.PI * 2);
      ctx.fillStyle = product.filling;
      ctx.fill();
      ctx.globalAlpha = 0.55;
      ctx.beginPath();
      ctx.ellipse(-18, -4, 54, 18, -0.15, 0, Math.PI * 2);
      ctx.fillStyle = "#fff8e8";
      ctx.fill();
      ctx.globalAlpha = 1;
    } else {
      drawCrumb(ctx, product);
    }
  } else {
    ctx.beginPath();
    ctx.ellipse(0, 0, outer.w / 2, outer.h / 2, 0, 0, Math.PI * 2);
    ctx.ellipse(0, 0, inner.w / 2, inner.h / 2, 0, 0, Math.PI * 2, true);
    ctx.fillStyle = grad;
    ctx.fill("evenodd");
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgba(96, 58, 24, 0.42)";
    ctx.stroke();
    drawToppings(ctx, product);
  }

  ctx.restore();
}

function drawToppings(ctx, product) {
  const spots = [
    [-130, -54], [-58, -70], [22, -66], [102, -42], [-112, 26], [-18, 46], [92, 30],
    [-160, -2], [158, 0], [40, -6], [-52, 2]
  ];
  product.toppings.forEach((type, index) => {
    spots.forEach(([x, y], i) => {
      if ((i + index) % 2) return;
      ctx.save();
      ctx.translate(x + index * 6, y - index * 3);
      ctx.rotate((i - 3) * 0.2);
      if (type === "sesame") seed(ctx, "#f7e6b6", 9, 4);
      if (type === "grain") seed(ctx, "#705036", 10, 5);
      if (type === "cheese") cheese(ctx);
      if (type === "jalapeno") ring(ctx, "#6b7d35", "#d8b04a");
      if (type === "raisin") dot(ctx, "#4c2e28", 11);
      if (type === "blueberry") dot(ctx, "#3b416f", 10);
      if (type === "berry") dot(ctx, "#9e2458", 9);
      if (type === "onion") seed(ctx, "#f2ddae", 14, 5);
      if (type === "tea") seed(ctx, "#7f473a", 8, 4);
      if (type === "coffee") dot(ctx, "#3c281d", 9);
      if (type === "corn") dot(ctx, "#f0c34b", 8);
      if (type === "pepper") dot(ctx, "#9e3328", 8);
      if (type === "matcha") seed(ctx, "#4d642f", 9, 4);
      if (type === "pumpkin") seed(ctx, "#f3b24f", 12, 5);
      ctx.restore();
    });
  });
}

function drawCrumb(ctx, product) {
  ctx.fillStyle = "rgba(112, 77, 38, 0.25)";
  for (let i = 0; i < 34; i += 1) {
    const x = -120 + Math.random() * 240;
    const y = -42 + Math.random() * 84;
    ctx.beginPath();
    ctx.ellipse(x, y, 3 + Math.random() * 5, 2 + Math.random() * 4, Math.random(), 0, Math.PI * 2);
    ctx.fill();
  }
  if (product.toppings.includes("blueberry") || product.toppings.includes("berry")) {
    ctx.fillStyle = product.toppings.includes("berry") ? "#9e2458" : "#3b416f";
    for (let i = 0; i < 7; i += 1) {
      ctx.beginPath();
      ctx.arc(-95 + Math.random() * 190, -32 + Math.random() * 64, 6, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function seed(ctx, color, rx, ry) {
  ctx.beginPath();
  ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function dot(ctx, color, r) {
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function ring(ctx, color, center) {
  ctx.beginPath();
  ctx.ellipse(0, 0, 16, 12, 0, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(0, 0, 7, 5, 0, 0, Math.PI * 2);
  ctx.fillStyle = center;
  ctx.fill();
}

function cheese(ctx) {
  ctx.beginPath();
  ctx.roundRect(-18, -8, 36, 16, 6);
  ctx.fillStyle = "#e5a93f";
  ctx.fill();
}

function lighten(hex, amount) {
  return shade(hex, amount);
}

function darken(hex, amount) {
  return shade(hex, -amount);
}

function shade(hex, amount) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 255) + amount));
  const b = Math.max(0, Math.min(255, (n & 255) + amount));
  return `rgb(${r}, ${g}, ${b})`;
}

function art(product, mode) {
  const node = document.querySelector("#bagelArtTemplate").content.firstElementChild.cloneNode(true);
  requestAnimationFrame(() => drawBagel(node, product, mode));
  return node;
}

function renderMenu() {
  menuGrid.innerHTML = "";
  products.forEach(product => {
    const text = productText(product);
    const card = document.createElement("article");
    card.className = "menu-card";
    card.dataset.category = product.category;
    card.dataset.search = `${product.zh.name} ${product.zh.desc} ${product.en.name} ${product.en.desc}`;

    const pair = document.createElement("div");
    pair.className = "art-pair";
    pair.append(art(product, "whole"), art(product, "cut"));

    const body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML = `
      <span class="tag">${t(product.category)}</span>
      <h3>${text.name}</h3>
      <p>${text.desc}</p>
      <p class="tiny">${t("topView")} / ${t("cutView")}</p>
    `;

    card.append(pair, body);
    menuGrid.append(card);
  });
}

function renderShop() {
  shopGrid.innerHTML = "";
  products.forEach(product => {
    const text = productText(product);
    const card = document.createElement("article");
    card.className = "shop-card";
    card.dataset.search = `${product.zh.name} ${product.zh.desc} ${product.en.name} ${product.en.desc}`;
    card.innerHTML = `
      <div class="shop-top">
        <div class="art-slot"></div>
        <div>
          <span class="tag">${t(product.category)}</span>
          <h3>${text.name}</h3>
          <p>${text.desc}</p>
        </div>
      </div>
      <div class="shop-actions">
        <span class="price">${money(product.price)}</span>
        <div class="qty-control">
          <button type="button" data-step="-1" aria-label="minus">−</button>
          <input value="1" inputmode="numeric" aria-label="quantity" />
          <button type="button" data-step="1" aria-label="plus">+</button>
        </div>
      </div>
      <button class="solid-btn wide" type="button">${t("add")}</button>
    `;
    card.querySelector(".art-slot").append(art(product, "whole"));
    const input = card.querySelector("input");
    card.querySelectorAll("[data-step]").forEach(button => {
      button.addEventListener("click", () => {
        input.value = Math.max(1, Number(input.value || 1) + Number(button.dataset.step));
      });
    });
    card.querySelector(".solid-btn").addEventListener("click", () => addToCart(product.id, Number(input.value || 1)));
    shopGrid.append(card);
  });
}

function renderFaq() {
  faqList.innerHTML = "";
  faq.forEach(item => {
    const entry = document.createElement("article");
    entry.className = "faq-item";
    entry.dataset.search = `${item.zh.q} ${item.zh.a} ${item.en.q} ${item.en.a}`;
    entry.innerHTML = `<button type="button">${item[lang].q}<span>+</span></button><p>${item[lang].a}</p>`;
    entry.querySelector("button").addEventListener("click", () => entry.classList.toggle("open"));
    faqList.append(entry);
  });
}

function addToCart(id, qty) {
  cart.set(id, (cart.get(id) || 0) + qty);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let qty = 0;
  let subtotal = 0;
  if (!cart.size) {
    cartItems.innerHTML = `<p class="cart-item">${t("emptyCart")}</p>`;
  }

  cart.forEach((amount, id) => {
    const product = products.find(item => item.id === id);
    const text = productText(product);
    qty += amount;
    subtotal += amount * product.price;
    const row = document.createElement("article");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="art-slot"></div>
      <div>
        <h3>${text.name}</h3>
        <p class="tiny">${money(product.price)} × ${amount}</p>
        <div class="qty-control">
          <button type="button" data-step="-1">−</button>
          <input value="${amount}" inputmode="numeric" />
          <button type="button" data-step="1">+</button>
        </div>
      </div>
      <strong class="line-total">${money(amount * product.price)}</strong>
    `;
    row.querySelector(".art-slot").append(art(product, "whole"));
    row.querySelectorAll("[data-step]").forEach(button => {
      button.addEventListener("click", () => {
        const next = amount + Number(button.dataset.step);
        if (next <= 0) cart.delete(id);
        else cart.set(id, next);
        renderCart();
      });
    });
    row.querySelector("input").addEventListener("change", event => {
      const next = Math.max(0, Number(event.target.value || 0));
      if (next === 0) cart.delete(id);
      else cart.set(id, next);
      renderCart();
    });
    cartItems.append(row);
  });
  cartCount.textContent = qty;
  summaryQty.textContent = qty;
  summarySubtotal.textContent = money(subtotal);
}

function applyLanguage() {
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-i18n]").forEach(node => {
    node.textContent = t(node.dataset.i18n);
  });
  searchInput.placeholder = t("searchPlaceholder");
  document.querySelector("#langToggle").textContent = lang === "zh" ? "EN" : "中文";
  renderMenu();
  renderShop();
  renderFaq();
  renderCart();
}

function applySearch() {
  const term = searchInput.value.trim().toLowerCase();
  document.querySelectorAll(".search-scope, .menu-card, .shop-card, .faq-item").forEach(node => {
    const haystack = `${node.textContent} ${node.dataset.search || ""}`.toLowerCase();
    node.classList.toggle("hidden-by-search", term && !haystack.includes(term));
  });
}

document.querySelector("#langToggle").addEventListener("click", () => {
  lang = lang === "zh" ? "en" : "zh";
  applyLanguage();
});

document.querySelector("#accountOpen").addEventListener("click", () => {
  document.querySelector("#accountDialog").showModal();
});

document.querySelector(".account-form").addEventListener("submit", event => {
  const id = document.querySelector("#accountId").value;
  const name = document.querySelector("#accountName").value;
  if (id && name) {
    setTimeout(() => alert(`${t("accountTitle")}: ${name} / ${id}`), 0);
  }
});

document.querySelector("#checkoutBtn").addEventListener("click", () => {
  const lines = [...cart].map(([id, qty]) => {
    const product = products.find(item => item.id === id);
    return `${productText(product).name} × ${qty}`;
  });
  alert(lines.length ? `${t("orderReady")}\n${lines.join("\n")}` : t("emptyCart"));
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".menu-card").forEach(card => {
      card.classList.toggle("hidden-by-filter", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

searchInput.addEventListener("input", applySearch);
sourceImage.addEventListener("load", applyLanguage);
if (sourceImage.complete) applyLanguage();
