```
# 🚌 BusBookingApp

A modern, full-featured bus ticket booking application for searching, booking, and managing bus reservations. Built to digitalize and streamline bus transportation services with a seamless user experience.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## ✨ Features

### For Users
- 🔐 Secure authentication (sign up, login, password reset)
- 🔍 Search buses by route, date, and time
- 💺 Interactive seat selection with real-time availability
- 💳 Secure online payment integration
- 📧 Email notifications for bookings and reminders
- 📱 Mobile-responsive design (works on all devices)
- 📜 View booking history and download e-tickets
- ⭐ Rate and review buses/operators

### For Administrators
- 🚌 Manage bus fleet (add, edit, delete buses)
- 📅 Create and manage schedules and routes
- 👥 User management and account controls
- 📊 Analytics dashboard (revenue, occupancy, bookings)
- 📋 Handle all bookings and cancellations
- 🛣️ Route management and pricing control

---

## 🛠️ Tech Stack

**Frontend:**
- React.js / React Native
- React Navigation
- Redux / Context API
- Axios (HTTP client)
- CSS / Tailwind / Styled Components

**Backend:**
- Node.js runtime
- Express.js framework
- MongoDB / PostgreSQL database
- JWT authentication
- Stripe/Razorpay for payments
- SendGrid/Nodemailer for emails

**DevOps & Tools:**
- Git version control
- npm package manager
- Postman for API testing
- Environment configuration (.env)

---

## 📁 Project Structure

```
BusBookingApp/
│
├── assets/                      # Images, fonts, icons
├── navigation/                  # App navigation configuration
├── screens/                     # UI screens/components
│   ├── HomeScreen
│   ├── SearchScreen
│   ├── BookingScreen
│   ├── PaymentScreen
│   └── ProfileScreen
│
├── App.js                       # Main app entry point
├── index.js                     # Application initializer
├── app.json                     # App configuration (Expo/native settings)
├── package.json                 # Project dependencies
├── package-lock.json            # Locked dependency versions
└── .gitignore                   # Git ignore rules
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have installed:

