document.addEventListener("DOMContentLoaded", () => {
    let btn = document.getElementById("btn")
    btn.addEventListener("click", async function () {
        await poki()
    })

    async function poki() {
        const name = document.getElementById("pname").value.toLowerCase()
        
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            
            if (!res.ok) {
                throw new Error(res.status)
            }

            const data = await res.json()
            console.log(data)
            
            // Update the name of the Pokémon
            const namep = document.getElementById("namep")
            namep.innerHTML = data.name

            // Update the Pokémon image
            const image = document.getElementById("image")
            image.src = data.sprites.front_default
            image.style.display = "block"
        }
        catch (err) {
            console.error(err)
            alert("Error: " + err.message) // Provide a user-friendly error message
        }
    }
})
