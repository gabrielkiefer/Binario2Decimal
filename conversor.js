//User can enter up to 8 binary digits in one input field
//User must be notified if anything other than a 0 or 1 was entered
//User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered


function start(){
    const binaryNumber = document.getElementById("binary-field").value;
    let html = '<div>';

    const conversion = convertBinaryToDecimal(binaryNumber);
    html += conversion;

    document.querySelector("#converterCanvas").innerHTML = html;
}

function convertBinaryToDecimal(binary){

    const binaryDigits = binary.length - 1;
    const AddOperatorAuxiliar = [];

    let i, j;
    let decimal= 0;

    for(i = 0, j = binaryDigits; i <= binaryDigits, j >= 0; i++, j--){
        //console.log(`${binary.charAt(i)}` + ` * (2^${j})` + "=" + binary.charAt(i) * (2**j));
        AddOperatorAuxiliar.push(binary.charAt(i) * (2**j));

        decimal += AddOperatorAuxiliar[i];
    }
    
    return decimal;
}
