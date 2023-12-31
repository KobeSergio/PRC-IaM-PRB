var admin = require("firebase-admin");

// You need to download your Firebase service account key JSON file
// and place the path to that file below
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

var db = admin.firestore();

var offices = [
  {
    office: "National Capital Region (NCR) Office - Manila",
    director: "Lord Louis P. Valera",
    address: "P. Paredes St. cor. N. Reyes St., Sampaloc, Manila",
    email: "ncr@prc.gov.ph",
    password: "password",
  },
  {
    office: "Cordillera Administrative Region (CAR) Office - Baguio City",
    director: "Juanita L. Domogen",
    address:
      "Pine Lake View Building, No. 09 Otek Street corner Benjamin R. Salvosa Drive, Bgy. Rizal Monument, 2600 Baguio City",
    phone: "(074) 661-9105",
    email: "car@prc.gov.ph",
    password: "password",
  },
  {
    office: "Regional Office I - Rosales",
    director: "Atty. Arl Ruth B. Sacay-Sabelo",
    address:
      "Government Center, Pangasinan-Nueva Viscaya Road, Carmay East, 2441 Rosales, Pangasinan",
    phone: "(075) 649-3798",
    email: "ro1@prc.gov.ph",
    password: "password",
  },
  {
    office: "Regional Office II - Tuguegarao City",
    director: "Atty. Jose Bernabe T. Pauig",
    address: "Regional Government Center, Carig Sur, Tuguegarao City, Cagayan",
    phone: "(078) 304-0701, (078) 304-3703",
    email: "ro2@prc.gov.ph",
    password: "password",
  },
  {
    office: "Regional Office III - San Fernando City",
    director: "Paul H. Aban",
    address:
      "2nd and 3rd Floor (New) PEO Annex Building, Provincial Capitol Compound, Bgry. Santo Niño, City of San Fernando, Pampanga",
    phone: "0956-830-5757",
    email: "ro3@prc.gov.ph",
    password: "password",
  },
  {
    office: "Regional Office IVA - Lucena City",
    director: "Reynaldo V. Cristobal",
    address:
      "2nd floor Lucena Grand Central Terminal Bldg., Ilayang Dupay, Lucena City",
    phone: "(042) 373 7305",
    email: "ro4a@prc.gov.ph",
    password: "password",
  },
  {
    office: "Regional Office IVB - MIMAROPA",
    director: "Reynaldo D. Agcaoili",
    address:
      "4/F Sunnymede IT Center, 1614 Quezon Avenue, South Triangle, Quezon City",
    phone: "(02) 8733-1045",
    email: "ro4b@prc.gov.ph",
    password: "password",
  },
  {
    office: "Regional Office V - Legaspi City",
    director: "Sharo B. Lo",
    address: "Regional Government Center Site, Rawis, Legaspi City 4500",
    phone: "(052) 481-3079, (052) 481-3323",
    email: "ro5@prc.gov.ph",
    password: "password",
  },
  {
    office: "Regional Office VI - Iloilo City",
    director: "Romel B. Balisang",
    address:
      "2nd Floor, Gaisano Iloilo City Center Mall, Benigno Aquino Ave., Mandurriao, Iloilo City",
    phone: "(033) 329-2410",
    email: "ro6@prc.gov.ph",
    password: "password",
  },
  {
    office: "Regional Office VII - Cebu City",
    director: "Narcival Randie Z. Taquiqui",
    address: "HVG Arcade, Subangdaku, Mandaue City, Cebu",
    phone: "(32) 2535330",
    email: "ro7@prc.gov.ph",
    password: "password",
  },
  {
    office: "Regional Office VIII - Tacloban City",
    director: "Armond M. Englis",
    address:
      "Liceo del Verbo Divino (LVD)Campus, Law Building (former Department of Agrarian Reform - DAR Office)",
    phone: "(053) 323-9729, (053) 832-2519, (053) 832-2520",
    email: "ro8@prc.gov.ph",
    password: "password",
  },
  {
    office: "Regional Office IX - Pagadian City",
    director: "Alfonso C. Viloria",
    address: "4th Floor, C3 Building, Rizal Avenue, Pagadian City",
    phone: "(062) 925-0080",
    email: "ro9@prc.gov.ph",
    password: "password",
  },
  {
    office: "Regional Office X - Cagayan de Oro",
    director: "Julie L. Sabalza",
    address: "Skypark, Limketkai Center, Cagayan de Oro City, Misamis Oriental",
    phone: "0967-440-8198",
    email: "ro10@prc.gov.ph",
    password: "password",
  },
  {
    office: "Regional Office XI - Davao City",
    director: "Raquel R. Abrantes",
    address:
      "Calamansi St., corner 1st Street, Juna Subdivision 8000, Matina, Davao City",
    phone: "(082) 234-0006 to 07",
    email: "ro11@prc.gov.ph",
    password: "password",
  },
  {
    office: "Regional Office XII - Koronadal",
    director: "Rotelo B. Cabugsa",
    address:
      "Regional Government Center, Brgy. Carpenter Hill, Koronadal City, South Cotabato 9506",
    phone: "(083) 822-0822, 24 to 27",
    email: "ro12@prc.gov.ph",
    password: "password",
  },
  {
    office: "Regional Office XIII - Butuan City",
    director: "Cheryll P. Elicano",
    address: "Robinsons Place Butuan City, Butuan City, Agusan Del Norte",
    phone: "09302291575, (085) 815 0915",
    email: "ro13@prc.gov.ph",
    password: "password",
  },
  // ...the rest of the offices
];

async function addOffices() {
  const batch = db.batch();

  offices.forEach((office) => {
    var docRef = db.collection("ro").doc(); // automatically generate unique id
    batch.set(docRef, office);
  });

  await batch.commit();
  console.log('Batch write to "ro" collection completed');
}

addOffices();
