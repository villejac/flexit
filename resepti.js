
// Resepti API //


// Api id sekä avain
const APP_ID = '77f30879';
const APP_KEY = '52c6513074ed86218d8c933a64d88495';
// Haetaan haettavan reseptin nimi hakukentästä
const hakusana = document.getElementById('hakusana');
// console.log(hakusana)
//let response =  await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);

// Funktio joka hakee reseptit api avaimella
async function haeReseptit() {
    let response =  await fetch(`https://api.edamam.com/search?q=${hakusana.value}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    let vastaus = await response.json();

    // Loopataan saadut tulokset, luodaan html elementtejä ja laitetaan tulokset niihin
    for (let i = 0, l = vastaus.hits.length; i < l; i++) {
        let obj = vastaus.hits[i];
        // console.log(obj.recipe.label)
        // console.log(obj.recipe.calories)

        let recipeBox = document.createElement('div');
        let foodName = document.createElement('h5');
        let foodImg = document.createElement('img');
        let calories = document.createElement('li');
        let instrLi = document.createElement('li');
        let instructionsLink = document.createElement('a');
        let linkText = document.createTextNode("valmistusohjeisiin");
        let cookTime = document.createElement('li');
        let ul = document.createElement('ul');


        // Annetaan luokka diville ja listalle, jotta voidaan muokata css
        recipeBox.classList.add("reseptit-tahan");
        ul.classList.add("valmistus-lista");

        // Tänne kirjoitetaan kaikki resepteihin liittyvät saadut tulokset
        document.getElementById('recipe-here').appendChild(recipeBox);

        // Ruoan nimen näyttäminen sivulla
        foodName.innerHTML += obj.recipe.label;
        recipeBox.appendChild(foodName);

        // Ruoan kuvan näyttäminen sivulla
        foodImg.src += obj.recipe.image;
        recipeBox.appendChild(foodImg);


        
        // Loopataan ainesosat läpi ja kirjoitetaan ne näkyville
        for (let x = 0, q = obj.recipe.ingredientLines.length; x < q; x++) {

            ainesosat = obj.recipe.ingredientLines[x];

            //let ingredients = document.createElement('p');
            
            let ingredients = document.createElement('li');
            ingredients.innerHTML = ainesosat;
            //recipeBox.appendChild(ingredients);
            // Lisätään listaan ainesosat
            ul.appendChild(ingredients);
            
            }


        // Kalorien näyttäminen sivulla
        calText = document.createTextNode("cal");
        calories.innerHTML += Math.round(obj.recipe.calories);
        //recipeBox.appendChild(calories);
        ul.appendChild(calories);
        calories.appendChild(calText);

        // Valmistusajan näyttäminen sivulla
        cookTime.innerHTML += obj.recipe.totalTime;
        if (obj.recipe.totalTime == 0) {
            cookTime.innerHTML += "";
        }
        else {
            minText = document.createTextNode("min");
            //recipeBox.appendChild(cookTime);
            ul.appendChild(cookTime);
            cookTime.appendChild(minText);
        }


        // Linkki valmistusohjeisiin
        instructionsLink.href = obj.recipe.url;
        instructionsLink.target = '_blank';
    
        instrLi.appendChild(instructionsLink)
        instructionsLink.appendChild(linkText);
        //recipeBox.appendChild(instructionsLink);
        ul.appendChild(instrLi);

        
    // Lisätään lista reseptidiviin
    recipeBox.appendChild(ul);

    }

    //console.log(vastaus.hits)
    return vastaus;
}



// Main kirjoittaa funktion
async function main() {

    await haeReseptit();
}

document.getElementById('search').onclick = function(){
    // Jos on jo haettu reseptejä ja haetaan lisää niin pyyhitään vanhat ensin pois
    document.getElementById('recipe-here').innerHTML = "";

    // Toteutetaan lopulta funktio kun painetaan nappia "hae"
    main()
};

//main();
