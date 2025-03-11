const posicion = JSON.parse(localStorage.getItem('posicion'));
console.log(posicion);
const url = `https://dragonball-api.com/api/characters?page=1&limit=58`;
 // Configuración de la petición
const opciones = {
    method: 'GET',  // Es una petición GET
    headers: {
        'accept': '*/*'  // Este es el header que pide el curl
    }
};

fetch(url, opciones)
    .then(response => {
        // Comprobamos si la respuesta es correcta (status 200-299)
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        // Convertimos la respuesta a JSON (el cuerpo de la respuesta)
        return response.json();
    })
    .then(personajes => {   
        console.log(personajes);
        
        personajes.items.forEach(personaje => {
            
            if(personaje.id==posicion){
                console.log(personaje.name);
                const imgp = document.getElementById("image");
                const text = document.getElementById("texto");
                const img1 =document.createElement("img");
                img1.src = personaje.image;  // Usa la propiedad 'image' para obtener la imagen
                img1.alt = personaje.name;
                imgp.appendChild(img1);
                const h1 =document.createElement("h1");
                h1.textContent=personaje.name;
                const h3 =document.createElement("h3");
                h3.textContent="Race:   "+personaje.race;
                const h3_1=document.createElement("h3");
                h3_1.textContent="gender:    "+personaje.gender;
                const h3__2=document.createElement("h3");
                h3__2.textContent="maxKi:   " +personaje.maxKi
                const h3_3=document.createElement("h3");
                h3_3.textContent="ki:   "+personaje.ki;
                text.appendChild(h1);
                text.appendChild(h3);
                text.appendChild(h3_1);
                text.appendChild(h3__2);
                text.appendChild(h3_3);
               
                
              
                
            }
        });
            
    })
    .catch(error => {
        // Capturamos cualquier error (problemas de red o de la API)
        console.error('Error al obtener los personajes:', error.message);
    })
    .finally(() => {
        console.log("Petición de dragon ball finalizada");
    });

    const urlTransf=`https://dragonball-api.com/api/characters/${posicion}`;
    const opciones2 = {
        method: 'GET',  // Es una petición GET
        headers: {
            'accept': '*/*'  // Este es el header que pide el curl
        }
    };
    fetch(urlTransf, opciones2)
    .then(respu => {
        // Comprobamos si la respuesta es correcta (status 200-299)
        if (!respu.ok) {
            throw new Error(`Error HTTP: ${respu.status}`);
        }
        // Convertimos la respuesta a JSON (el cuerpo de la respuesta)
        return respu.json();
    })
    .then(date => {   
        console.log(date);
      
        console.log(date.transformations);
        const body =document.getElementById("transformaciones");
        body.innerHTML="";
        date.transformations.forEach(transformacion=>{
            const card=document.createElement("div");
            card.classList.add("character-card");
            const img = document.createElement('img');
            img.src = transformacion.image;  // Usa la propiedad 'image' para obtener la imagen
            img.alt = transformacion.name;   // Usa el nombre del personaje como alt
            card.appendChild(img); 
            body.appendChild(card)  ;   
            
        })
            
    })
    .catch(error => {
        // Capturamos cualquier error (problemas de red o de la API)
        console.error('Error al obtener los date:', error.message);
    })
    .finally(() => {
        console.log("Petición de dragon ball finalizada");
    });

    
    