const houses = 'houses.json'

export function fetchData(){
    fetch(houses,
        {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })

    .then(function(response){
    console.log(response)
    return response.json();
    })

    .then(function(data) {
    console.log(data);
    })

    .catch(err){
    console.log(err)
    }
  }
  