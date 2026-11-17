
// ========================================
// OUTFIT RELOAD 2.0
// Main Store JavaScript
// ========================================

// WhatsApp number converted from the supplied
// Bangladesh mobile number. Change if needed.
const WHATSAPP_NUMBER = "8801404609228";

// ========================================
// DEMO PRODUCTS - 25 ITEMS
// ========================================

const products = [
  // SHIRTS
  {
    id: 1, name: "Classic White Shirt", category: "Shirts",
    price: 65, tag: "BESTSELLER",
    description: "Premium cotton shirt for a clean, elegant look.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black"],
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2, name: "Oxford Blue Shirt", category: "Shirts",
    price: 75, tag: "NEW",
    description: "Smart casual Oxford shirt for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "White"],
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3, name: "Premium Black Shirt", category: "Shirts",
    price: 80, tag: "",
    description: "Modern slim-fit shirt with a premium finish.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "Grey"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4, name: "Casual Linen Shirt", category: "Shirts",
    price: 70, tag: "TRENDING",
    description: "Lightweight linen style for relaxed days.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "White"],
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 5, name: "Striped Casual Shirt", category: "Shirts",
    price: 85, tag: "",
    description: "Contemporary stripes with a comfortable fit.",
    sizes: ["M", "L", "XL"],
    colors: ["Blue", "Brown"],
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80"
  },

  // PANTS
  {
    id: 6, name: "Classic Black Trousers", category: "Pants",
    price: 90, tag: "BESTSELLER",
    description: "Versatile trousers for formal and casual looks.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Black", "Grey"],
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 7, name: "Slim Fit Jeans", category: "Pants",
    price: 110, tag: "NEW",
    description: "Modern denim with a comfortable slim fit.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Blue", "Black"],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 8, name: "Beige Chino Pants", category: "Pants",
    price: 95, tag: "",
    description: "Clean everyday chinos with timeless styling.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Beige", "Black"],
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 9, name: "Relaxed Cargo Pants", category: "Pants",
    price: 105, tag: "TRENDING",
    description: "Utility-inspired design for a modern street look.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Black", "Olive"],
    image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 10, name: "Everyday Joggers", category: "Pants",
    price: 75, tag: "",
    description: "Soft and comfortable joggers for daily use.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Grey", "Black"],
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=700&q=80"
  },

  // T-SHIRTS
  {
    id: 11, name: "Essential White Tee", category: "T-Shirts",
    price: 35, tag: "BESTSELLER",
    description: "A timeless everyday essential.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 12, name: "Oversized Black Tee", category: "T-Shirts",
    price: 45, tag: "NEW",
    description: "Relaxed oversized fit with streetwear attitude.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "White"],
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 13, name: "Minimal Graphic Tee", category: "T-Shirts",
    price: 50, tag: "",
    description: "Minimal graphic design for casual styling.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Grey"],
    image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 14, name: "Premium Polo T-Shirt", category: "T-Shirts",
    price: 60, tag: "TRENDING",
    description: "Smart polo style for a polished appearance.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "White", "Black"],
    image: "https://images.unsplash.com/photo-1625910513413-5fc45e6d6c2e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 15, name: "Classic Grey Tee", category: "T-Shirts",
    price: 40, tag: "",
    description: "Soft fabric and an easy everyday fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Grey", "Black"],
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=80"
  },

  // WATCHES
  {
    id: 16, name: "Classic Silver Watch", category: "Watches",
    price: 150, tag: "NEW",
    description: "Elegant silver-tone watch for everyday style.",
    sizes: ["One Size"],
    colors: ["Silver", "Black"],
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 17, name: "Black Minimal Watch", category: "Watches",
    price: 125, tag: "",
    description: "Minimal black design with a modern finish.",
    sizes: ["One Size"],
    colors: ["Black"],
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 18, name: "Luxury Gold Watch", category: "Watches",
    price: 190, tag: "TRENDING",
    description: "Gold-tone styling for a statement look.",
    sizes: ["One Size"],
    colors: ["Gold", "Silver"],
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 19, name: "Sport Chronograph", category: "Watches",
    price: 175, tag: "",
    description: "Sport-inspired watch with bold styling.",
    sizes: ["One Size"],
    colors: ["Black", "Blue"],
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 20, name: "Brown Leather Watch", category: "Watches",
    price: 140, tag: "",
    description: "Classic brown strap with timeless appeal.",
    sizes: ["One Size"],
    colors: ["Brown", "Black"],
    image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=700&q=80"
  },

  // SHOES
  {
    id: 21, name: "Classic White Sneakers", category: "Shoes",
    price: 120, tag: "BESTSELLER",
    description: "Clean white sneakers for everyday outfits.",
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["White", "Black"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 22, name: "Urban Black Sneakers", category: "Shoes",
    price: 135, tag: "NEW",
    description: "Modern sneakers with an urban look.",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Black", "White"],
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 23, name: "Running Sport Shoes", category: "Shoes",
    price: 145, tag: "",
    description: "Sporty everyday shoes with a lightweight look.",
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["Black", "Blue"],
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 24, name: "Casual Beige Sneakers", category: "Shoes",
    price: 130, tag: "TRENDING",
    description: "Neutral sneakers that match almost any outfit.",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Beige", "White"],
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 25, name: "Classic Leather Loafers", category: "Shoes",
    price: 160, tag: "",
    description: "Smart casual loafers for a refined look.",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Brown", "Black"],
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=700&q=80"
  }
];

