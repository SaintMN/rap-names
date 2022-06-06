document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const playerName = document.querySelector('input').value
    try{
        const response = await fetch(`https://new-rapper-api100devs-1.herokuapp.com/api/${playerName}`)
        const data = await response.json()

        console.log(data)
        document.getElementById('.goals').innerText = data.goals
    }catch(error){
        console.log(error)
    }
}