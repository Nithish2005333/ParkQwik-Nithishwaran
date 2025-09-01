# Parking App - Full Stack Application

This is a full-stack parking application with React frontend and Express.js backend, integrated with MongoDB Atlas.

## Features

- React frontend with modern UI
- Express.js backend API
- MongoDB Atlas database integration
- Contact form functionality
- Admin dashboard for managing contact requests
- Responsive design

## Project Structure

```
├── server.js              # Main server file (serves both API and frontend)
├── package.json           # Root package.json with combined dependencies
├── backend/
│   ├── models/
│   │   └── Contact.js     # MongoDB Contact model
│   └── server.js          # Original backend server (kept for reference)
├── parking/               # React frontend
│   ├── src/
│   ├── package.json
│   └── dist/              # Built frontend files (generated after build)
└── Procfile               # For deployment platforms
```

## Setup Instructions

### 1. Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd parking && npm install

# Return to root
cd ..
```

### 2. Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=mongodb+srv://Nithish205333:Nithish1@cluster0.pujezf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
PORT=5000
NODE_ENV=production
```

### 3. Development

```bash
# Run both frontend and backend in development mode
npm run dev

# Run only backend
npm run server

# Run only frontend
npm run client
```

### 4. Build for Production

```bash
# Build the React frontend
npm run build
```

## Deployment Instructions

### Option 1: Render (Recommended)

1. **Push your code to GitHub**

2. **Create a new Web Service on Render:**
   - Connect your GitHub repository
   - Choose "Web Service"
   - Set the following:
     - **Build Command:** `npm run install-all && npm run build`
     - **Start Command:** `npm start`
     - **Environment Variables:**
       - `MONGO_URI`: Your MongoDB Atlas connection string
       - `ADMIN_USERNAME`: admin
       - `ADMIN_PASSWORD`: admin123
       - `NODE_ENV`: production

3. **Deploy**

### Option 2: Heroku

1. **Install Heroku CLI and login**

2. **Create Heroku app:**
   ```bash
   heroku create your-app-name
   ```

3. **Set environment variables:**
   ```bash
   heroku config:set MONGO_URI="your-mongodb-atlas-uri"
   heroku config:set ADMIN_USERNAME="admin"
   heroku config:set ADMIN_PASSWORD="admin123"
   heroku config:set NODE_ENV="production"
   ```

4. **Deploy:**
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

### Option 3: Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `POST /api/admin/login` - Admin login
- `GET /api/admin/messages` - Get contact messages (protected)

## Frontend Routes

- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/contact` - Contact page
- `/admin` - Admin dashboard
- `/parking` - Parking page
- `/fastag` - Fastag page
- `/career` - Career page

## Database Schema

### Contact Model
```javascript
{
  name: String,
  contact: String,
  message: String,
  createdAt: Date
}
```

## Important Notes

1. **MongoDB Atlas:** The app is configured to use MongoDB Atlas instead of local MongoDB
2. **Static Files:** The Express server serves the built React frontend from the `parking/dist` directory
3. **API Routes:** All API routes are prefixed with `/api`
4. **Environment Variables:** Make sure to set all required environment variables in your deployment platform

## Troubleshooting

### Common Issues:

1. **Build fails:** Make sure all dependencies are installed
2. **MongoDB connection fails:** Check your MongoDB Atlas connection string and network access
3. **Frontend not loading:** Ensure the build command completed successfully
4. **API calls fail:** Verify the API routes are correctly configured

### Local Development Issues:

1. **Port conflicts:** Change the PORT in .env file
2. **CORS issues:** The backend is configured to handle CORS for development

## Support

For any issues or questions, please check the error logs in your deployment platform or local console.
