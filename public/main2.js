//variables

const shirt = document.getElementById("shirts");

const trousers = document.getElementById("trousers");

const jacket = document.getElementById("jacket");

const others = document.getElementById("others");

const address = document.getElementById("address");

const button = document.getElementById("button");

const display = document.getElementById("show");

const name = document.getElementById("name");
const telephone = document.getElementById("telephone");

const displayAmount = document.getElementById("totalPrice");


const checkout = document.getElementById("checkout");

const reloader = document.getElementById("myform");

//checkout button event




// eventlisterner




button.onclick = e => {
  e.preventDefault(e);
  let shirtValue = shirt.value;
  let trousersValue = trousers.value;
  let jacketValue = jacket.value;
  let othersValue = others.value;
  let nameValue = name.value;
  let telephoneValue = telephone.value;
  let addressValue = address.value


  display.innerHTML = "";
  displayAmount.innerHTML = "";
  if(addressValue === '' ||
  telephoneValue=== '' ||
  nameValue === ''){
    alert('please input personal details')
  }
  
  if (
    shirtValue === "0" &&
    trousersValue === "0" &&
    othersValue === "0" &&
    jacketValue === "0" 
   
  ) {
    // cound not find a way to make it change on load -display.innerHTML = 'please select quantity'
    alert("Please Select Quantity");
    //outputs to ui
  } 
    if (shirtValue > 0) {
      display.innerHTML += ` <span >
                             <img class="  displayimagei" src ="images/shirt.png">
                            </span>`;
    }
    if (trousersValue > 0) {
      display.innerHTML += ` <span>
                            <img class="displayimagei" src ="images/trousers.png">
                            </span>`;
    }
    if (jacketValue > 0) {
      display.innerHTML += ` <span >
                             <img class="displayimagei" src ="images/jacket.png">
                            </span>`;
    }
    if (othersValue > 0) {
      display.innerHTML += ` <span>
                             <img class="displayimagei" src ="images/socks.png">
                            </span>`;
    }

    //price per cost
    const prices = {
      shirtPrice: 200,
      trousersPrice: 300,
      jacketPrice: 400,
      othersPrice: 100
    };

    // price multiplied by quantity
    const totalShirt = shirtValue * prices.shirtPrice;
    const totalTrousers = trousersValue * prices.trousersPrice;
    const totalJacket = jacketValue * prices.jacketPrice;
    const totalOthers = othersValue * prices.othersPrice;
    //total price

    const totalPrice = totalJacket + totalOthers + totalShirt + totalTrousers;
    displayAmount.innerHTML = `
                           <div class="card output">
                           <div><h3>Name: ${nameValue}</h3><h3> Phone Number: ${telephoneValue}</h3></div>
                          <div><h3>Shirt Quantity: ${shirtValue} x N${prices.shirtPrice} = N${totalShirt}</h3></div>
                           <div><h3>Trousers Quantity: ${trousersValue} x N${prices.trousersPrice} = N${totalTrousers} </h3></div>
                            <div> <h3>Jacket Quantity: ${jacketValue} x N${prices.jacketPrice} = N${totalJacket} </h3></div>
                           <div><h3>Others Quantity: ${othersValue}  x N${prices.othersPrice} = N${totalOthers}</h3> </div>
                            <div class='total'><h3>TOTAL CHARGE: N${totalPrice}</h3> </div>
                            </div>`
                           ;
    console.log(totalPrice);

    console.log(addressValue)
    
}   




checkout.onclick= e => {
    e.preventDefault(e);
    console.log(shirt.value)
    console.log(name.value)
    console.log(telephone.value)
    console.log(address.value)
    if( name.value === '' || telephone.value === '' || address.value === ''){
        alert('please input all personal details')
    
    }
     if(
    
            shirt.value === "0" &&
            trousers.value === "0" &&
            others.value === "0" &&
            jacket.value === "0" 
           
          
     ){
        alert('select at least a product')
     
    } else{
      
        document.getElementById("myForm").style.display = "block";
      
    }




}
function closeForm() {
  location.reload(true)
}

function openForm() {
    reloader.style.display = "block";
  }


 
  
 
