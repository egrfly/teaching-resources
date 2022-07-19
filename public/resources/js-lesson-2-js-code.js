/***
**** SECTION 1:
**** PREVIOUS CODE FROM EXERCISES 1 - 6 (ADAPTED FROM CONSOLE)
***/

/*
** Input and caption variables
*/

// Exercise 1
var nameInput = document.getElementById("nameInput")
var nameCaption = document.getElementById("nameCaption")

// Exercise 2
var emailInput = document.getElementById("emailInput")
var emailCaption = document.getElementById("emailCaption")

// Exercise 3
var newsAndOffersInput = document.getElementById("newsAndOffersInput")
var newsAndOffersCaption = document.getElementById("newsAndOffersCaption")

// Exercise 4
var phoneInput = document.getElementById("phoneInput")
var phoneCaption = document.getElementById("phoneCaption")

// Exercise 5
var numAdultsInput = document.getElementById("numAdultsInput")
var numChildrenInput = document.getElementById("numChildrenInput")
var numGuestsCaption = document.getElementById("numGuestsCaption")

/*
** Validation functions
*/

// Exercise 3
function isValidEmail(email) {
    var atSymbolCount = 0
    for (var i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            atSymbolCount++
        }
    }
    return atSymbolCount === 1
}

// Exercise 4
function isValidPhoneNumber(phoneNumber) {
	return phoneNumber.length === 11 && phoneNumber[0] === "0"
}

// Exercise 5
function getNumGuestsCaption(numGuests) {
    if (isNaN(numGuests)) {
        return "Please enter a valid number of adults and children for the booking"
    } else if (numGuests > 6) {
        return "Please contact us by phone to arrange a booking for more than 6 guests"
    } else {
        return ""
    }
}

/*
** Wrapper functions for updating captions
*/

// Exercise 1
function updateNameCaption() {
    if (nameInput.value === "") {
        nameCaption.innerText = "Please enter your name to make a booking"
    } else {
        nameCaption.innerText = ""
    }
}

// Exercise 2
function updateEmailCaption() {
    if (emailInput.value !== "" && !isValidEmail(emailInput.value)) {
        emailCaption.innerText = "Please ensure the email address you entered is valid"
    } else {
        emailCaption.innerText = ""
    }
}

// Exercise 3
function updateNewsAndOffersCaption() {
    if (newsAndOffersInput.checked && !isValidEmail(emailInput.value)) {
        newsAndOffersCaption.innerText = "Please enter a valid email address to receive news and offers"
    } else {
        newsAndOffersCaption.innerText = ""
    }
}

// Exercise 4
function updatePhoneCaption() {
    if (!isValidPhoneNumber(phoneInput.value)) {
        phoneCaption.innerText = "Please enter a valid UK phone number"
    } else {
        phoneCaption.innerText = ""
    }
}

// Exercise 5
function updateNumGuestsCaption() {
    var numGuests = parseInt(numAdultsInput.value) + parseInt(numChildrenInput.value)
    numGuestsCaption.innerText = getNumGuestsCaption(numGuests)
}

/*
** Example event listener
*/

// Exercise 6
newsAndOffersInput.addEventListener("change", updateNewsAndOffersCaption)

/***
**** SECTION 2:
**** NEW CODE FOR EXERCISE 7
***/

/*
** Form submit button variable
*/
var bookingButton = document.getElementById("bookingButton")

/*
** Wrapper function for updating all captions at once
*/
function validateForm() {
    updateNameCaption() // Exercise 1
    updateEmailCaption() // Exercise 2
    updateNewsAndOffersCaption() // Exercise 3
    updatePhoneCaption() // Exercise 4
    updateNumGuestsCaption() // Exercise 5
}

/*
** Main event listener (update all captions upon attempted form submission)
*/
bookingButton.addEventListener("click", validateForm)