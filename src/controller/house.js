export async function fetchData()
{
    try {
        const response = await fetch('../houses.json'
            ,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            });
        const data = await response.json();
        return data;
      }
      catch (error) {
        console.log(error);
        return [];
      }
}
    
    
    

export async function getHouseById(params)
    {
        try {
            console.log("params",params);
            const response = await fetch('../houses.json'
                ,{
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
                });
            const data = await response.json();
            const getHouse = await data.find((house) => house.id === params);
            console.log("gethouse", getHouse);
            return getHouse;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }