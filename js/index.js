// 1. button event handler setup 
//      gloval data:
const main = document.getElementById('main');

const searchButton = () => {
    const input = document.getElementById('search-input');
    const inputValue = parseInt(input.value);


    if (isNaN(inputValue) || inputValue == '') {
        document.getElementById('error').innerText = 'Please Enter a Number';
        input.value = '';
        main.innerHTML = '';
    }
    else if (inputValue < 1) {
        document.getElementById('error').innerText = 'Please enter a positive number';
        input.value = '';
        main.innerHTML = '';

    }
    else {
        main.innerHTML = '';
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(res => res.json())
            .then(data => cardDisplay(data.cards));
        // document.getElementById('error').innerText = '';
        input.value = '';
        document.getElementById('error').innerText = '';
    }

}

const cardDisplay = (cards) => {
    for (const card of cards) {
        console.log(card);
        const div = document.createElement('div');


        div.classList.add('col-lg-4');
        div.classList.add('mb-5');


        div.innerHTML = `
        <div class="card text-center border-0 shadow-sm" style="width: 18rem;">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${card.suit}</h5>
            <p class="card-text">${card.code}</p>
            <button href="#" class="btn btn-primary">See Details</button>
        </div>
        </div>
        `;


        main.appendChild(div);
    }

}