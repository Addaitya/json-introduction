async function heroDetails(){

    const url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    const request = new Request(url);

    const response = await fetch(request);

    const superHeroText = await response.text();

    const superHero = JSON.parse(superHeroText);

    populateHeader(superHero);
    populateSection(superHero);
}

function populateHeader(obj){

    const header = document.querySelector('header');

    const myH1 = document.createElement('h1');
    myH1.textContent = obj["squadName"];
    
    const myH3 = document.createElement('h3');
    myH3.textContent = `Hometown: ${obj.homeTown} //Formed: ${obj.formed}`;

    header.appendChild(myH1);
    header.appendChild(myH3);
    
}

function populateSection(obj){

    const section = document.querySelector('section');

    for(const member of obj["members"]){

        const article = document.createElement('article');

        const name = document.createElement('h2');
        name.textContent = `${member.name}`;

        const age = document.createElement('p');
        age.textContent= `age: ${member.age}`;

        const secretName = document.createElement('p');
        secretName.textContent = `Secret identity: ${member.secretIdentity}`;

        const listHeading = document.createElement('p');
        listHeading.textContent = "Superpowers:";
        const list = document.createElement('ul');

        for(const power of member["powers"]){

            const myLi = document.createElement('li');
            myLi.textContent = power;

            list.appendChild(myLi);
        }

        article.appendChild(name);
        article.appendChild(age);
        article.appendChild(secretName);
        article.appendChild(listHeading);
        article.appendChild(list);


        section.appendChild(article);
    }
}

heroDetails();

