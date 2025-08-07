# Host Application - Module Federation Demo

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Make sure the Remote App is running first on port 3002**

3. **Start the host application:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to http://localhost:3001

## What this app does:

- Runs on port 3001
- Consumes the remote chart component from port 3002
- Displays both local content and the remote Highcharts component
- Uses React 17 with Module Federation

## Important Notes:

- The remote app MUST be running on port 3002 before starting this host app
- Both apps share React and ReactDOM as singletons to prevent conflicts
- The chart component is lazy-loaded from the remote application
