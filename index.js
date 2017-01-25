function bark(name, weight) {
    if (weight > 20) {
        console.log(name + " says WOOF - WOOF");
    } else {
        console.log(name + " says woof - woof");
    }
}


bark('spot', 34);
bark('lady', 10);
bark('scottie', -1);
bark('dino', 0 ,0);
bark('fido', "20");
bark('juno', 20);


function whatWear(temp) {
    if (temp < 60) {
        console.log("Wear a jacket");
    } else if (temp < 70) {
        console.log('Wear a sweater');
    } else {
        console.log('Wear a t-shirt');
    }
}


whatWear(50);
whatWear(80);
whatWear(60);