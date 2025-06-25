 # 🎉 SocialSphere – A Local Event Discovery Platform

A full-stack single-page event platform where users can discover, explore, and reserve seats for local events like workshops, exhibitions, and sports meets.

🔗 **Live Site**: [https://effervescent-dieffenbachia-880115.netlify.app](https://effervescent-dieffenbachia-880115.netlify.app)  
🛠️ **Tech Stack**: React, Firebase, Tailwind CSS, DaisyUI, AOS, Vite

---

## 📸 Screenshot

![Event Explorer Screenshot](https://i.ibb.co/8gxn8DDp/Screenshot-2025-06-25-170131.png)

---

## 🌟 Features

- 🔐 **Firebase Authentication**
  
- 🎯 **Private Routes**
  - Protected Event Details and My Profile pages
- 🎨 **UI & UX**
  - AOS animations
  - Swiper Slider for homepage hero
  - Responsive urban-themed layout
- 🧭 **Routing**
  - React Router v7
  - Dynamic `Helmet` page titles
- 🔒 **Security**
  - Firebase keys are protected via `.env` variables
  - Route persistence using auth state
- 📦 **Data Management**
  - Event data from custom JSON
  - Images hosted on imgbb
- 📧 **Reservation Form**
  - Reservation confirmation via toast
- 🧠 **Extra Route**
  - Added meaningful protected route beyond requirements
- 🚫 **404 Page**
  - Custom not-found route for unmatched URLs

---

## 📦 Dependencies

```json
{
  "react": "^19.1.0",
  "firebase": "^11.6.1",
  "react-router": "^7.5.3",
  "tailwindcss": "^4.1.5",
  "daisyui": "^5.0.35",
  "aos": "^2.3.4",
  "react-helmet-async": "^2.0.5",
  "react-hot-toast": "^2.5.2",
  "vite": "^6.3.5"
}


---

## 🔧 How to Run Locally

### 🔽 Clone & Install
```bash
git clone https://github.com/Niloy-Uthso/Event-Explorer-repo.git
cd Event-Explorer-repo
npm install
---
