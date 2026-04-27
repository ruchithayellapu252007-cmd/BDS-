let donors = JSON.parse(localStorage.getItem("donors")) || [
  {
    name: "Runkana Nikhileswar Rao",
    blood: "B+",
    city: "Visakhapatnam",
    phone: "9908149374",
    available: true
  }
];

// display on load
displayDonors(donors);

// show donors
function displayDonors(data) {
  let list = document.getElementById("donorList");
  list.innerHTML = "";

  data.forEach(d => {
    list.innerHTML += `
      <div class="card">
        <div class="badge">${d.available ? "Available" : "Not Available"}</div>
        <h3>${d.name}</h3>
        <p>${d.city}</p>
        <p><b>${d.blood}</b></p>
        <p>${d.phone}</p>
      </div>
    `;
  });
}

// filter
function filterDonors() {
  let blood = document.getElementById("bloodGroup").value;
  let city = document.getElementById("location").value.toLowerCase();

  let filtered = donors.filter(d =>
    (blood === "" || d.blood === blood) &&
    (city === "" || d.city.toLowerCase().includes(city)) &&
    d.available
  );

  displayDonors(filtered);
}

// modal
function openForm() {
  document.getElementById("formModal").style.display = "block";
}

function closeForm() {
  document.getElementById("formModal").style.display = "none";
}

// add donor
function addDonor() {
  let newDonor = {
    name: document.getElementById("name").value,
    city: document.getElementById("city").value,
    phone: document.getElementById("phone").value,
    blood: document.getElementById("blood").value,
    available: true
  };

  donors.push(newDonor);

  localStorage.setItem("donors", JSON.stringify(donors));

  displayDonors(donors);
  closeForm();
}