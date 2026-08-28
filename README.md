<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:7C3AED,50:EC4899,100:06B6D4&height=200&section=header&text=🛒%20Stylish%20Wear%20Aesthetics&fontSize=48&fontColor=ffffff&fontAlignY=35&desc=Shop%20%E2%80%A2%20Manage%20%E2%80%A2%20Analyze&descAlignY=58&descSize=17&animation=fadeIn" width="100%"/>

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Poppins&size=22&duration=3000&pause=1000&color=EC4899&center=true&vCenter=true&width=700&lines=Full-Stack+E-Commerce+Platform;Secure+Authentication+%E2%80%A2+Role-Based+Dashboards;Built+with+React+%2B+Node.js+%2B+MongoDB+%2B+Redis" alt="Typing SVG" />

<br/><br/>

<a href="https://stylish-wear-aesthetics-ctjc.vercel.app/">
  <img src="https://img.shields.io/badge/🚀_Live_Demo-brightgreen?style=for-the-badge" />
</a>
<a href="https://github.com/shubham-kumar145/Stylish_Wear_Aesthetics">
  <img src="https://img.shields.io/badge/📦_GitHub_Repository-181717?style=for-the-badge&logo=github&logoColor=white" />
</a>
<a href="https://shubhamkumar.me">
  <img src="https://img.shields.io/badge/👨‍💻_Portfolio-7C3AED?style=for-the-badge&logo=vercel&logoColor=white" />
</a>

<br/><br/>

<img src="https://skillicons.dev/icons?i=react,nodejs,express,mongodb,redis,tailwind,jwt,axios&theme=dark" />

</div>

---

## 📌 Overview

**Stylish Wear Aesthetics** is a full-stack e-commerce platform designed to provide a secure and scalable shopping experience along with powerful role-based management dashboards.

The platform supports multiple user roles — **Admin, Staff, Seller, and User** — with controlled access to features through **Role-Based Access Control (RBAC)**.

The application combines **React, Node.js, Express.js, MongoDB, Redis, and JWT authentication** to handle shopping workflows, product management, secure sessions, inventory operations, and sales analytics.

---

## ✨ Features

|      🛍️ Shopping      |  🔐 Authentication | 👥 Role Management |
| :--------------------: | :----------------: | :----------------: |
|    Product browsing    | JWT authentication |        Admin       |
|     Product details    |   Secure cookies   |        Staff       |
|    Purchase tracking   |   Redis sessions   |       Seller       |
| Responsive shopping UI |   Protected APIs   |        User        |

| 📦 Product Management |    📊 Analytics   |     ⚡ Performance     |
| :-------------------: | :---------------: | :-------------------: |
|      Add products     |   Sales tracking  |     Redis caching     |
|    Update products    |  Revenue insights |     Optimized APIs    |
|    Remove products    |  Monthly reports  |   Efficient sessions  |
|  Inventory management | Product analytics | Scalable architecture |

---

# 👑 Role-Based Dashboards

The application provides dedicated dashboards based on the authenticated user's role.

### 👑 Admin

* Manage users and roles
* Add, update, and remove products
* Monitor platform-wide sales
* View revenue analytics
* Track monthly performance
* Access administrative controls

### 🧑‍💼 Staff

* Manage product inventory
* Monitor sales performance
* View operational analytics
* Assist with product management

### 🏪 Seller

* Add owned products
* Update product information
* Remove owned products
* Manage inventory
* View product-wise sales analytics

### 🛍️ User

* Browse available products
* View detailed product information
* Make purchases
* Track purchase activity
* Manage authenticated sessions

---

# 🛠️ Tech Stack

<div align="center">

<img src="https://img.shields.io/badge/REACT-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/NODE.JS-339933?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/EXPRESS-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/MONGODB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/REDIS-DC382D?style=for-the-badge&logo=redis&logoColor=white" />
<img src="https://img.shields.io/badge/TAILWIND_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
<img src="https://img.shields.io/badge/AXIOS-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />

</div>