- **Node.js** (v14.x or higher) – [Download](https://nodejs.org/)
- **npm** (v6.x or higher) – Comes with Node.js
- **Git** – [Download](https://git-scm.com/)
- **Expo CLI** (optional, for React Native) – `npm install -g expo-cli`

### Quick Start (3 Steps)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Skyboy14/BusBookingApp.git
   cd BusBookingApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the application:**
   ```bash
   npm start
   ```
   - For Expo: Press `i` for iOS, `a` for Android, or `w` for web
   - For React Web: Opens automatically at `http://localhost:3000`

---

## 📦 Installation (Detailed)

### 1. Clone Repository
```bash
git clone https://github.com/Skyboy14/BusBookingApp.git
cd BusBookingApp
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
touch .env
```

Add the following variables:

```env
# API Configuration
REACT_APP_API_URL=http://localhost:5000
API_TIMEOUT=10000

# Authentication
JWT_SECRET=your_jwt_secret_key
REFRESH_TOKEN_SECRET=your_refresh_token_secret

# Database
DB_URI=mongodb://localhost:27017/bus_booking_app

# Email Service
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password

# Payment Gateway
STRIPE_PUBLIC_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx

# Google Maps (Optional)
GOOGLE_MAPS_API_KEY=your_google_maps_key
```

### 4. Run the Application

**For React Native (Expo):**
```bash
npm start
# or
expo start
```

**For React Web:**
```bash
npm start
```

**For development with auto-reload:**
```bash
npm run dev
```

**For production build:**
```bash
npm run build
npm run serve
```

---

## 📖 Usage

### User Workflow

1. **Register/Login**
   - Launch the app
   - Create account with email and password
   - Or login with existing credentials
   - Verify email address (if required)

2. **Search for Buses**
   - Select departure city and destination
   - Choose travel date and time
   - View available buses with prices

3. **Select Seats**
   - Choose a bus from the list
   - View seat map with real-time availability
   - Select your preferred seat(s)
   - Add passenger details

4. **Make Payment**
   - Review booking summary
   - Enter payment details
   - Complete secure payment via Stripe

5. **Get Confirmation**
   - Receive booking confirmation email
   - View/download e-ticket in the app
   - Track booking in history

### Admin Workflow

1. **Admin Login** – Access admin dashboard
2. **Manage Buses** – Add, edit, or remove buses
3. **Set Schedules** – Create routes and time slots
4. **Monitor Bookings** – View all active bookings
5. **View Reports** – Check revenue and analytics

---

## 🔌 API Documentation

### Authentication

**Register User**
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "9876543210"
}
```

**Login User**
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": { "id": "...", "name": "John Doe", "email": "john@example.com" }
}
```

### Buses

**Get All Buses**
```http
GET /api/buses?from=CityA&to=CityB&date=2026-02-15
```

**Get Bus Details**
```http
GET /api/buses/:busId
```

### Bookings

**Create Booking**
```http
POST /api/bookings
Authorization: Bearer {token}
Content-Type: application/json

{
  "busId": "607f1f77bcf86cd799439011",
  "seats": [1, 2, 3],
  "passengers": [
    { "name": "John Doe", "age": 30, "phone": "9876543210" }
  ]
}
```

**Get User Bookings**
```http
GET /api/bookings/my
Authorization: Bearer {token}
```

**Cancel Booking**
```http
DELETE /api/bookings/:bookingId
Authorization: Bearer {token}
```

---

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_API_URL` | Backend API base URL | `http://localhost:5000` |
| `STRIPE_PUBLIC_KEY` | Stripe public key | `pk_test_xxxxx` |
| `GOOGLE_MAPS_API_KEY` | Google Maps API key | `AIzaSyxxxxxx` |
| `JWT_SECRET` | JWT signing secret | `your_secret_key` |
| `SMTP_USER` | Email sender address | `noreply@app.com` |

---

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm test -- --coverage
```

---

## 🐛 Troubleshooting

**Port 3000 already in use:**
```bash
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Module not found errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build fails:**
```bash
npm cache clean --force
npm install
npm start
```

---

## 🤝 Contributing

We welcome contributions! Follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/YourFeature`
3. **Make** your changes with clear commit messages
4. **Push** to your branch: `git push origin feature/YourFeature`
5. **Open** a Pull Request with a description of changes

### Contribution Guidelines
- Follow existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Be respectful and constructive

---

## 📄 License

This project is licensed under the **MIT License** – see [LICENSE](LICENSE) file for details.

You are free to:
- ✅ Use commercially
- ✅ Modify the code
- ✅ Distribute copies
- ✅ Use privately

---

## 👥 Contact & Support

- **GitHub:** [@Skyboy14](https://github.com/Skyboy14)
- **Issues:** [Report bugs or request features](https://github.com/Skyboy14/BusBookingApp/issues)
- **Email:** your-email@example.com *(Update with your email)*

### Quick Links
- 🐛 [Report a Bug](https://github.com/Skyboy14/BusBookingApp/issues/new?labels=bug)
- 💡 [Request a Feature](https://github.com/Skyboy14/BusBookingApp/issues/new?labels=enhancement)
- 📚 [Documentation](#)
- 💬 [Discussions](https://github.com/Skyboy14/BusBookingApp/discussions)

---

## 📊 Project Info

- **Language:** JavaScript
- **Repository:** [Public](https://github.com/Skyboy14/BusBookingApp)
- **Last Updated:** 2026-02-08
- **Status:** 🚀 Active Development

---

## 🙏 Acknowledgments

- Thanks to all contributors and community members
- Built with modern best practices and technologies
- Made with ❤️ for seamless bus bookings

---

**Made with ❤️ by [Skyboy14](https://github.com/Skyboy14)**
```
