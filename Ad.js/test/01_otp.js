function otp() {
    let otp = ""

        otp = Math.floor(Math.random()* 10000000)

    return otp;
}

console.log(otp());