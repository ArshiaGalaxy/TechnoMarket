# 🛒 TechnoMarket

یک **قالب فروشگاه اینترنتی تکنولوژی، مدرن و واکنش‌گرا** که با استفاده از **HTML، Tailwind CSS، JavaScript، jQuery و Swiper.js** ساخته شده است.

TechnoMarket یک قالب رابط کاربری فروشگاه اینترنتی با تمرکز ویژه روی **زبان فارسی و رابط راست‌به‌چپ (RTL)** است و امکاناتی مانند حالت تاریک و روشن، جستجو، سبد خرید، منوی مگا، دسته‌بندی محصولات و رابط کاربری موبایل را ارائه می‌دهد.

> 🚧 **وضعیت پروژه:** قالب Frontend / پروژه رابط کاربری

---

## 🌐 زبان

🇬🇧 [English](README.md) | 🇮🇷 **فارسی**

---

## 📸 پیش‌نمایش



<div align="center">

  <img src="assets/home.webp" alt="TechnoMarket Home" height="2400px">
  
  <img src="assets/mobile.webp" alt="TechnoMarket Mobile" height="2400px">
  
  <img src="assets/dark_mode.webp" alt="TechnoMarket Dark Mode" height="2400px">
  
  <img src="assets/dark_mode_mobile.webp" alt="TechnoMarket Dark Mode Mobile" height="2400px">

</div>

---

## ✨ امکانات

* 🛒 رابط کاربری فروشگاه تکنولوژی
* 🇮🇷 پشتیبانی از زبان فارسی و RTL
* 📱 طراحی Responsive
* 🌙 حالت Dark / Light
* 🔎 رابط جستجوی محصولات
* 🧭 منوی واکنش‌گرا
* 📂 Mega Menu
* 🛍️ رابط کاربری سبد خرید
* 👤 رابط کاربری حساب کاربری
* 📱 منوی مخصوص موبایل
* 🎠 اسلایدر محصولات
* 📦 دسته‌بندی محصولات
* 🖥️ طراحی مناسب دسکتاپ و موبایل
* 🎨 استفاده از Tailwind CSS
* ⚡ معماری سبک Frontend

---

## 🛠️ تکنولوژی‌ها

| تکنولوژی        | کاربرد                   |
| --------------- | ------------------------ |
| HTML5           | ساختار صفحات             |
| CSS3            | استایل‌دهی               |
| Tailwind CSS    | استایل‌دهی Utility-first |
| JavaScript      | تعاملات صفحه             |
| jQuery          | مدیریت DOM و تعاملات     |
| Swiper.js       | اسلایدر و Carousel       |
| Fontiran / Dana | تایپوگرافی فارسی         |

بر اساس اطلاعات موجود در پروژه، تکنولوژی‌های اصلی شامل HTML، CSS، JavaScript، jQuery و Tailwind CSS هستند.

---

## 📂 ساختار پروژه

```text
TechnoMarket/
│
├── assets/
│   ├── css/
│   ├── font/
│   ├── image/
│   │   ├── base/
│   │   └── home/
│   └── js/
│
├── views/
│   ├── base.html
│   └── index.html
│
├── about.txt
├── package.json
├── tailwind.config.js
└── tailwind.test.js
```

ساختار پروژه بر پایه‌ی فایل‌های View و منابع جداگانه برای CSS، JavaScript، فونت و تصاویر طراحی شده است.

---

## 🏠 صفحه اصلی

صفحه اصلی شامل بخش‌های مختلف یک فروشگاه تکنولوژی است:

* Header
* Search Bar
* رابط نتایج جستجو
* حساب کاربری
* سبد خرید
* تغییر حالت Dark / Light
* منوی دسکتاپ
* Mega Menu
* منوی موبایل
* دسته‌بندی محصولات
* بخش‌های تبلیغاتی
* محصولات
* Footer

صفحه اصلی در `views/index.html` قرار دارد.

---

## 🔎 جستجوی محصولات

