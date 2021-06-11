export async function getAPI() {
    try {
    let resultado = await fetch('https://randomuser.me/api?results=10')
    let json = await resultado.json();
    return json.results;
    } catch(e){
        console.log("ERR:" + e);
    }
}
