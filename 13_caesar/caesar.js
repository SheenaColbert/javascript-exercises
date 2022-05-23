const caesar = function(cipher, num) {
    let ans = ''; 
for (let i = 0; i < cipher.length; i++) {
    const element = cipher[i];
    const e = element.charCodeAt(0)

    if (e > 64 && e < 91) {

        ans += String.fromCharCode((e+num +65) % 26 + 65);
    }
    else if  (e > 96 && e < 123) {
        let upperE = e - 32;
        ans += String.fromCharCode((upperE+num +65) % 26 + 65).toLowerCase();
        console.log(ans)
    }
    else {
        ans += cipher[i]
    }
}
return ans;
};

// Do not edit below this line
module.exports = caesar;

//65-90 97-122