// ========================================
// STORE STATE
// ========================================

let selectedCategory = "All";
let cart = [];

try {
  cart = JSON.parse(localStorage.getItem("outfitReloadCart")) || [];
  if (!Array.isArray(cart)) cart = [];
} catch (error) {
  cart = [];
}

// ========================================
// HTML SAFETY
// ========================================

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

// ========================================
// DISPLAY PRODUCTS
// ========================================

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const searchInput = document.getElementById("searchInput");

  if (!grid) return;

  const searchTerm = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  const filtered = products.filter(product => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  const count = document.getElementById("productCount");

  if (count) {
    count.textContent = `${filtered.length} Products`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = "<p>No products found. Try another search.</p>";
    return;
  }

  grid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
        >
        ${product.tag
          ? `<span class="product-tag">${escapeHTML(product.tag)}</span>`
          : ""}
      </div>

      <div class="product-info">
        <p class="product-category">
          ${escapeHTML(product.category)}
        </p>

        <h3>${escapeHTML(product.name)}</h3>

        <p class="product-description">
          ${escapeHTML(product.description)}
        </p>

        <p class="product-price">
          AED ${product.price.toFixed(2)}
        </p>

        <div class="product-options">
          <select class="size-select" aria-label="Choose size">
            ${product.sizes.map(size =>
              `<option value="${escapeHTML(size)}">${escapeHTML(size)}</option>`
            ).join("")}
          </select>

          <select class="color-select" aria-label="Choose color">
            ${product.colors.map(color =>
              `<option value="${escapeHTML(color)}">${escapeHTML(color)}</option>`
            ).join("")}
          </select>
        </div>

        <button
          class="add-to-cart"
          data-id="${product.id}"
        >
          ADD TO BAG +
        </button>
      </div>
    </article>
  `).join("");
}

// ========================================
// CATEGORY FILTERS
// ========================================

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;

    document.querySelectorAll(".filter").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    renderProducts();
  });
});

document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    selectedCategory = card.dataset.category;

    document.querySelectorAll(".filter").forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.category === selectedCategory
      );
    });

    renderProducts();
  });
});

// ========================================
// SEARCH
// ========================================

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", renderProducts);
}

// ========================================
// CART FUNCTIONS
// ========================================

function saveCart() {
  localStorage.setItem("outfitReloadCart", JSON.stringify(cart));
  renderCart();
}

function addToCart(productId, size, color) {
  const product = products.find(item => item.id === productId);

  if (!product) return;

  const existing = cart.find(item =>
    item.id === productId &&
    item.size === size &&
    item.color === color
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: productId,
      size,
      color,
      quantity: 1
    });
  }

  saveCart();

  const cartButton = document.getElementById("cartButton");

  if (cartButton) {
    cartButton.textContent =
      `Bag (${cart.reduce((sum, item) => sum + item.quantity, 0)})`;
  }

  alert(product.name + " added to your shopping bag!");
}

// Add product buttons
document.addEventListener("click", event => {
  const button = event.target.closest(".add-to-cart");

  if (!button) return;

  const card = button.closest(".product-card");
  const productId = Number(button.dataset.id);

  const size = card.querySelector(".size-select").value;
  const color = card.querySelector(".color-select").value;

  addToCart(productId, size, color);
});

// ========================================
// RENDER SHOPPING BAG
// ========================================

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  if (!cartItems) return;

  let total = 0;
  let quantityTotal = 0;

  if (cart.length === 0) {
    cartItems.innerHTML =
      "<p style='padding:25px 0;color:#777'>Your shopping bag is empty.</p>";
  } else {
    cartItems.innerHTML = cart.map((item, index) => {
      const product = products.find(p => p.id === item.id);

      if (!product) return "";

      const itemTotal = product.price * item.quantity;

      total += itemTotal;
      quantityTotal += item.quantity;

      return `
        <div class="cart-item">
          <img src="${escapeHTML(product.image)}" alt="">
          <div class="cart-item-info">
            <h4>${escapeHTML(product.name)}</h4>
            <p>Size: ${escapeHTML(item.size)}</p>
            <p>Color: ${escapeHTML(item.color)}</p>
            <p>Quantity: ${item.quantity}</p>
            <p><strong>AED ${itemTotal.toFixed(2)}</strong></p>
            <button class="remove-item" data-index="${index}">
              Remove
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  if (cartCount) cartCount.textContent = quantityTotal;
  if (cartTotal) cartTotal.textContent = total.toFixed(2);

  const cartButton = document.getElementById("cartButton");

  if (cartButton) {
    cartButton.innerHTML = `Bag (<span id="cartCount">${quantityTotal}</span>)`;
  }
}

