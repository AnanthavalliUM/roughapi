const verifyHoliday = async () => {

const countryName = document.getElementById("country-inp").value;

const holidayUrl = "https://holidays.abstractapi.com/v1/"
const apiKey = "23f26bf554594fdb9bd71319b3c8249e"

  const response = await fetch(`${holidayUrl}?key=${apiKey}&country=${countryName}`);
  const data = await response.json();
  console.log(data);
  // const detailelement = document.getElementById('details');
  // detailelement.innerText = `Name - ${data.name}
  // Country - ${data.country}
  // Type - ${data.type}
  // Date -${data.date}`

  // countryName.innerHTML = ""
}






