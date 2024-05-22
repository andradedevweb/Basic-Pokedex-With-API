            var amount = document.getElementById('amount');
            amount.addEventListener('keyup',()=>{
            pegaPokemons(amount.value);
            })
            pegaPokemons(2);
            function pegaPokemons(amount){
            fetch('https://pokeapi.co/api/v2/pokemon?limit='+amount)
            .then(response => response.json())
            .then(allpokemon => {

                var pokemons = [];

                allpokemon.results.map((val)=>{
                    
                    fetch(val.url)
                    .then(response => response.json())
                    .then(pokemonSingle => {
                        pokemons.push({name:val.name,image:pokemonSingle.sprites.front_default});
                        

                        if(pokemons.length == amount){

                            
                            var pokemonBoxes = document.querySelector('.pokemon-boxes');
                            pokemonBoxes.innerHTML = "";

                            pokemons.map(function(val){
                            pokemonBoxes.innerHTML+=`
                                    <div class="pokemon-box">
                                        <img src="`+val.image+`" />
                                        <p>`+val.name+`</p>
                                    </div>`;
            
                            })

                        }

                    })


                })

            })
            }
