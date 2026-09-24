Currency Converter

A simple and responsive Currency Converter web application built using HTML, CSS, and JavaScript.

Features

- Convert currencies using real-time exchange rates.
- Supports:
  - USD - US Dollar
  - PKR - Pakistani Rupee
  - EUR - Euro
  - GBP - British Pound
  - INR - Indian Rupee
- Uses the Frankfurter API to get exchange rates.
- Shows a validation message for invalid amounts.
- Displays a loading message while converting.
- Shows an error message if the API request fails.
- Simple and user-friendly interface.

Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- Frankfurter Currency API

How It Works

1. Enter the amount.
2. Select the currency you want to convert from.
3. Select the currency you want to convert to.
4. Click the Convert button.
5. JavaScript sends a request to the Frankfurter API.
6. The API returns the exchange rate.
7. The converted amount is displayed on the screen.

Project Structure

Currency-Converter/
│
├── index.html
├── style.css
├── script.js
└── README.md

API Used

This project uses the Frankfurter API for currency exchange rates.

https://api.frankfurter.dev/v2/rate/{from}/{to}

Example

If you enter:

1 USD

and select:

PKR

the application fetches the exchange rate from the API and displays the converted amount.

How to Run

1. Open the project folder in VS Code.
2. Open "index.html" in a browser.
3. Enter an amount.
4. Select the currencies.
5. Click the Convert button.

Author

Sawera Bakhsh
