async function convertCurrency() {

    // Amount lena
    let amount = document.getElementById ("amount").value;

    // From currency lena
    let fromCurrency = document.getElementById("fromCurrency").value;

    // To currency lena
    let toCurrency = document.getElementById("toCurrency").value;

    // Result wala element
    let result = document.getElementById("result");

    if (amount <= 0) {
        result.innerText = "Please enter a valid amount";
        return;
    }

    result.innerText = "Converting...";

    try {

        // External API URL
        const url = `https://api.frankfurter.dev/v2/rate/${fromCurrency}/${toCurrency}`;

        // API ko request
        const response = await fetch(url);

        // API response ko JSON mein convert karna
        const data = await response.json();

        // API se rate lena
        const rate = data.rate;

        // Final amount calculate karna
        const convertedAmount = (amount * rate).toFixed(2);

        // Result screen par show karna
        result.innerText =
            `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;

    } catch (error) {

        result.innerText = "Something went wrong!";
        console.log(error);
    }
}