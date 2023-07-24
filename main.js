let list = document.querySelector(".list"); 
let list2 = document.querySelector(".block-2"); 
let Api1 = "https://rickandmortyapi.com/api/character"; 
let obj = {}; 
function getDataFromApi() { 
    fetch(Api1) 
        .then((data) => data.json()) 
        .then((res) => 
            res.results.forEach( 
                (item) => 
                    (list.innerHTML += ` ${item.name} <img src = "${item.image}" style="width:30px";><br>`) 
            ) 
        ) 
        .catch((err) => console.log(err)); 
} 
cile(); 
 
/* Задание №1.2.  
Рядом с именами отобразите все изображенияgrg  
которые вы получили вместе с остальными данными из сервера. 
*/
 
async function getRequestImg() { 
    try { 
        let response = await fetch(Api1); 
        let data = await response.json(); 
        let a = data.results.map((item) => item.image); 
        let b = data.results.map((item) => item.name); 
 
        for (let i = 0; i < a.length; i++) { 
            let character = { 
                image: a[i], 
                name: b[i], 
            }; 
            fetch("http://localhost:8000/characters", { 
                method: "POST", 
                body: JSON.stringify(character), 
                headers: { 
                    "Content-Type": "application/json;charset=utf-8", 
                }, 
            }); 
            list2.innerHTML +=`<p>${character.name}</p> <img src = "${character.image}" style= 'width:30px'>`;  
        }
    } catch (error) { 
        console.error("Произошла ошибка при получении данных:", error); 
    } 
}