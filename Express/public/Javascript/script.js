//Code for footer//
function message(value) {
    if (value === "no") {
        alert("Thank you! Your response was submitted.");
        }
    }

function getUpdates(){
    var email = prompt("Please enter your email address");
    if(email!==''){
        alert("Thank you! You have now subscribed to our updates.")
    }
    else{
        alert("Please enter email address");
    }
}
// Javascript code for Menu page//
document.addEventListener("DOMContentLoaded", function() {
    const toggles = document.querySelectorAll('.toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const info = this.parentNode.querySelector('.info');
            if (info.style.display === 'block') {
                info.style.display = 'none';
            } else {
                info.style.display = 'block';
            }
        });
    });
});

//Javascript Code for order page//

//Validate Phone Number//
function validateNumber(phoneNum){
    var pat = /^\d{10}$/;
    return pat.test(phoneNum);
}

//Validate First and Last Names//
function validateName(name){
    var pat1 = /^[a-zA-Z]+$/;
    return pat1.test(name.trim())
}

function validateEmail (email){
    var pat2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pat2.test(email.trim());

}

//Main Validation Function//
function onSubmit(){
    var phoneNum = document.getElementById("number").value;
    if(!validateNumber(phoneNum)){
        alert("Enter a valid Phone Number");
    }
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var mail = document.getElementById("mail").value;

    if(fname==""){
        alert("Please enter your first name");
    }
    else{
        if(!validateName(fname)){
            alert("Name should not contain any numbers");
        }
    }
    if(lname == ""){
        alert("Please enter your last name");
    }
    else{
        if(!validateName(lname)){
            alert("Name should not contain any numbers");
        }
    }   
    if(mail == ""){
        alert("Please enter your email")
    }
    else{
        if(!validateEmail(mail)){
            alert("Email should be in a correct format")
        }
    }
    if(validateNumber(phoneNum)&&validateName(fname)&&validateName(lname)&&validateEmail(mail)) {
        alert("We have recieved your order! Thank you!")
    }   
}

//choosing options to order//
function selectMenu(){
    var valueDropdown = document.getElementById("menuOption").value;
    var valueSelected1 = document.getElementById("meal_1");
    var valueSelected2 = document.getElementById("meal_2");
    var valueSelected3 = document.getElementById("meal_3");
    var valueSelected4 = document.getElementById("meal_4");
    var valueSelected5 = document.getElementById("meal_5");
    if(valueDropdown === "breakfast"){
        valueSelected1.style.display = "block";
        valueSelected2.style.display = "none";
        valueSelected3.style.display = "none";
        valueSelected4.style.display = "none";
        valueSelected5.style.display = "none";
    }
    else if(valueDropdown === "lunch"){
        valueSelected1.style.display = "none";
        valueSelected2.style.display = "block";
        valueSelected3.style.display = "none";
        valueSelected4.style.display = "none";
        valueSelected5.style.display = "none";

    }
    else if(valueDropdown === "dinner"){
        valueSelected1.style.display = "none";
        valueSelected2.style.display = "none";
        valueSelected3.style.display = "block";
        valueSelected4.style.display = "none";
        valueSelected5.style.display = "none";

    }
    else if(valueDropdown === "desserts"){
        valueSelected1.style.display = "none";
        valueSelected2.style.display = "none";
        valueSelected3.style.display = "none";
        valueSelected4.style.display = "block";
        valueSelected5.style.display = "none";

    }
    else if(valueDropdown === "beverages"){
        valueSelected1.style.display = "none";
        valueSelected2.style.display = "none";
        valueSelected3.style.display = "none";
        valueSelected4.style.display = "none";
        valueSelected5.style.display = "block";

    }
    else{
        valueSelected1.style.display = "none";
        valueSelected2.style.display = "none";
        valueSelected3.style.display = "none";
        valueSelected4.style.display = "none";
        valueSelected5.style.display = "none";
    }
    var quantityValues = document.getElementsByClassName("quantity_value");
    
    // Loop through each quantity value element
    for (var i = 0; i < quantityValues.length; i++) {
        // Set the quantity value to 0
        quantityValues[i].innerText = "0";
    }
    const quantityInputs = document.querySelectorAll('.quantity');
    quantityInputs.forEach(input => {
        input.value = ''; // Clear the value of each quantity input field
    });
}