// Remove cart items
document.addEventListener("click", event => {
  const button = event.target.closest(".remove-item");

  if (!button) return;

  const index = Number(button.dataset.index);

  if (Number.isInteger(index) && index >= 0) {
    cart.splice(index, 1);
    saveCart();
  }
});

// ========================================
// OPEN AND CLOSE CART
// ========================================

const cartButton = document.getElementById("cartButton");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");

if (cartButton && cartOverlay) {
  cartButton.addEventListener("click", () => {
    cartOverlay.classList.add("open");
  });
}

if (closeCart && cartOverlay) {
  closeCart.addEventListener("click", () => {
    cartOverlay.classList.remove("open");
  });
}

if (cartOverlay) {
  cartOverlay.addEventListener("click", event => {
    if (event.target === cartOverlay) {
      cartOverlay.classList.remove("open");
    }
  });
}

// ========================================
// WHATSAPP CHECKOUT
// ========================================

const checkoutButton = document.getElementById("checkoutButton");

if (checkoutButton) {
  checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your shopping bag is empty!");
      return;
    }

    let total = 0;

    let message = "Hello OUTFIT RELOAD 2.0!\n";
    message += "I want to place a Cash on Delivery order.\n\n";
    message += "MY ORDER:\n";

    cart.forEach((item, index) => {
      const product = products.find(p => p.id === item.id);

      if (!product) return;

      const itemTotal = product.price * item.quantity;
      total += itemTotal;

      message += `${index + 1}. ${product.name}\n`;
      message += `Size: ${item.size}\n`;
      message += `Color: ${item.color}\n`;
      message += `Quantity: ${item.quantity}\n`;
      message += `Price: AED ${itemTotal.toFixed(2)}\n\n`;
    });

    message += `TOTAL: AED ${total.toFixed(2)}\n\n`;
    message += "Please confirm my order and delivery details.";

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  });
}

// ========================================
// MOBILE MENU
// ========================================

const menuButton = document.getElementById("menuButton");
const navigation = document.querySelector(".header nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("show");
    });
  });
}

// ========================================
// LANGUAGE DIRECTION
// Translation text will be added in
// the multilingual update.
// ========================================

const languageSelect = document.getElementById("language");

if (languageSelect) {
  languageSelect.addEventListener("change", () => {
    const language = languageSelect.value;

    document.documentElement.lang = language;
    document.documentElement.dir =
      language === "ar" ? "rtl" : "ltr";
  });
}

// ========================================
// CONTACT WHATSAPP LINK
// ========================================

const contactWhatsApp = document.querySelector(
  ".contact .primary-button"
);

if (contactWhatsApp) {
  contactWhatsApp.href =
    `https://wa.me/${WHATSAPP_NUMBER}`;
}

// ========================================
// FOOTER YEAR
// ========================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ========================================
// INITIALIZE STORE
// ========================================

renderProducts();
renderCart();

console.log("OUTFIT RELOAD 2.0 Store Loaded!");
