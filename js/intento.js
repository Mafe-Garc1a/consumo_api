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
    .then(data => {   
        console.log(data);
      
        data.items.forEach(personaje => {
            
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
                
                personaje.transformations.forEach(transformaciones=>{
                    console.log("si"+transformaciones.id);
                });
                
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

    
    