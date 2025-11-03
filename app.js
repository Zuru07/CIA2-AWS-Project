// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 8080;

// app.get('/', (req, res) => {
//   res.send('<h1>Hello from GCP Cloud Run! CI/CD works! But does it though????</h1>');
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Fantabulous CI/CD Success</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap');
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
  }
  h1 {
    font-weight: 600;
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 10px;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.4);
  }
  p {
    font-weight: 300;
    font-size: 1.5rem;
    margin-top: 0;
    text-align: center;
    text-shadow: 1px 1px 6px rgba(0,0,0,0.3);
  }
  .button {
    margin-top: 20px;
    padding: 15px 30px;
    font-weight: 600;
    font-size: 1.25rem;
    color: #2575fc;
    background: #fff;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0 8px 15px rgba(37,117,252,0.3);
    transition: all 0.3s ease;
    text-transform: uppercase;
  }
  .button:hover {
    background: #6a11cb;
    color: #fff;
    box-shadow: 0 15px 20px rgba(106,17,203,0.6);
    transform: translateY(-3px);
  }
  footer {
    position: absolute;
    bottom: 15px;
    font-weight: 300;
    font-size: 0.9rem;
    opacity: 0.6;
    text-align: center;
    width: 100%;
  }
</style>
</head>
<body>
  <h1>CI/CD is a Success! </h1>
  <p>Your changes deployed effortlessly on GCP Cloud Run.</p>
  <button class="button" onclick="window.location.reload()">Refresh Status</button>
  <footer>Powered by Express & Google Cloud Run</footer>
</body>
</html>
`;

app.get('/', (req, res) => {
  res.send(htmlContent);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});