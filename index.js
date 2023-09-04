const button = document.getElementById("calcBtn");
const sumField = document.getElementById("sum");
const numberOfFriendsField = document.getElementById("numberOfFriends");
const tipField = document.getElementById("tip");
const resetButton = document.getElementById("reset")

sumField.style.backgroundColor = "red"

function calcTip(sum, tip) {
    const calculatedTip = parseInt(sum) * parseInt(tip) / 100;
    return calculatedTip
}

function divideTotal(total, numberOfFriends) {
    return total / numberOfFriends
}

function displayDividedSum(sum) {
    const element = document.getElementById("friendSum");
    element.innerHTML = sum + " kr";

    const inputForm = document.getElementById("inputForm");
    inputForm.classList.toggle("hide");

    document.getElementById("showSum").classList.toggle("hide")

}

function resetButtonClick() {

    sumField.value = "";
    numberOfFriendsField.value = "";
    tipField.value = "";

    const inputForm = document.getElementById("inputForm");
    inputForm.classList.toggle("hide");

    document.getElementById("showSum").classList.toggle("hide")
}

button.addEventListener("click", function() {
    const sum = sumField.value;
    const numberOfFriends = numberOfFriendsField.value;
    
    const tip = tipField.value;

    const calculatedTip = calcTip(sum, tip);

    const total = parseInt(sum) + calculatedTip;

    const friendSum = divideTotal(total, numberOfFriends);

    displayDividedSum(friendSum)
})

resetButton.addEventListener("click", function() {
    resetButtonClick()
})