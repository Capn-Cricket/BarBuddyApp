document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            let i = 0
            setInterval(carosel, 2000)
            function carosel(){
                if (i <= data.drinks.length){
                document.querySelector('h2').innerText=data.drinks[i].strDrink;
                document.querySelector('img').src = data.drinks[i].strDrinkThumb;
                document.querySelector('.instructions').innerText= data.drinks[i].strInstructions;
                console.log(data)
                i++
                if (i === data.drinks.length) {
                    i = 0
                }
            }
            }
            })   
        
        
        .catch(err => {
            console.log(`error ${err}`)
        })

    }

