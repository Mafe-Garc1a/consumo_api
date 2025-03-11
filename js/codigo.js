const url = `https://dragonball-api.com/api/characters?page=1&limit=58`;
 // Configuración de la petición
const opciones = {
    method: 'GET',  // Es una petición GET
    headers: {
        'accept': '*/*'  // Este es el header que pide el curl
    }
};



    // Realizamos la petición con fetch
fetch(url, opciones)
    .then(response => {
        // Comprobamos si la respuesta es correcta (status 200-299)
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        // Convertimos la respuesta a JSON (el cuerpo de la respuesta)
        return response.json();
    })
    .then(data => {   
        console.log(data);
        // Aquí ya tenemos la información en formato JavaScript (objeto o array)
        console.log('Personajes:', data);
        const tbody = document.getElementById("personajes");
        tbody.innerHTML= "";
        data.items.forEach(personaje => {
        const card =  document.createElement("div");
        card.classList.add('character-card');
        const img = document.createElement('img');
        img.src = personaje.image;  // Usa la propiedad 'image' para obtener la imagen
        img.alt = personaje.name;   // Usa el nombre del personaje como alt
        card.appendChild(img);      
    
        // Añadir el nombre y la raza
        const h3 = document.createElement('h3');
        h3.textContent = personaje.name;
        card.appendChild(h3);
        const p = document.createElement('p');
        p.textContent = personaje.race;
        card.appendChild(p);
        const p2 = document.createElement('p');
        p2.textContent = personaje.affiliation;
        card.appendChild(p2);
        tbody.appendChild(card);
            card.addEventListener("click" , ()=>{
                console.log("si");
                window.location.href="transformaciones.html";
                let posicion = personaje.id;
                localStorage.setItem('posicion', JSON.stringify(posicion));
            });
            
    });
    })
    .catch(error => {
        // Capturamos cualquier error (problemas de red o de la API)
        console.error('Error al obtener los personajes:', error.message);
    })
    .finally(() => {
        console.log("Petición de dragon ball finalizada");
    });

    
    