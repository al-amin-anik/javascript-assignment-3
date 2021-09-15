


//1. KM to Meter
function kilometerToMeter(kilometer){
    var meter = 0;
    if(kilometer < 0){ // if kilometer less than 0 then it's invalid.
        return "Please input valid number";
    }
    else{
        meter = kilometer * 1000; // 1 KiloMeter = 1000 meter
        return meter;
    }
}
var result = kilometerToMeter(6);
console.log(result);

//2. Budget calculator
function budgetCalculator(watch, phone, laptop){
    var totalPrice = 0;
    if(watch < 0 || phone < 0 || laptop < 0 ){
        return "Invalid Number. Please input positive number."  
    }
    else{
        totalPrice = (watch * 50 ) + (phone * 100) + (laptop * 500);
        return totalPrice;
    }
}
var result = budgetCalculator(4, 2, 3);
//var result = budgetCalculator(-3, 4, -5); 
// checking negetive value
console.log(result);

//3. hotelCost
function hotelCost(day){
    var totalCost = 0;
    if(day <= 10){
        totalCost = day * 100;
    }
    else if(day <= 20){
        var firstTenDays = 10 * 100;
        var remainDays = day - 10;
        var secondTenDays = remainDays * 80;
        totalCost = firstTenDays + secondTenDays ;

    }
    else{
        var firstTenDay = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainDays = day - 20;
        var thirdTenDays = remainDays * 50;
        totalCost = firstTenDay + secondTenDays + thirdTenDays;
    }
    return totalCost;

}
var result = hotelCost(35);
console.log(result);

//4. Mega friend
function megaFriend(names) {
    if (names.length < 1) {
        //checking if the array is empty
        console.log("The Array is empty");
    }
    var mega = names[0];
    for (var i = 0; i < names.length; i++) {
        var element = names[i];
        if (mega.length < element.length) {
            // checking the positions 
            mega = element;
            //  if true replacing the mega(tmp) value.
        }
    } return mega;
}
var friends = ["Rifa", "Afrin" , "Maha", "LeoMessi", "RobertDowny", "SiamAhmed"];
var megaFriends = megaFriend(friends);
console.log(megaFriends);