| Layer                    | Technology              |
| :----------------------- | :---------------------- |
| 🎨 **Frontend**          | React.js · Tailwind CSS |
| ⚙️ **Backend**           | Node.js · Express.js    |
| 🗄️ **Database**         | MongoDB · Mongoose      |
| ⚡ **Caching & Sessions** | Redis                   |
| 🔐 **Authentication**    | JWT · Secure Cookies    |
| 🌐 **HTTP Client**       | Axios                   |
| 🔌 **API Architecture**  | REST APIs               |

---

# 🏗️ Architecture

```text
                         🛒 STYLISH WEAR AESTHETICS
                                      │
                    ┌─────────────────┴─────────────────┐
                    │                                   │
             ⚛️ React Frontend                    ⚙️ Node.js Backend
                    │                                   │
          ┌─────────┼─────────┐             ┌───────────┼───────────┐
          │         │         │             │           │           │
       🛍️ Shop   👑 Dashboards 🔐 Auth    🌐 REST API  🗄️ MongoDB  ⚡ Redis
          │         │         │             │           │           │
          └─────────┼─────────┘             └───────────┼───────────┘
                    │                                   │
                    └──────────── Axios / REST ─────────┘
```

---

# 🧩 Modular System Architecture

```text
                              🛒 E-COMMERCE SYSTEM
                                      │
             ┌────────────────────────┴────────────────────────┐
             │                                                 │
      🖥️ CLIENT MODULE                                  ⚙️ SERVER MODULE
             │                                                 │
   ┌─────────┼─────────┬─────────┐              ┌──────────────┼──────────────┐
   │         │         │         │              │              │              │
 🔐 Auth   🛍️ Shop   👑 Dashboard 📦 Products  🔐 Auth API   📦 Product API  📊 Analytics
 Module    Module      Module      Module       Module         Module          Module
   │         │         │         │              │              │              │
 Login     Browse    Admin       Product       JWT issue      CRUD           Sales
 Register  Products  Staff       listing       verify         operations     reports
 Sessions  Details  Seller      Details        RBAC           validation     revenue
           Purchase  User       Inventory      sessions       inventory      metrics
```

### How the modules connect

* The **Auth Module** communicates with the **Auth API** for login, registration, JWT verification, and session management.
* The **Shop Module** communicates with backend REST APIs to retrieve products and process shopping-related operations.
* The **Dashboard Module** exposes functionality based on the authenticated user's role.
* The **Product Module** handles product creation, updates, deletion, and inventory operations.
* The **Analytics Module** processes sales and revenue data for authorized dashboard users.
* **Redis** is used for session/token storage and validation.
* **MongoDB** provides persistent storage for users, products, purchases, and application data.

---

# 🔐 Authentication & Security

Security is a core part of the application architecture.

### Authentication Flow

```text
        👤 User
           │
           ▼
     🔐 Login / Register
           │
           ▼
      ⚙️ Auth API
           │
           ├──────────────► 🗄️ MongoDB
           │
           ▼
       🎫 JWT Token
           │
           ▼
      ⚡ Redis Session
           │
           ▼
    🔒 Protected APIs
           │
           ▼
       👑 RBAC Check
           │
           ▼
    Authorized Resource
```

### Security Features

* 🔐 JWT-based authentication
* 🍪 Secure cookie handling
* ⚡ Redis-based session/token validation
* ⏱️ Session timeout handling
* 🚫 Token invalidation after logout
* 🛡️ Protected API routes
* 👥 Role-Based Access Control
* 🔒 Authorization middleware
* ♻️ Secure session lifecycle management

---

# 📦 Product Management System

The platform provides role-controlled product management capabilities.

### Product Operations

* ➕ Add new products
* ✏️ Update product information
* ❌ Remove products
* 🖼️ View dedicated product details
* 📦 Manage inventory
* 🏷️ Organize product listings
* 🔒 Restrict product operations based on user role

---

# 📊 Analytics & Reporting

Role-specific dashboards provide insights into platform performance.

### Metrics

* 📈 Total sales
* 💰 Revenue performance
* 📦 Product inventory
* 📅 Monthly sales
* 🛍️ Product-wise performance
* 👥 Role-specific reporting

