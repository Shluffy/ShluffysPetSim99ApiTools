/* // fetch var for rblx api to get clan owner name and more
var ftch = "https://users.roblox.com/v1/users/"
var includeDisplayName = false


function ftchClanInfo(clanName){
fetch('https://biggamesapi.io/api/clan/' + clanName) // fetch clan
  .then(response => response.json())
  .then(clandata => {
    var owner = clandata.data.Owner;
    ftch = ftch + owner
    
    fetch(ftch) // fetch clan owner information
    .then(response => response.json())
    .then(rblxdata => {
      
      if (rblxdata.displayName != rblxdata.name){
      includeDisplayName = true;
      } else {
        includeDisplayName = false;
      }
    console.log("Clan Name: " + clandata.data.Name);
      
      if (includeDisplayName == true){
        console.log("Owner: " + rblxdata.displayName + " (@" + rblxdata.name + ") | Roblox ID: " + rblxdata.id)
      } else {
        console.log("Owner: @" + rblxdata.name + " | Roblox ID: " + rblxdata.id)
      }
    console.log("Description: " + clandata.data.Desc);

      var count = (clandata.data.Status.match(/font>/g) || []).length;
      if (count == 1){
        console.log("Status: " + clandata.data.Status.substring(34, clandata.data.Status.length-7) + " | Set By: " + clandata.data.StatusUsername);
      } else if (count == 2){
        console.log("Status: " + clandata.data.Status.substring(41, clandata.data.Status.length-14) + " | Set By: " + clandata.data.StatusUsername);
      } else {
        console.log("Status: " + clandata.data.Status + " | Set By: " + clandata.data.StatusUsername);
      }
    
    // statusFilter(clandata.data.Status, clandata.data.StatusUsername);
    // console.log("Status: " + clandata.data.Status + " | Set By: " + clandata.data.StatusUsername);

      
    console.log("Clan Level: " + clandata.data.GuildLevel);
    console.log("Current Diamonds: " + clandata.data.DepositedDiamonds + " | Lifetime Diamonds: " + clandata.data.DiamondContributions.AllTime.Sum);
      if (clandata.data.GoldMedals != null) {
        console.log("Gold Medals: " + clandata.data.GoldMedals);
      }
      if (clandata.data.SilverMedals != null){
        console.log("Silver Medals: " + clandata.data.SilverMedals);
      }
      if (clandata.data.BronzeMedals != null){
        console.log("Bronze Medals: " + clandata.data.BronzeMedals);
      }
    });
  });
}

ftchClanInfo("HPX");

// clandata.data.SilverMedals
// .GoldMedals and .BronzeMedals


function statusFilter(status, setBy){

// var temp = '<font size="9999"><font color= "#32CD32">HIPM</font></font>';
var count = (status.match(/font>/g) || []).length;
if (count == 1){
  console.log("Status: " + status.substring(34, status.length-7) + " | Set By: " + setBy);
} else if (count == 2){
  console.log("Status: " + status.substring(41, status.length-14) + " | Set By: " + setBy);
} else {
  console.log("Status: " + status + " | Set By: " + setBy);
}
}
*/

// fetch var for rblx api to get clan owner name and more
var ftch = "https://users.roblox.com/v1/users/"
var includeDisplayName = false


function ftchClanInfo(clanName){
fetch('https://biggamesapi.io/api/clan/' + clanName) // fetch clan
  .then(response => response.json())
  .then(clandata => {
    var owner = clandata.data.Owner;
    ftch = ftch + owner
    
    fetch(ftch) // fetch clan owner information
    .then(response => response.json())
    .then(rblxdata => {
      
      if (rblxdata.displayName != rblxdata.name){
      includeDisplayName = true;
      } else {
        includeDisplayName = false;
      }
    alert("Clan Name: " + clandata.data.Name);
      
      if (includeDisplayName == true){
        alert("Owner: " + rblxdata.displayName + " (@" + rblxdata.name + ") | Roblox ID: " + rblxdata.id)
      } else {
        alert("Owner: @" + rblxdata.name + " | Roblox ID: " + rblxdata.id)
      }
    alert("Description: " + clandata.data.Desc);

      var count = (clandata.data.Status.match(/font>/g) || []).length;
      if (count == 1){
        alert("Status: " + clandata.data.Status.substring(34, clandata.data.Status.length-7) + " | Set By: " + clandata.data.StatusUsername);
      } else if (count == 2){
        alert("Status: " + clandata.data.Status.substring(41, clandata.data.Status.length-14) + " | Set By: " + clandata.data.StatusUsername);
      } else {
        alert("Status: " + clandata.data.Status + " | Set By: " + clandata.data.StatusUsername);
      }
    
    // statusFilter(clandata.data.Status, clandata.data.StatusUsername);
    // alert("Status: " + clandata.data.Status + " | Set By: " + clandata.data.StatusUsername);

      
    alert("Clan Level: " + clandata.data.GuildLevel);
    alert("Current Diamonds: " + clandata.data.DepositedDiamonds + " | Lifetime Diamonds: " + clandata.data.DiamondContributions.AllTime.Sum);
      if (clandata.data.GoldMedals != null) {
        alert("Gold Medals: " + clandata.data.GoldMedals);
      }
      if (clandata.data.SilverMedals != null){
        alert("Silver Medals: " + clandata.data.SilverMedals);
      }
      if (clandata.data.BronzeMedals != null){
        alert("Bronze Medals: " + clandata.data.BronzeMedals);
      }
    });
  });
}

ftchClanInfo("HPX");

// clandata.data.SilverMedals
// .GoldMedals and .BronzeMedals


function statusFilter(status, setBy){

// var temp = '<font size="9999"><font color= "#32CD32">HIPM</font></font>';
var count = (status.match(/font>/g) || []).length;
if (count == 1){
  alert("Status: " + status.substring(34, status.length-7) + " | Set By: " + setBy);
} else if (count == 2){
  alert("Status: " + status.substring(41, status.length-14) + " | Set By: " + setBy);
} else {
  alert("Status: " + status + " | Set By: " + setBy);
}
}
