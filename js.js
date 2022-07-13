
document.querySelector('#card-number').onput = function () {
  let cardNum = this.value;
  if (cardNum.trim().length > 5) {
    let cardInfo = new CardInfo(cardNum.trim(), {
      bankLogosPath: './node_modules/banks card/card-info/dist/banks-logos',
      brandsLogosPath: './node_modules/banks card/card-info/dist/brands-logos',
    });
    //bank name 
    console.log(cardInfo.bankName);
    console.log(cardInfo.bankLogo);
    console.log(cardInfo.brandLogo);
    console.log(cardInfo.backgroundColor);
    document.querySelector('.card-image').src = cardInfo.bankLogo;
    document.querySelector('.card-logo').src = cardInfo.brandLogo;
    document.querySelector('.card-front').style.backgroundColor = cardInfo.backgroundColor;
  }
}