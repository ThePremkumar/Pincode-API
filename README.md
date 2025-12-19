# 📦 PIN Code Lookup API (India)

A secure Node.js + Express backend for looking up Indian PIN codes, featuring user authentication (signup/signin), JWT-based authorization, and PIN code details via the Postal Pincode API.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [License](#license)

## Features

- ✅ **User Authentication**: Signup & Signin with hashed passwords using bcrypt
- ✅ **JWT Authorization**: Protect PIN code lookup routes
- ✅ **PIN Code Lookup**: Fetch region, district, state, delivery status, and post office branch details for Indian PIN codes
- ✅ **Secure Password Handling**: Passwords hashed before saving to MongoDB
- ✅ **Error Handling**: Centralized error middleware
- ✅ **CORS Enabled**: Ready for frontend integration

## Tech Stack

- **Backend**: Node.js, Express.js (ES6)
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: JWT, bcryptjs
- **HTTP Requests**: Axios
- **Other**: dotenv, cors

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/pincode-api.git
cd pincode-api
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm run dev   # if using nodemon
npm start     # for normal start
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/pincodeDB
JWT_SECRET=your_jwt_secret
```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/signin` | Login and get JWT token |

#### Example Signup Request Body

```json
{
  "name": "Prem Kumar",
  "email": "prem@example.com",
  "password": "123456"
}
```

#### Example Signin Request Body

```json
{
  "email": "prem@example.com",
  "password": "123456"
}
```

### PIN Code Lookup

| Method | Endpoint | Description | Authorization |
|--------|----------|-------------|---|
| GET | `/api/pincode/:pin` | Get post office, region, district, state, and delivery status for a PIN code | Bearer Token |

#### Example Request Header

```
Authorization: Bearer <token_from_signin>
```

#### Example PIN Code Lookup Response

```json
[
  {
    "Name": "Dowlatabad",
    "Description": null,
    "BranchType": "Sub Post Office",
    "DeliveryStatus": "Non-Delivery",
    "Circle": "Tamilnadu",
    "District": "Krishnagiri",
    "Division": "Krishnagiri",
    "Region": "Coimbatore",
    "Block": "Krishnagiri",
    "State": "Tamil Nadu",
    "Country": "India",
    "Pincode": "635001"
  },
  {
    "Name": "Kattinayanapalli",
    "Description": null,
    "BranchType": "Sub Post Office",
    "DeliveryStatus": "Non-Delivery",
    "Circle": "Tamilnadu",
    "District": "Krishnagiri",
    "Division": "Krishnagiri",
    "Region": "Coimbatore",
    "Block": "Krishnagiri",
    "State": "Tamil Nadu",
    "Country": "India",
    "Pincode": "635001"
  },
  {
    "Name": "Krishnagiri",
    "Description": null,
    "BranchType": "Head Post Office",
    "DeliveryStatus": "Delivery",
    "Circle": "Tamilnadu",
    "District": "Krishnagiri",
    "Division": "Krishnagiri",
    "Region": "Coimbatore",
    "Block": "Krishnagiri",
    "State": "Tamil Nadu",
    "Country": "India",
    "Pincode": "635001"
  },
  {
    "Name": "Krishnagiri Courts",
    "Description": null,
    "BranchType": "Sub Post Office",
    "DeliveryStatus": "Non-Delivery",
    "Circle": "Tamilnadu",
    "District": "Krishnagiri",
    "Division": "Krishnagiri",
    "Region": "Coimbatore",
    "Block": "Krishnagiri",
    "State": "Tamil Nadu",
    "Country": "India",
    "Pincode": "635001"
  }
]
```

## Usage

1. Signup a new user → get JWT token
2. Signin with registered credentials → receive JWT token
3. Call PIN code lookup endpoint with the JWT token in the Authorization header
4. Response includes all post office details for the entered PIN code

## Folder Structure

```
pincode-api/
│
├─ controllers/
│   ├─ userController.js
│   └─ pincodeController.js
│
├─ middleware/
│   └─ authMiddleware.js
│
├─ models/
│   └─ User.js
│
├─ routes/
│   ├─ auth.js
│   └─ pincode.js
│
├─ app.js
├─ package.json
└─ .env
```

## License

MIT License © [Your Name]
