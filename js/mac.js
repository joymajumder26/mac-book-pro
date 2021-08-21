
// update price list for all type of element
function updatePriceList(type, price) {
    const Price = price;
    const Cost = document.getElementById(type + "-cost");
    document.getElementById("total-price").innerText = parseFloat(document.getElementById("total-price").innerText) - parseFloat(Cost.innerText);
    Cost.innerText = Price;
    document.getElementById("total-price").innerText = parseFloat(document.getElementById("total-price").innerText) + Price;

}
// button control
function CheckDisabled(inputId,chose){
   
    document.getElementById(inputId).disabled=chose;
       
   }
// handle 16gb memory cost button 
document.getElementById("16gb").addEventListener('click', function () {

    updatePriceList('memory', 180);
    CheckDisabled('16gb',true);
    CheckDisabled('8gb',false);
  
   
});
// handle 8gb memory cost button 
document.getElementById("8gb").addEventListener('click', function () {
    updatePriceList('memory', 0);
    CheckDisabled('8gb',true);
    CheckDisabled('16gb',false);
    
   

});
// handle 256 SSd storage cost button 
document.getElementById("add-256-SSD").addEventListener('click', function () {
    updatePriceList('storage', 0);
    CheckDisabled('add-256-SSD',true);
    CheckDisabled('add-512-SSD',false);
    CheckDisabled('add-1TB-SSD',false);

});

// handle 512 SSd storage cost button 
document.getElementById("add-512-SSD").addEventListener('click', function () {
    updatePriceList('storage', 100);
    CheckDisabled('add-256-SSD',false);
    CheckDisabled('add-512-SSD',true);
    CheckDisabled('add-1TB-SSD',false);
});
// handle 1TB SSd storage cost button 
document.getElementById("add-1TB-SSD").addEventListener('click', function () {
    updatePriceList('storage', 180);
    CheckDisabled('add-256-SSD',false);
    CheckDisabled('add-512-SSD',false);
    CheckDisabled('add-1TB-SSD',true);
});
// handle FREE delivery cost button 
document.getElementById("free-delivery").addEventListener('click', function () {
    updatePriceList('delivery', 0);
    CheckDisabled('free-delivery',true);
    CheckDisabled('paid-cost',false);
});
// handle paid delivery cost button 
document.getElementById("paid-cost").addEventListener('click', function () {
    updatePriceList('delivery', 20);
    CheckDisabled('free-delivery',false);
    CheckDisabled('paid-cost',true);
});
// handle promo code value
document.getElementById('apply-btn').addEventListener('click', function () {

    let promoCodeValue = document.getElementById('addPromoCode').value;
    
    if (promoCodeValue == 'stevekaku') {

        let totalPrice = document.getElementById('total-price').innerText;

        document.getElementById('addPromoCode').value = '';

        document.getElementById('total-price2').innerText = parseFloat(totalPrice) * .8;

    }

});