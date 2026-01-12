# Hero Kidz 🦸‍♂️

A modern e-commerce web application for kids' superhero costumes and toys, built with Next.js 16, MongoDB, and NextAuth for authentication. The platform offers a seamless shopping experience with cart management, user authentication, and product browsing.

## 🌐 Live Demo

**[Visit Hero Kidz](https://hero-kidz-liart.vercel.app/)**

## 🚀 Features

### Authentication & User Management

- **User Registration & Login** - Secure authentication using NextAuth with credentials provider
- **Session Management** - Persistent user sessions across the application
- **Protected Routes** - Cart and order management require authentication

### Product Management

- **Product Catalog** - Browse superhero costumes and toys with detailed information
- **Product Details Page** - Individual product pages with images, pricing, and discount information
- **Dynamic Product Loading** - Server-side rendering for optimal SEO performance
- **Loading States** - Skeleton loaders for better user experience

### Shopping Cart

- **Add to Cart** - Add products directly from product pages
- **Quantity Management** - Increase or decrease product quantities in real-time
- **Cart Summary** - Live calculation of total items and prices
- **Remove Items** - Delete products from cart with confirmation
- **Persistent Cart** - Cart data stored in MongoDB and syncs across sessions

### User Interface

- **Responsive Design** - Mobile-first approach using Tailwind CSS and DaisyUI
- **Bangla Language Support** - Bilingual interface with custom Bengali fonts
- **Interactive Notifications** - SweetAlert2 for user-friendly alerts
- **Loading Indicators** - Visual feedback during async operations
- **SEO Optimized** - Meta tags, sitemap, and OpenGraph images

## 📋 Prerequisites

- Node.js 18+ installed
- MongoDB database (local or cloud)
- Git

## 🛠️ Setup & Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd hero-kidz
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# MongoDB Configuration
MongoDB_URI=your_mongodb_connection_string
DBNAME=your_database_name

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_key
NEXTAUTH_URL=http://localhost:3000
```

**Generate NEXTAUTH_SECRET:**

```bash
openssl rand -base64 32
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm start
```

## 🗺️ Route Summary

### Public Routes

| Route            | Description                                   |
| ---------------- | --------------------------------------------- |
| `/`              | Home page with banner and featured products   |
| `/products`      | Product catalog page with all available items |
| `/products/[id]` | Individual product details page               |
| `/about`         | About page                                    |
| `/contact`       | Contact page                                  |
| `/blog`          | Blog page                                     |
| `/login`         | User login page                               |
| `/register`      | User registration page                        |

### Protected Routes (Require Authentication)

| Route   | Description                            |
| ------- | -------------------------------------- |
| `/cart` | Shopping cart with quantity management |

### API Routes

| Route                     | Description                       |
| ------------------------- | --------------------------------- |
| `/api/auth/[...nextauth]` | NextAuth authentication endpoints |

## 🎯 Feature Explanations

### Real-time Cart Management

The cart system uses a combination of local state and database synchronization. When users modify quantities:

1. Optimistic UI updates provide instant feedback
2. Server actions update MongoDB in the background
3. `router.refresh()` syncs the UI with the latest server data
4. `useEffect` ensures state consistency after refreshes

### Server Actions Architecture

Server actions in `/actions/server/` handle:

- **Authentication** (`auth.js`) - User registration and login validation
- **Orders** (`order.js`) - Cart operations, quantity updates, item removal
- **Products** (`product.js`) - Product fetching and management

All actions include authentication checks and error handling.

### Database Schema

**Products Collection:**

```javascript
{
  _id: ObjectId,
  title: String,
  image: String,
  price: Number,
  discount: Number,
  category: String,
  description: String
}
```

**Orders Collection:**

```javascript
{
  _id: ObjectId,
  productId: ObjectId,
  email: String,
  username: String,
  title: String,
  quantity: Number,
  image: String,
  price: Number
}
```

**Users Collection:**

```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String (hashed with bcrypt)
}
```

### Component Structure

- **Layouts** - Navbar and Footer for consistent design
- **Cards** - Reusable ProductCard and CartItem components
- **Forms** - LoginForm and RegisterForm with validation
- **Skeletons** - Loading state components
- **Buttons** - AuthButton, CartButton, SocialButton for interactions

## 🧰 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Database:** MongoDB
- **Authentication:** NextAuth v4
- **Styling:** Tailwind CSS 4, DaisyUI
- **UI Components:** React Icons, SweetAlert2
- **Language:** JavaScript (React 19)
- **Password Hashing:** bcryptjs

## 📦 Project Structure

```
hero-kidz/
├── src/
│   ├── actions/server/      # Server actions for data operations
│   ├── app/                 # Next.js app router pages
│   ├── Components/          # Reusable React components
│   ├── data/                # Static data (toys.json)
│   ├── lib/                 # Utility functions (database, auth config)
│   └── provider/            # Context providers
├── public/assets/           # Static assets (images, icons)
└── Configuration files
```

## 🔒 Security Features

- Password hashing with bcryptjs
- Session-based authentication
- Protected API routes
- Email validation during registration
- User-specific cart isolation

## 🌐 Browser Support

Supports all modern browsers (>1% market share)

## 📝 License

Private project - All rights reserved

## 👨‍💻 Development

This project uses:

- ESLint for code quality
- PostCSS for CSS processing
- React Compiler for optimized builds

---