TechnoMarket دارای رابط جستجوی محصولات است که شامل موارد زیر می‌شود:

* Input جستجو
* دکمه جستجو
* نتایج دسته‌بندی
* نتایج محصولات
* پیشنهادهای جستجو
* طراحی Responsive

در نسخه فعلی، جستجو در سطح رابط کاربری پیاده‌سازی شده و Backend واقعی برای آن وجود ندارد.

---

## 📂 Mega Menu

منوی دسکتاپ دارای یک Mega Menu چندسطحی برای دسته‌بندی محصولات است.

برخی دسته‌بندی‌های فعلی شامل:

* 📱 موبایل
* 💻 لپ‌تاپ
* 📚 کتاب

برای دسته موبایل نیز نمونه‌هایی از برندها و محصولات مانند Samsung، Xiaomi، Poco و Redmi قرار داده شده است.

---

## 🌙 حالت تاریک

رابط کاربری از دو حالت پشتیبانی می‌کند:

* ☀️ Light Mode
* 🌙 Dark Mode

تغییر حالت از طریق Header انجام می‌شود و کلاس‌های Dark Mode مربوط به Tailwind در رابط استفاده شده‌اند.

---

## 📱 طراحی Responsive

قالب برای اندازه‌های مختلف صفحه طراحی شده است.

در دسکتاپ، منوی کامل و Mega Menu نمایش داده می‌شود و در نمایشگرهای کوچک‌تر، رابط به منوی مخصوص موبایل تبدیل می‌شود.

---

## 🚀 شروع کار

ابتدا repository را دریافت کنید:

```bash
git clone https://github.com/ArshiaGalaxy/TechnoMarket.git
cd TechnoMarket
```

پروژه در حال حاضر یک قالب Frontend است و برای اجرای رابط کاربری به Backend نیاز ندارد.

---

## 🎨 Tailwind CSS

پروژه دارای تنظیمات Tailwind CSS و یک Script برای تولید فایل CSS است.

ابتدا وابستگی‌ها را نصب کنید:

```bash
npm install
```

سپس Watcher مربوط به CSS را اجرا کنید:

```bash
npm run run_css
```

> **نکته:** در `package.json` فعلی، دستور توسعه CSS با نام `run_css` تعریف شده است.

---

## 🧩 معماری

ساختار کلی Frontend به شکل زیر است:

```text
Base Layout
     │
     ▼
  Header
     │
     ├── Search
     ├── Account
     ├── Cart
     └── Theme Toggle
     │
     ▼
 Navigation
     │
     └── Mega Menu
     │
     ▼
 Homepage
     │
     ├── Categories
     ├── Products
     ├── Promotions
     └── Content Sections
     │
     ▼
 Footer
```

---

## ⚠️ محدودیت‌های فعلی

TechnoMarket در حال حاضر یک **قالب Frontend** است و هنوز یک فروشگاه اینترنتی کامل نیست.

در نسخه فعلی موارد زیر وجود ندارند:

* Backend API
* Database
* سیستم Authentication واقعی
* سیستم پرداخت
* سبد خرید دائمی
* مدیریت واقعی محصولات
* مدیریت سفارش‌ها
* جستجوی Server-side

برخی لینک‌ها و تعاملات نیز در حال حاضر Placeholder هستند و برای توسعه‌های آینده آماده شده‌اند.

---


## 🤝 مشارکت

ایده‌ها، پیشنهادها، بهبودهای رابط کاربری و گزارش Bugها مورد استقبال هستند.

```bash
git checkout -b feature/my-feature
```

پس از اعمال تغییرات:

```bash
git add .
git commit -m "Add my feature"
git push origin feature/my-feature
```

سپس می‌توانید یک Pull Request ایجاد کنید.

---

## 📄 License

در `package.json` پروژه، **ISC License** مشخص شده است.

---

## 🌐 زبان

🇬🇧 [English](README.md) | 🇮🇷 **فارسی**
