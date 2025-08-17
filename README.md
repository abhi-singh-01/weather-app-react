# Weather App - Full Stack Application
A modern weather forecasting application built with Spring Boot backend and React frontend that provides real-time weather data and forecasts.

 # React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## 🌟 Features
- **Real-time Weather Data**: Get current weather conditions for any city
- **7-Day Forecast**: View detailed weather forecasts for the next 7 days
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean and intuitive interface built with React and Tailwind CSS
- **RESTful API**: Clean and well-documented backend API endpoints

## 🏗️ Tech Stack

### Backend
- **Spring Boot 3.5.4** - Java framework for building REST APIs
- **Java 21** - Latest LTS version of Java
- **Maven** - Build automation tool
- **Spring Web** - REST API development

### Frontend
- **React 19** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Icons** - Popular icon library

### Prerequisites

- **Java 21** or higher
- **Node.js 18** or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation & Setup

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd weather-app
```

#### 2. Frontend Setup (React)

Open a new terminal and navigate to the frontend directory:
```bash
cd frontend/weatherui
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 📁 Project Structure

```
weather-app/
├── frontend/weatherui/         # React Frontend
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── App.jsx           # Main application component
│   │   └── main.jsx          # Application entry point
│   ├── package.json          # Node.js dependencies
│   └── vite.config.js        # Vite configuration
└── README.md
```

## 🔧 Configuration

### Frontend Configuration

The frontend uses environment variables for API endpoints. Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:8080
```

## 🌐 API Endpoints

### Weather Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/weather/current/{city}` | Get current weather for a city |
| GET | `/api/weather/forecast/{city}` | Get 7-day forecast for a city |

## 🧪 Testing

### Frontend Testing
```bash
# Run frontend tests (if available)
npm test
```

## 🚀 Production Deployment

### Frontend Production Build
```bash
npm run build
```
The built files will be in `dist/` directory, ready to be served by any static file server.


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Happy Coding!** 🎉