//Calculate Prices
function calculateTotals() {
    let subtotal = 0;
    const tax1 = 0.0825; 
    const totals = document.querySelectorAll('.quantity_value');

    console.log(totals); 

    totals.forEach(span => {
        const items = parseInt(span.textContent); 
        const price = parseFloat(span.getAttribute('itemPrice')); 
        console.log(`Calculating: ${items} * ${price}`); 

        subtotal += items * price; 
    });

    console.log(`Subtotal: ${subtotal}`); 

    const tax = subtotal * tax1 ; 
    const total = subtotal + tax; 

    console.log(`Tax: ${tax}, Total: ${total}`); 

    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('tax').textContent = tax.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}

function changePrice(event, element, change) {
    event.preventDefault(); 

    const items = element.parentNode.querySelector('.quantity_value');
    let amount = parseInt(items.textContent);

    amount = Math.max(0, amount + change); 
    items.textContent = amount; 

    console.log(`Updated Quantity: ${amount}`); 

    calculateTotals(); 

}
//Validating Items
function changePrice(event, button, increment){
    event.preventDefault();
    var a = button.parentNode.parentNode;
    var itemNumber= a.querySelector('.quantity_value');
    var item_quantity = a.querySelector('.quantity');
    var num = parseInt(itemNumber.textContent, 10);
    var newTotal = num + increment;
 
    if (newTotal >= 0 && newTotal <= 10) {
        itemNumber.textContent = newTotal;
        item_quantity.value = newTotal;
        calculateTotals(); 
    } else if (newTotal < 0 ) {
        alert("This item cannot be less than 0");
    }
    else if(newTotal>10){
        alert("This item cannot be more than 10");
    }
}
 

//Validating Dine in Form Information
//Validate Phone Number//
function validateNumber(phoneNum){
    var pat = /^\d{10}$/;
    return pat.test(phoneNum);
}

//Validate First and Last Names//
function validateName(name){
    var pat1 = /^[a-zA-Z]+$/;
    return pat1.test(name.trim())
}

function validateEmail (email){
    var pat2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pat2.test(email.trim());

}

//Main Validation Function For Dine In//
function onSubmitReservation(){
    var phoneNum = document.getElementById("number").value;
    if(!validateNumber(phoneNum)){
        alert("Enter a valid Phone Number");
    }
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var mail = document.getElementById("mail").value;
    var people = document.getElementById("people").value;

    if(fname==""){
        alert("Please enter your first name");
    }
    else{
        if(!validateName(fname)){
            alert("Name should not contain any numbers");
        }
    }
    if(lname == ""){
        alert("Please enter your last name");
    }
    else{
        if(!validateName(lname)){
            alert("Name should not contain any numbers");
        }
    }   
    if(mail == ""){
        alert("Please enter your email")
    }
    else{
        if(!validateEmail(mail)){
            alert("Email should be in a correct format")
        }
    }
    if(people == ""){
        alert("Please indicate a number")
    }

    if(validateNumber(phoneNum)&&validateName(fname)&&validateName(lname)&&validateEmail(mail)) {
        if(people != ""){
            alert("We have succesfully recieved your reservation. Thank you!")
        }

    }   
}

//Validating Review Contact Page information

//Validate Phone Number//
function validateNumber(phoneNum){
    var pat = /^\d{10}$/;
    return pat.test(phoneNum);
}

//Validate First and Last Names//
function validateName(name){
    var pat1 = /^[a-zA-Z]+$/;
    return pat1.test(name.trim())
}

function validateEmail (email){
    var pat2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pat2.test(email.trim());

}

//Main Validation Function for Review//
function onSubmitReview(){
    var phoneNum = document.getElementById("num").value;
    if(!validateNumber(phoneNum)){
        alert("Enter a valid Phone Number");
    }
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var email = document.getElementById("email").value;

    if(first==""){
        alert("Please enter your first name");
    }
    else{
        if(!validateName(first)){
            alert("Name should not contain any numbers");
        }
    }
    if(last == ""){
        alert("Please enter your last name");
    }
    else{
        if(!validateName(last)){
            alert("Name should not contain any numbers");
        }
    }   
    if(email == ""){
        alert("Please enter your email")
    }
    else{
        if(!validateEmail(email)){
            alert("Email should be in a correct format")
        }
    }
    if(validateNumber(phoneNum)&&validateName(first)&&validateName(last)&&validateEmail(email)) {
        alert("Your review response was greatly apprecaited! Thank you!")
    }   
}
