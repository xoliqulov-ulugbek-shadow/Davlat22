let k = 0;
let allcountries = [];
const darkModeToggle = document.getElementById('darkModetoggle')
const search = document.getElementById('search')

fetch(`https://cdn.jsdelivr.net/npm/world-countries@5.1.0/countries.json`)
.then(res => res.json())
.then(countries => {
    allcountries = countries;
    displayCountries(allcountries);
})
.catch(error => console.error('Error'));

function displayCountries(countries){
    const container = document.getElementById('countries');
    container.innerHTML = countries.map(card => `
      
<div class="card">
     <img src="https://flagcdn.com/${card.cca2.toLowerCase()}.svg" alt="Flag of ${card.name.common}">
<h3>${card.name.common}</h3>
</div>
  `).join("");
}

darkModeToggle.addEventListener("click", function () {
    k++
    if (k % 2 == 0) {
        document.head.innerHTML = `<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Nunito Sans", sans-serif;
}

body{
    background-color: #202C36;
}

header {
    height: 80px;
    background-color: #2B3844;
    box-shadow: 0px 2px 4px 0px #0000000E;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
}

.con {
    max-width: 1400px;
    margin: 0 auto;
}

nav {
    color: #FFFFFF;
}

nav h1 {
    font-weight: 800;
    font-size: 24px;
}

nav button {
    color: #FFFFFF;
    font-weight: normal;
    font-size: 16px;
    background: none;
    border: none;
    outline: none;
}

input {
    width: 480px;
    height: 56px;
    border-radius: 5px;
    background-color: #2B3844;
    color: #FFFFFF;
    box-shadow: 0px 2px 9px 0px #0000000E;
    outline: none;
    border: none;
    margin-top: 50px;
    padding-left: 9px;
}

#countries {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

}

.card {
    background-color: #2d3748;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    width: 200px;
    color: white;
}
main{
    width: 100%;
}

.card img {
    width: 100%;
    height: 100px;
    object-fit: cover;
}

nav button .country {

    background-color: #f1d1f1;
}

nav button {
    padding: 10px 20px;
    margin: 20px;
    cursor: pointer;
    border: none;
    background: #4a5568;
    color: white;
    border-radius: 5px;
}

@media (max-width: 600px) {
    .con {
        padding: 0 20px;
    }

    header,
    nav {
        min-height: 70px;
    }

    nav h1 {
        font-size: 18px;
    }

    nav button {
        font-size: 13px;
        padding: 8px 10px;
        margin: 0;
    }

    #search {
        width: 100%;
        height: 50px;
        margin-top: 25px;
        margin-bottom: 25px;
    }

    #countries {
        grid-template-columns: 1fr;
        gap: 30px;
        padding: 0 20px 30px;
    }

    .card {
        width: 100%;
    }

    .card img {
        height: 180px;
    }
}

#sort {
    width: 230px;
    height: 50px;
    padding: 0 15px;
    margin-top: 50px;
    margin-left: 20px;
    background-color: #2B3844;
    color: white;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
}


@media (max-width: 600px) {
    #sort {
        width: 40%;
        height: 39px;
        margin: 0 0 25px;
    }

    #search {
        width: 100%;
    }
}
    </style> `
    }


    else {
        document.head.innerHTML = `<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Nunito Sans", sans-serif;
}

body{
    background-color: #ffffff;
}

header {
    height: 80px;
    background-color: #f1e7e7;
    box-shadow: 0px 2px 4px 0px #0000000E;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
}

.con {
    max-width: 1400px;
    margin: 0 auto;
}

nav {
    color: #2B3844;
}

nav h1 {
    font-weight: 800;
    font-size: 24px;
}

nav button {
    color: #2B3844;
    font-weight: normal;
    font-size: 16px;
    background: none;
    border: none;
    outline: none;
}

input {
    width: 480px;
    height: 56px;
    border-radius: 5px;
    background-color: #f1e7e7;
    font-weight: 600;
    color: #2B3844;
    box-shadow: 0px 2px 9px 0px #0000000E;
    outline: none;
    border: none;
    margin-top: 50px;
    padding-left: 9px;
}

#countries {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

.card {
    background-color: #f1e7e7;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    width: 200px;
    color: #2d3748;
}
main{
    width: 100%;
}

.card img {
    width: 100%;
    height: 100px;
    object-fit: cover;
}

nav button .country {

    background-color: #f1d1f1;
}

nav button {
    padding: 10px 20px;
    margin: 20px;
    cursor: pointer;
    border: none;
    background: #ffff;
   
    border-radius: 5px;
}

#sort {
    width: 230px;
    height: 50px;
    padding: 0 15px;
    margin-top: 50px;
    margin-left: 20px;
    background-color: #f1e7e7;
    color: #2B3844;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
}


@media (max-width: 600px) {
    #sort {
        width: 40%;
        height: 39px;
        margin: 0 0 25px;
    }

    #search {
        width: 100%;
    }
}

@media (max-width: 600px) {
    .con {
        padding: 0 20px;
    }

    header,
    nav {
        min-height: 70px;
    }

    nav h1 {
        font-size: 18px;
    }

    nav button {
        font-size: 13px;
        padding: 8px 10px;
        margin: 0;
    }

    #search {
        width: 100%;
        height: 50px;
        margin-top: 25px;
        margin-bottom: 25px;
    }

    #countries {
        grid-template-columns: 1fr;
        gap: 30px;
        padding: 0 20px 30px;
    }

    .card {
        width: 100%;
    }

    .card img {
        height: 180px;
    }
}

    </style> `
    }
});



search.addEventListener('input', (e1) => {
    const t1 = e1.target.value.toLowerCase().trim();

    const toza = allcountries.filter(user =>
        user.name.common.toLowerCase().includes(t1)
    );

    displayCountries(toza);
});

const sort = document.querySelector("#sort");

sort.addEventListener("change", () => {
    let sortedCountries = [...allcountries];

    if (sort.value === "name-asc") {
        sortedCountries.sort((a, b) =>
            a.name.common.localeCompare(b.name.common)
        );
    }

    if (sort.value === "name-desc") {
        sortedCountries.sort((a, b) =>
            b.name.common.localeCompare(a.name.common)
        );
    }

    if (sort.value === "population-desc") {
        sortedCountries.sort((a, b) =>
            b.population - a.population
        );
    }

    if (sort.value === "population-asc") {
        sortedCountries.sort((a, b) =>
            a.population - b.population
        );
    }

    if (sort.value === "area-desc") {
        sortedCountries.sort((a, b) =>
            (b.area || 0) - (a.area || 0)
        );
    }

    if (sort.value === "area-asc") {
        sortedCountries.sort((a, b) =>
            (a.area || 0) - (b.area || 0)
        );
    }

    displayCountries(sortedCountries);
});