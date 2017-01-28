var Bank = require('./bank/bank.js');
var sampleAccounts= require('../sample.json');
var Account = require('./bank/account.js');
var BankView = require('./views/BankView');

window.onload = function() {
  console.log('loaded');

  var bank = new Bank();
  for (accountsData of sampleAccounts){
    bank.addAccount(new Account(accountsData));
  }
  console.log("We created a new bank", bank);

  var bankDetailsHTML = document.getElementById('bank-details');
  var view = new BankView(bankDetailsHTML,bank);

//   var totalDisplay = document.getElementById('total');
//   totalDisplay.innerText = "Total: " + bank.totalCash(0);
//   var accountList = document.getElementById('accounts');

//   for(var account of bank.accounts){
//     var accountListItem = document.createElement('li');
//     accountListItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
//     accountList.appendChild(accountListItem);
//   }

// var businessTotal = document.getElementById('business-total');

// var businessTotalAmount = bank.totalCash('business');
// businessTotal.innerText = businessTotalAmount;

// var businessAccounts = document.getElementById('business-accounts');
// var businessAccountsList = bank.filteredAccounts('business');


// for( var account of businessAccountsList){
//   var accountNode = document.createElement('li')
//   accountNode.innerText = account.amount.toFixed(2);
//   businessAccounts.appendChild(accountNode);
// }


// var personalTotal = document.getElementById('personal-total');

// var personalTotalAmount = bank.totalCash('personal');

// personalTotal.innerText = personalTotalAmount;

// var personalAccounts = document.getElementById('personal-accounts');
// var personalAccountsList = bank.filteredAccounts('personal');

// for( var account of personalAccountsList){
//   var accountNode = document.createElement('li');
//   accountNode.innerText = account.amount.toFixed(2);
//   personalAccounts.appendChild(accountNode);


};
