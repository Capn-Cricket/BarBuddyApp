document.querySelector('#cocktail').addEventListener('click', getDrink)

function getDrink() {
    let drink = document.querySelector('input').value
    //clearInterval(caroselInterval)
    //location.reload()
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            
            if(data.drinks.length > 1) {
                document.querySelector('h2').innerText=`We have more than one ${drink} drink, can you be more specific?`
                document.querySelector('.options').innerText=`Try entering one of these options:      `
                for(let i = 0; i < data.drinks.length; i++) {
                    let list = document.querySelector('ul');
                    let item = document.createElement('li');
                    item.appendChild(document.createTextNode(data.drinks[i].strDrink));
                    list.appendChild(item);
                }
                const newButton = document.createElement('button');
                newButton.textContent = 'Scroll Through Drinks'
                newButton.setAttribute('id', "scroll")
                document.querySelector('.options').appendChild(newButton)
                document.querySelector('#scroll').addEventListener('click', callCarosel)
            
            } else {
                document.querySelector('h2').innerText=data.drinks[0].strDrink;
                document.querySelector('img').src= data.drinks[0].strDrinkThumb;
                document.querySelector('.instructions').innerText = data.drinks[0].strInstructions;
                
            } 
            
            // function callCarosel () {
            //     let i = 0
            //     let caroselInterval = setInterval(carosel, 2000)
            // function carosel(){
            //     if (i <= data.drinks.length){
            //     //document.querySelector('h2').innerText=data.drinks[i].strDrink;
            //     document.querySelector('img').src = data.drinks[i].strDrinkThumb;
            //     document.querySelector('.instructions').innerText= data.drinks[i].strInstructions;
            //     console.log(data)
            //     i++
            //     if (i === data.drinks.length) {
            //         i = 0
            //     }
            // }
            // }
            // }

        // End of .then
        })   
    
        
        qu
        .catch(err => {
            console.log(`error ${err}`)
        })

    }

