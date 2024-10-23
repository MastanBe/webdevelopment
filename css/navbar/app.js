const selectCountry = document.querySelector('select');

// Iterate over the keys of countryList
for (let countryCode in countryList) {
    // Create an option element for each country
    const option = document.createElement('option');
    // Set the value of the option to the country code
    option.value = countryCode;
    // Set the text content of the option to the country name
    option.textContent = countryList[countryCode];
    // Append the option to the select element
    selectCountry.appendChild(option);
}

// Add a single change event listener to the select element
selectCountry.addEventListener('change', function(event) {
    // Call updateFlag function with the selected option element
    updateFlag(event.target);
});

// Function to update the flag based on the selected country code
const updateFlag = (selectElement) => {
    // Get the selected country code
    const selectedCountryCode = selectElement.value;
    // Get the corresponding country name
    const selectedCountryName = countryList[selectedCountryCode];
    // Construct the flag URL
    const flagUrl = `https://flagsapi.com/${selectedCountryCode.toLowerCase()}/flat/64.png`;
    // Set the src attribute of the flag image
    const flagImage = document.querySelector('.selectConatiner img');
    flagImage.src = flagUrl;
};



// const selectCountry=document.querySelector('select');
// for(ele in countryList){
//     const Country=document.createElement('option');
//     Country.innerHTML=ele;
//     const element=Country;
//     selectCountry.appendChild(element);
//     // console.log(element);
//     selectCountry.addEventListener('change',function(event){
//         console.log(event.target.value);
//         event.updateFlag(event.target);
//     })
    


// }

// const updateFlag = (element) => {
//     let currCode = element;
//     let countryCode = countryList[currCode];
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;
//   };
//   for (let select of dropdowns) {
//     for (currCode in countryList) {
//       let newOption = document.createElement("option");
//       newOption.innerText = currCode;
//       newOption.value = currCode;
//       if (select.name === "from" && currCode === "USD") {
//         newOption.selected = "selected";
//       } else if (select.name === "to" && currCode === "INR") {
//         newOption.selected = "selected";
//       }
//       select.append(newOption);
//     }
  
//     select.addEventListener("change", (evt) => {
//       updateFlag(evt.target);
//     });
//   }


// const selectCountry = document.querySelector('select');

// // Iterate over countryList and create options
// for (const country in countryList) {
//     const option = document.createElement('option');
//     option.value = country.toLowerCase(); // Set value to lowercase country name
//     option.textContent = country; // Set text content to the country name
//     selectCountry.appendChild(option); // Append the option to the select element
// }

// // Add event listener to the select element to handle change event
// selectCountry.addEventListener('change', function(event) {
//     updateFlag(event.target); // Call updateFlag with the selected country value
// });

// // Function to update flag based on selected country
// function updateFlag(selectedCountry) {
//     let currCode=selectCountry.value;
//     let countryCode = countryList[selectedCountry];
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img = document.querySelector("img");
//     img.src = newSrc;
// }
