# NextMart Project

## Overview

NextMart is a full-featured e-commerce platform built with **Next.js** (Frontend) and **Express.js + MongoDB (Mongoose)** (Backend).  
It supports user authentication, product management, order processing, payment integration, and more.

---

## Project Structure

```
NextMart-Client/   # Frontend (Next.js, React)
NextMart-Server/   # Backend (Express.js, MongoDB, Mongoose)
```

### Frontend (`NextMart-Client`)

- **Framework:** Next.js (React, App Router)
- **Key Folders:**
  - `src/app/` - All pages/routes (e.g. `/products`, `/cart`, `/user/dashboard`)
  - `src/components/` - Reusable UI and module components
  - `src/context/` - React Contexts (e.g. UserContext)
  - `src/services/` - API call functions (fetches data from backend)
  - `src/constants/` - Static data/constants
  - `public/` - Static assets (images, icons, etc.)

### Backend (`NextMart-Server`)

- **Framework:** Express.js
- **Database:** MongoDB (with Mongoose)
- **Key Folders:**
  - `src/app/modules/` - All domain modules (user, product, shop, order, etc.)
  - `src/app/routes/` - API route definitions
  - `src/app/controllers/` - Request handlers (often inside modules)
  - `src/app/middleware/` - Express middlewares (auth, error handler, etc.)
  - `src/app/config/` - Configuration files (env, multer, etc.)
  - `src/app/DB/` - Database connection and seed scripts
  - `src/app/utils/` - Utility functions (PDF, email, etc.)
  - `src/app/errors/` - Custom error classes

---

## API Route Overview

The backend exposes a RESTful API under `/api/v1/`.  
**Key endpoints:**

| Resource   | Example Routes                                                 | Description                       |
| ---------- | -------------------------------------------------------------- | --------------------------------- |
| Auth       | `POST /api/v1/auth/login`<br>`POST /api/v1/auth/refresh-token` | User login, JWT refresh, etc.     |
| User       | `GET /api/v1/user/me`<br>`PATCH /api/v1/user/update-profile`   | Profile info, update profile      |
| Shop       | `GET /api/v1/shop/my-shop`<br>`POST /api/v1/shop`              | Shop info, create shop            |
| Product    | `GET /api/v1/product`<br>`POST /api/v1/product`                | Product listing, create product   |
| Category   | `GET /api/v1/category`<br>`POST /api/v1/category`              | Category listing, create category |
| Brand      | `GET /api/v1/brand`<br>`POST /api/v1/brand`                    | Brand listing, create brand       |
| Order      | `GET /api/v1/order/my-orders`<br>`POST /api/v1/order`          | User orders, place order          |
| Coupon     | `GET /api/v1/coupon`<br>`POST /api/v1/coupon`                  | Coupon management                 |
| Flash Sale | `GET /api/v1/flash-sale`<br>`POST /api/v1/flash-sale`          | Flash sale events                 |
| Review     | `GET /api/v1/review`<br>`POST /api/v1/review`                  | Product reviews                   |
| Payment    | `GET /api/v1/payment`<br>`POST /api/v1/payment`                | Payment integration (SSLCommerz)  |

> For full API documentation, see: [NextMart API Postman Docs](https://documenter.getpostman.com/view/28371413/2sAYQXpCyd)

---

## Frontend Features

- User Authentication (Login/Signup)
- Product Listing, Filtering, and Details
- Cart Management & Checkout
- Order History
- Shop Management (for sellers)
- Category & Brand Management (for admins/sellers)
- Coupon & Flash Sale Management
- Profile Management
- Responsive UI

## Backend Features

- JWT-based Authentication & Authorization
- RESTful API for all resources
- File upload (multer, Cloudinary integration)
- Payment Integration (SSLCommerz)
- Email Notification
- Admin & User Role Management
- Error Handling & Validation (Zod)
- PDF Invoice Generation

---

## Setup Instructions

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or Atlas)
- Yarn or npm

---

### Backend Setup (`NextMart-Server`)

1. **Install dependencies:**

   ```bash
   cd NextMart-Server
   yarn install
   # or
   npm install
   ```

2. **Configure environment variables:**  
   Create a `.env` file in `NextMart-Server/` (see `.env.example` for all keys).

3. **Run the server:**
   ```bash
   yarn dev
   # or
   npm run dev
   ```
   The backend will run at `http://localhost:3001`.

---

### Frontend Setup (`NextMart-Client`)

1. **Install dependencies:**

   ```bash
   cd NextMart-Client
   yarn install
   # or
   npm install
   ```

2. **Configure environment variables:**  
   Create a `.env` file in `NextMart-Client/`:

   ```env
   NEXT_PUBLIC_BASE_API=http://localhost:3001/api/v1
   ```

3. **Run the frontend:**
   ```bash
   yarn dev
   # or
   npm run dev
   ```
   The frontend will run at `http://localhost:3000`.

---

## Example Project Structure

```
NextMart-Client/
│
├── public/                       # Static assets (images, icons, etc.)
├── src/
│   ├── app/                      # All Next.js pages/routes
│   │   ├── (WithCommonLayout)/   # Common layout pages (home, products, cart, etc.)
│   │   ├── (WithDashboardLayout)/# Dashboard layout pages (user, admin, shop, etc.)
│   │   └── globals.css           # Global styles
│   ├── components/               # Reusable UI and module components
│   │   ├── modules/              # Feature modules (products, shop, dashboard, etc.)
│   │   └── ui/                   # UI primitives (buttons, sidebar, avatar, etc.)
│   ├── context/                  # React Contexts (e.g. UserContext)
│   ├── services/                 # API call functions (fetches data from backend)
│   ├── constants/                # Static data/constants
│   └── types/                    # TypeScript types/interfaces
│
├── .env                          # Environment variables
├── package.json                  # Project dependencies and scripts
├── tailwind.config.ts            # Tailwind CSS config
└── README.md                     # Project documentation

NextMart-Server/
│
├── src/
│   ├── app/
│   │   ├── modules/              # Domain modules (user, product, shop, order, etc.)
│   │   ├── routes/               # API route definitions
│   │   ├── middleware/           # Express middlewares (auth, error handler, etc.)
│   │   ├── config/               # Configuration files (env, multer, etc.)
│   │   ├── DB/                   # Database connection and seed scripts
│   │   ├── utils/                # Utility functions (PDF, email, etc.)
│   │   └── errors/               # Custom error classes
│   ├── scripts/                  # Utility scripts (e.g. createModule)
│   ├── templates/                # Email or document templates
│   └── types/                    # TypeScript types/interfaces
│
├── .env                          # Environment variables
├── Dockerfile                    # Docker configuration
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                 # TypeScript config
└── README.md                     # Project documentation
```

---

## Contribution

Contributions are welcome!

- Fork the repo, create a branch, commit and push, then open a Pull Request.

---

## License

MIT License

---

**Note:**

- This project does **not** use Prisma.
- All database operations are handled via **Mongoose** (MongoDB).
- For any missing frontend route (e.g. `/shop/my-shop`), ensure you create the corresponding page and API call in the client.
