const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const apiRoutes = require('./routes'); // Import the default index.js module from routes

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts); // Use the middleware


// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mount all routes
app.use('/api/v1', apiRoutes);





// example code to verify everything is working
// ---------------------------------------------

// Dynamic route (EJS)
app.get('/dynamic', (req, res) => {
  const data = {
    title: 'Dynamic Page',
    message: 'This content is rendered dynamically!',
    items: ['Item 1', 'Item 2', 'Item 3'],
  };

  // Render the EJS template with data
  res.render('dynamic', data);
});

// Home route (static HTML)
app.get('/', (req, res) => {
  console.log("serving")
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// ---------------------------------------------



// Serve static files (moved after routes)
app.use(express.static(path.join(__dirname, './src/public')));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});