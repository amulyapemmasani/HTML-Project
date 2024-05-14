const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
const path = require('path');
app.use(express.static(path.join(__dirname, '..')));
const fs = require('fs');
const prices = {
    custom_waffles: 11.99,
    bacon_and_eggs: 9.79,
    custom_pancakes: 10,
    avocado_toast: 9.99,
    french_toast: 13.23,
    breakfast_burrito: 12.99,
    croussiant: 6,
    custom_sushi: 9.99,
    tacos: 6.99,
    custom_sandwich: 10,
    classic_burger: 12.54,
    cesar_salad: 7.99,
    soup_with_bread: 8,
    dumpling: 11.99,
    pasta: 10.99,
    steak: 18.99,
    salmon: 14.55,
    pizza: 10,
    chicken_tikka_masala: 13.99,
    paneer: 14.99,
    noodles: 11.23,
    cake: 5.99,
    brownies: 4.66,
    sundae: 10,
    cookie_sandwich: 6.99,
    tiramisu: 8.77,
    pazookie: 9.99,
    truffles: 5,
    cake_pops: 5.99,
    water: 1.99,
    soda: 3,
    smoothies: 9.99,
    coffee: 5,
    lemonade: 2.99,
    juice: 9.99,
    boba: 7.99,
    tea: 3.99
};
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'HTML', 'index.html'));
});
app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'HTML', 'contact.html'));
});
app.get('/bio.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'HTML', 'bio.html'));
});
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'HTML', 'index.html'));
});
app.get('/menu.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'HTML', 'menu.html'));
});
app.get('/order.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'HTML', 'order.html'));
});
app.post('/submit', (req, res)=> {

    let totalPrice = 0;
    let totalItems = 0;
    let taxAmount = 0;
    let totalPriceTax =0;
    // Iterate through request body and calculate total price
    for (const item in prices) {
        const quantity = parseInt(req.body[item]);
        if (!isNaN(quantity)) { // Check if quantity is a valid number
            totalPrice += parseFloat(prices[item]) * quantity;
            totalItems += quantity;
        }
    }
    taxAmount = (totalPrice*8.25)/100;
    totalPriceTax = totalPrice + taxAmount;
    let first_name = '';
    let last_name = '';
    let email = '';
    let phone_number = '';
    for(const item in req.body){
        if(item == 'first_name'){
            first_name = req.body[item];
        }
        else if(item == 'last_name'){
            last_name = req.body[item];
        }
        else if(item == 'email'){
            email = req.body[item];
        }
        else if(item == 'phone_number'){
            phone_number = req.body[item];
        }
        
    }
    // Read the HTML file as a string
    fs.readFile(path.join(__dirname, '..', 'HTML', 'confirm.html'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Internal Server Error');
        }

        // Replace placeholders with actual values
        data = data.replace('{{first_name}}',first_name);
        data = data.replace('{{last_name}}', last_name);
        data = data.replace('{{email}}', email);
        data = data.replace('{{phone_number}}', phone_number);
        data = data.replace('{{totalItems}}', totalItems);
        data = data.replace('{{totalPrice}}', totalPrice);
        data = data.replace('{{taxAmount}}', taxAmount.toFixed(2));
        data = data.replace('{{totalPriceTax}}', totalPriceTax.toFixed(2));

        // Send the modified HTML string as the response
        res.send(data);
    });
});
app.listen(4000, () => {
    console.log("App listening on port 4000");
});