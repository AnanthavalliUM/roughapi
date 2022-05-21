
const verifyZip = async () => {
  const inpElement = document.getElementById('zip-inp').value; 
  let valuesArr = inpElement.split(" "); 
  let finalURL = ""; 
  let verifyURL = "https://us-zipcode.api.smartystreets.com/lookup?key=21102174564513388&"; 
 // let response;
  if(valuesArr.length==1)
  { 
    finalURL = `${verifyURL}zipcode=${valuesArr[0]}`; 
  //const zipDetails = document.getElementById('zip-details'); 
  //response = await fetch(finalURL); // API for get requests 
} 
else if(valuesArr.length==2)
{ 
  finalURL = verifyURL + "city=" + valuesArr[0] + "&state=" + valuesArr[1];
  //finalURL = `${verifyURL}city=${valuesArr[0]}&state=${valuesArr[1]}`; 
//const zipDetails = document.getElementById("zip-details"); 
 //response = await fetch(finalURL); 
}
 else if(valuesArr.length==3)
 { 
   finalURL = `${verifyURL}city=${valuesArr[0]}&state=${valuesArr[1]}&zipcode=${valuesArr[2]}`;
  
} 
const zipDetails = document.getElementById("zip-details"); 
    const response = await fetch(finalURL); 
console.log(finalURL); 
console.log(response);
     const data = await response.json();
     console.log(data);
 const zipcodes = data.zipcodes;

    const divElement = document.createElement('div');
    divElement.classList.add('zipcode-div')
    divElement.innerText = `Zipcode - ${zipcodes.zipcode}
      Default city - ${zipcodes.default_city}
      
       State- ${zipcodes.state}
      State abbreviation - ${zipcodes.state_abbrevation}
     `
     zipDetails.innerHTML = "";
    zipDetails.append(divElement)

 
}