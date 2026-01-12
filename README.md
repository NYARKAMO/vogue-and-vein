# vogue-and-vein
# Vogue & Vein

Pure HTML, CSS, and JavaScript luxury fashion website.

This project is intentionally built **without any frameworks, libraries, or build tools**. Everything runs locally by simply opening the HTML files in a browser.

---

## 📌 Project Goals

- Learn and practice **pure frontend fundamentals**
- Keep the project **simple, readable, and beginner-friendly**
- Allow multiple developers to work together without complexity
- Ensure the site works **offline and locally**

---

## 🧱 Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

❌ No frameworks (React, Angular, Vue)  
❌ No bundlers (Vite, Webpack)  
❌ No npm or node

---

## 📁 Project Structure

vogue-and-vein/
│
├── index.html
├── sustainability.html
├── shop.html
├── search.html
├── product-detail.html
├── size-guide.html
├── cart.html
├── success.html
├── account.html
├── returns.html
├── lookbook.html
├── stores.html
│
├── css/
│ ├── reset.css
│ ├── variables.css
│ ├── components.css
│ ├── main.css
│ ├── home.css
│ ├── sustainability.css
│ ├── shop.css
│ ├── search.css
│ ├── product.css
│ ├── size-guide.css
│ ├── cart.css
│ ├── success.css
│ ├── account.css
│ ├── returns.css
│ ├── lookbook.css
│ └── stores.css
│
├── js/
│ ├── helpers.js
│ ├── main.js
│ ├── home.js
│ ├── shop.js
│ ├── search.js
│ ├── product.js
│ ├── cart.js
│ └── account.js
│
├── assets/
│ ├── images/
│ ├── icons/
│ ├── fonts/
│ └── videos/
│
├── .gitignore
└── README.md


---

## 🔗 How Pages Work

Each HTML page:
- Has its **own page-specific CSS file**
- Uses shared global CSS files
- Uses shared JS (`main.js`, `helpers.js`)
- Optionally uses a page-specific JS file

### Example (`index.html`)

```html
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/main.css">
<link rel="stylesheet" href="css/home.css">

<script src="js/helpers.js"></script>
<script src="js/main.js"></script>
<script src="js/home.js"></script>
