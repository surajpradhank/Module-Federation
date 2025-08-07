# Remote Application - Module Federation Demo

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the remote application:**
   ```bash
   npm start
   ```

3. **Application will run on port 3002**

4. **View standalone app:**
   Navigate to http://localhost:3002

## What this app does:

- Runs on port 3002
- Exposes ChartComponent via Module Federation
- Uses Highcharts to render interactive charts
- Can run standalone or be consumed by the host app
- Uses React 17 with official Highcharts React integration

## Module Federation Configuration:

This app exposes:
- `./ChartComponent` - A Highcharts-powered React component

The component can be imported by other Module Federation apps like:
```javascript
const RemoteChart = React.lazy(() => import("remote/ChartComponent"));
```

## Important Notes:

- This app should be started BEFORE the host application
- The chart uses real sample data and is fully interactive
- Component is shared as a singleton to prevent React conflicts