Analytics access is controlled through the application's authorization system so that users only access information permitted by their role.

---

# 🎨 UI/UX Highlights

* ✨ Clean and modern interface
* 📱 Fully responsive design
* 🛒 Intuitive shopping workflow
* 👑 Dedicated role-based dashboards
* 📊 Interactive analytics
* ⚡ Smooth navigation
* 🎯 Responsive product management
* 🌙 Modern visual design

---

# 🚀 Scalability & Architecture

The application is structured around a modular full-stack architecture designed to keep responsibilities separated.

### Key Engineering Highlights

* 🧩 Modular backend architecture
* 🔌 RESTful API design
* 🗄️ MongoDB-based persistent storage
* ⚡ Redis-powered session management
* 🔐 Middleware-based authentication and authorization
* 👥 Role-Based Access Control
* 📊 Dedicated analytics layer
* 📱 Responsive React frontend
* ⚙️ Maintainable project structure

---

# 🔄 Application Workflow

```text
1️⃣ User registers or logs in
        ↓
2️⃣ Authentication is verified
        ↓
3️⃣ JWT session is created
        ↓
4️⃣ Session/token information is validated through Redis
        ↓
5️⃣ User receives access based on their role
        ↓
6️⃣ User interacts with products and dashboards
        ↓
7️⃣ Backend validates authentication + authorization
        ↓
8️⃣ MongoDB handles persistent application data
        ↓
9️⃣ Analytics are generated from application data
```

---

# 📂 Project Structure

```text
Stylish_Wear_Aesthetics/
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── package.json
│
├── package.json
└── README.md
```

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/shubham-kumar145/Stylish_Wear_Aesthetics.git
cd Stylish_Wear_Aesthetics
```

---

## 2️⃣ Install Dependencies

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd ../backend
npm install
```

---

## 3️⃣ Configure Environment Variables

Create a `.env` file inside the `backend` directory:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret
REDIS_URL=your_redis_url
```

---

## 4️⃣ Start the Development Servers

### Backend

```bash
cd backend
npm run dev
```

### Frontend

```bash
cd frontend
npm run dev
```

---

# 🌐 Live Demo

<div align="center">

🚀 **[Stylish Wear Aesthetics — Live Demo](https://stylish-wear-aesthetics-ctjc.vercel.app/)**

</div>

---

# 📌 Project Highlights

| Feature           | Implementation                   |
| :---------------- | :------------------------------- |
| 🛍️ E-Commerce    | Complete shopping workflow       |
| 🔐 Authentication | JWT + Secure Cookies             |
| ⚡ Sessions        | Redis-powered session management |
| 👥 Authorization  | Role-Based Access Control        |
| 📦 Products       | CRUD + inventory management      |
| 📊 Analytics      | Sales and revenue reporting      |
| 🎨 Frontend       | React + Tailwind CSS             |
| ⚙️ Backend        | Node.js + Express.js             |
| 🗄️ Database      | MongoDB + Mongoose               |

---

# 🗺️ Roadmap

* [ ] 💳 Online payment integration
* [ ] 📦 Advanced order tracking
* [ ] ⭐ Product reviews & ratings
* [ ] ❤️ Wishlist functionality
* [ ] 🔔 Order notifications
* [ ] 🎟️ Coupons & discount system
* [ ] 📊 Advanced sales analytics
* [ ] 📱 Progressive Web App

---

# 👨‍💻 Author

<div>

### Shubham Kumar

**Full-Stack Developer · Competitive Programmer · Open Source Contributor**

<br/>

* 🌐 Portfolio: https://shubhamkumar.me
* 💻 GitHub: https://github.com/shubham-kumar145
* 💼 LinkedIn: https://www.linkedin.com/in/shubham-kumar145/
* 📧 Email: contact@shubhamkumar.me
* ▶️ YouTube: https://www.youtube.com/@ShubhamKumar-145

<br/>

⭐ **If you like Stylish Wear Aesthetics, consider giving the repository a star!**

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:06B6D4,50:EC4899,100:7C3AED&height=100&section=footer" width="100%"/>

</div>
