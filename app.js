const buyerDetailSubmit = document.getElementById("detail-submit-btn");
const addButton = document.getElementById("add-details-btn")



buyerDetailSubmit.addEventListener("click", function (){


    const buyerDetail = document.getElementById("buyer-details-input").value;

    document.getElementById("buyer-bank-detail").innerText = buyerDetail;
    document.getElementById("buyer-info").innerText = buyerDetail;


});



addButton.addEventListener("click", function(){


    const itemName = document.getElementById("item-name-input").value;
    const itemPrice = document.getElementById("item-price-input").value;
    const itemQuantity = document.getElementById("item-quantity-input").value;


    if (itemName == "" || itemPrice == "" || itemQuantity== "") {
        return;
    }
    else{
        
        const tr= document.createElement("tr");
        const th= document.createElement("th");
        const td1= document.createElement("td");
        const td2= document.createElement("td");
        const td3= document.createElement("td");


        th.innerText= (itemName);
        td1.innerText= (itemPrice);
        td2.innerText= (itemQuantity)
        td3.innerText = parseFloat(itemPrice) * parseFloat(itemQuantity);


        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        

        td3.classList = "total-array";

        document.getElementById("info-table").appendChild(tr);

        
        document.getElementById("item-name-input").value= " ";
        document.getElementById("item-price-input").value= " ";
        document.getElementById("item-quantity-input").value= " ";

        TotalCalculate();
    }
   
});


function TotalCalculate(){


    let subTotal = 0;
    const totals = document.getElementsByClassName("total-array");
    for(const total of totals){
        subTotal = subTotal + parseFloat(total.innerText);
    }


    document.getElementById("sub-total").innerText = subTotal;

    const tax = subTotal / 10;
    document.getElementById("tax").innerText= tax;
    document.getElementById("grand-total").innerText= subTotal + tax;
    document.getElementById("grand-total-2").innerText= subTotal + tax;

};


