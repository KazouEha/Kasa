/**
 * fetch data from houses.json
 * @returns 
 */
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
    
    
    
/**
 * fetch data where params is an Id of one of the houses
 * 
 * @param {*} params 
 * @returns 
 */
export async function getHouseById(params)
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
        const getHouse = await data.find((house) => house.id === params);
        return getHouse;
    }
    catch (error) {
        console.log(error);
        return [];
    }
    
}