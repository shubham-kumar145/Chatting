<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:7C3AED,50:EC4899,100:06B6D4&height=200&section=header&text=💬%20Chatting&fontSize=58&fontColor=ffffff&fontAlignY=35&desc=Connect%20%E2%80%A2%20Communicate%20%E2%80%A2%20Collaborate&descAlignY=58&descSize=17&animation=fadeIn" width="100%"/>

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Poppins&size=22&duration=3000&pause=1000&color=EC4899&center=true&vCenter=true&width=650&lines=Real-Time+Chat+Application;Instant+Messaging+%E2%80%A2+Secure+Auth;Built+with+React+%2B+Node.js+%2B+Socket.io" alt="Typing SVG" />

<br/><br/>

<a href="https://chatting-frontend-wine.vercel.app/">
  <img src="https://img.shields.io/badge/🚀_Live_Demo-brightgreen?style=for-the-badge" />
</a>
<a href="https://github.com/shubham-kumar145/Chatting">
  <img src="https://img.shields.io/badge/📦_GitHub_Repository-181717?style=for-the-badge&logo=github&logoColor=white" />
</a>
<a href="https://shubhamkumar.me">
  <img src="https://img.shields.io/badge/👨‍💻_Portfolio-7C3AED?style=for-the-badge&logo=vercel&logoColor=white" />
</a>

<br/><br/>

<img src="https://skillicons.dev/icons?i=react,nodejs,express,mongodb,tailwind,socketio&theme=dark" />

</div>

---

## 📌 Overview

**Chatting** is a full-stack real-time messaging application built with **React, Node.js, and MongoDB**.

It delivers smooth and interactive communication between users through secure authentication, instant message delivery, and live online/offline status tracking — all powered by **Socket.io** for real-time updates and wrapped in a fast, responsive modern interface.

---

## ✨ Features

| 💬 Real-Time | 🔐 Auth & Security | 🟢 Presence |
|:---:|:---:|:---:|
| Instant message delivery | JWT-based authentication | Online/offline status |
| Dynamic updates, no refresh | Secure login & registration | Active user tracking |
| Socket.io powered | Protected routes & APIs | Real-time status updates |

| 🎨 Experience | ⚡ Performance |
|:---:|:---:|
| Clean, modern UI | Fast & optimized frontend |
| Fully responsive design | Scalable chat architecture |
| Smooth interactions | Secure session handling |

---

## 🛠️ Tech Stack

<div align="center">

<img src="https://img.shields.io/badge/REACT-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/NODE.JS-339933?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/EXPRESS-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/MONGODB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/SOCKET.IO-010101?style=for-the-badge&logo=socket.io&logoColor=white" />
<img src="https://img.shields.io/badge/TAILWIND_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
<img src="https://img.shields.io/badge/AXIOS-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />

</div>

| Layer | Technology |
|:--|:--|
| 🎨 **Frontend** | React.js · Tailwind CSS |
| ⚙️ **Backend** | Node.js · Express.js |
| 🗄️ **Database** | MongoDB |
| 🔄 **Real-Time Communication** | Socket.io |
| 🔐 **Authentication** | JWT (JSON Web Token) |
| 🌐 **HTTP Client** | Axios |

---

## 🏗️ Architecture

```text
                          💬 CHATTING
                              │
               ┌──────────────┴──────────────┐
               │                             │
        ⚛️ React Frontend                ⚙️ Node.js Backend
               │                             │
        ┌──────┼──────┐             ┌────────┼────────┐
        │      │      │             │        │        │
       🎨     🌐     🔄            🔐       🗄️       ⚡
    Tailwind  Axios  Socket.io      JWT     MongoDB  Express
```

---

## 🧩 Modular System Architecture

```text
                                     💬 CHATTING SYSTEM
                                            │
                  ┌─────────────────────────┴─────────────────────────┐
                  │                                                   │
           🖥️ CLIENT MODULE                                   ⚙️ SERVER MODULE
                  │                                                   │
   ┌──────────────┼──────────────┐              ┌─────────────────────┼─────────────────────┐
   │              │              │              │                     │                     │
🔐 Auth       💬 Chat        🟢 Presence     🔐 Auth API          🔄 Socket Gateway      🗄️ Data Layer
Module        Module          Module          Module                Module                Module
   │              │              │              │                     │                     │
- Login/       - Message       - Online/      - JWT issue &        - Connection          - MongoDB
  Register       thread          offline        verify                mgmt                  models
- Protected      rendering       status        - Password           - Event emit/         - Message
  routes       - Real-time     - Active         hashing               listen                 schema
- JWT token      updates via     user list     - Session            - Room/channel        - User
  storage        Axios/Socket  - Live status     handling             handling               schema
                                  broadcast

              ▲                                          ▲
              └──────────── Axios (REST) ─────────────────┘
              └──────────── Socket.io (WebSocket) ─────────┘
```

**How the modules connect:**
- The **Auth Module** (client) talks to the **Auth API Module** (server) over REST via Axios — issuing and verifying JWTs on login/register.
- The **Chat Module** and **Presence Module** communicate with the **Socket Gateway Module** over persistent WebSocket connections for real-time message delivery and status updates.
- The **Socket Gateway** and **Auth API** both read/write through the **Data Layer Module**, which handles all MongoDB interactions.
- Each module is independently testable and replaceable — e.g. the Data Layer could swap MongoDB for another store without touching the Socket Gateway or Auth logic.

---

## 📂 Project Structure

```text
Chatting/
│
├── frontend/
│
├── backend/
│
├── package.json
└── README.md
```

---

## 🔄 Application Workflow

1️⃣ User registers or logs in securely
2️⃣ JWT authentication token is generated
3️⃣ Users connect to the Socket.io server
4️⃣ Messages are sent and received instantly
5️⃣ Online/offline status updates dynamically
6️⃣ Messages update in real time without refreshing the page

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/shubham-kumar145/Chatting.git
cd Chatting
```

### 2. Install dependencies

```bash
cd frontend
npm install

cd ../backend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### 4. Start the development server

```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
```

---

## 🌟 Development Highlights

- 🎯 **Real-Time Architecture** — Socket.io integration
- 🔐 **Secure Authentication** — JWT-based system
- 📝 **Robust APIs** — Secure backend endpoints
- 🧩 **Reusable UI** — Modular React components
- 🎨 **Modern Styling** — Tailwind CSS
- 📱 **Responsive Design** — Desktop and mobile friendly
- ⚡ **Scalable Structure** — Built for growth

---

## 🗺️ Roadmap

- [ ] 👥 Group chat support
- [ ] 📞 Voice & video calling
- [ ] 📎 File and media sharing
- [ ] 😀 Emoji reactions
- [ ] 🔔 Push notifications
- [ ] 🌙 Dark mode
- [ ] 📱 Progressive Web App

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

⭐ **If you like Chatting, consider giving the repository a star!**

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:06B6D4,50:EC4899,100:7C3AED&height=100&section=footer" width="100%"/>

</div>
