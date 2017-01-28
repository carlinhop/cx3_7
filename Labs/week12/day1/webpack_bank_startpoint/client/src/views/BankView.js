var BankView = function(htmlNode,context){


//Displaying the bank's reserves

var totalTitleHTML = document.createElement('h3');

totalTitleHTML.innerText = "Bank's total cash reserves";

htmlNode.appendChild(totalTitleHTML);

var totalHTML = document.createElement('h4');

htmlNode.appendChild(totalHTML);

var total = context.totalCash();

totalHTML.innerText = total;

//Displaying accounts by type

var accountsUL = document.createElement('ul');
accountsUL.id = "business-accounts";
htmlNode.appendChild(accountsUL);

var accountsList = context.filteredAccounts("business");

for(account of accountsList){
  var accountLI = document.createElement('li');
  accountLI.innerText = account.owner+" has " +account.amount +" in a "+ account.type + " account";
  accountsUL.appendChild(accountLI);
}

// <ul id="accounts"></ul>

// <h4>Business Total</h4>
// <h4 id= "business-total"></h4>
//   <ul id="business-accounts"></ul>

// <h4>Personal Total</h4>
// <h4 id= "personal-total"></h4>
//   <ul id="personal-accounts"></ul>

};

module.exports = BankView;