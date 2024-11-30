# CryptoHome 🌐💰

CryptoHome is a responsive cryptocurrency marketplace platform that provides real-time crypto data, charts, and news. The platform allows users to explore detailed cryptocurrency information, view historical charts, and customize their experience with multiple currencies.

## Features ✨

- **Dynamic Cryptocurrency Data**: Displays real-time price, market cap, and 24-hour price change.
- **Interactive Charts**: View historical price trends for selected cryptocurrencies.
- **Search Functionality**: Quickly find your favorite cryptocurrencies.
- **Currency Switcher**: Supports USD, INR, and EUR.
- **Responsive Design**: Fully responsive UI for both desktop and mobile users.
- **Loading Indicator**: Clean and minimal spinner during data fetching.
- **Crypto News & Blogs Integration**: Extendable support for fetching news and blogs.

## Technologies Used 🛠️

- **Frontend**: React.js, TailwindCSS
- **Routing**: React Router
- **API Integration**: CoinGecko API for cryptocurrency data
- **Charting**: React Google Charts for interactive charts

## Setup Instructions 🚀

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/cryptohome.git
cd cryptohome
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Set up API Key

1. **Create an account on CoinGecko and Rapid API**:  
   Go to [CoinGecko](https://www.coingecko.com/) and [RapidAPI](https://rapidapi.com/), then sign up for a free account to access their API.
   
2. **Get your API Key**:  
   Once you have signed up and logged in, navigate to your account settings and generate your API key from the API section. This key will be used to fetch real-time cryptocurrency datas and news and blogs.

3. **Configure the API Key**:  
   In the project directory, create a `.env` file if it doesn't already exist. Add your API key in the following format:
   ```bash
    VITE_SECRET_KEY=your_coingecko_api_key
    VITE_NEWS_SECRET_KEY=your_rapidapi_key_for_news
    VITE_NEWS_SECRET_HOST=your_rapidapi_host_for_news
    VITE_NEWS_SECRET_KEY1=your_rapidapi_key_for_additional_news
    VITE_NEWS_SECRET_HOST1=your_rapidapi_host_for_additional_news
   ```

### Step 4: Run Code

1. **Start the Development Server**:
    Run the following command to start the development server:
    ```bash
    npm run dev
    ```
    This will launch the application in development mode, usually available at http://localhost:3000 or another port, depending on your environment.
