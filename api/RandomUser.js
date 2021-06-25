export async function getAPI(n) {
    try {
    let resultado = await fetch('https://randomuser.me/api?results=' + n)
    let json = await resultado.json();
    return json.results;
    } catch(e){
        console.log("ERR:" + e);
    }
}
