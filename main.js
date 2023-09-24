function isPalindrome(str) {
    // Remove spaces and convert to lowercase for accurate palindrome checking
    str = str.replace(/ /g, "").toLowerCase();
    return str === str.split("").reverse().join("");
}

function checkPalindrome() {
    const inputString = document.getElementById("inputString").value;
    const resultElement = document.getElementById("result");

    if (isPalindrome(inputString)) {
        resultElement.innerText = "Yes, it's a palindrome!";
    } else {
        resultElement.innerText = "No, it's not a palindrome.";
    }
}

function reset() {
    document.getElementById("inputString").value = "";
    document.getElementById("result").innerText = "";
}
