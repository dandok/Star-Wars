const pictures = [
    'https://m.media-amazon.com/images/M/MV5BZWMwZGQzOWItYjM5Ny00MGQ5LTkzYjgtOGJmNjE3ODg4OTQxXkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwaZLzdWWMc2WdjbInJA7Wm5pKTHlyO1Qlw&usqp=CAU',
    'https://i.insider.com/5b6dbb41e199f31d138b4a2f?width=750&format=jpeg&auto=webp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXoZRG5qPS3_bHdFbHeYSLJfrA6tDYZ-98Q&usqp=CAU',
    'https://i.pinimg.com/originals/3e/71/76/3e7176161e72ef2b8a4366112116a5cd.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqchvk8zVcA82qddczKKDGMbtJI53u8-x7HQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCOoUo-kctIWSntu0886r3rxtz1o2fkeMXTSYskwgPmUwv4gGfswmRsl164VjaSo1vDM&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8rabXrvwIvz6Jt5HFmUp4FqfTjMgWicg0w&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxbm3IMnD0aK3Wfb8MboCcOb3CFwtL8TyuYQ&usqp=CAU',
    'https://media.wired.com/photos/5e379562d5ed2b0008cae039/125:94/w_826,h_621,c_limit/Culture_Monitor_Bond_NoTimeToDie.jpg'
];

const url = 'https://swapi.dev/api/people'
let divEl, divEl_2, img, h2El, h2El_2;
let data;

let fetchData = async () => {
    try {
        let response = await fetch(url);
        data = await response.json();

    } catch (err) {
        console.log('There is an Error')
        return;
    }
    loop(data.results);
}

fetchData()


let loop = (data) => {
   
    for (let i = 0; i <= data.length - 1; i++) {
        //create div element
        divEl = document.createElement('div');
        divEl.classList.add(`divs`);
        divEl.setAttribute('id', `div${i}`);

        divEl.style.padding = '50px';
        divEl.style.margin = '5px';
        divEl.style.position = 'center';
        
        //create h2 element
        h2El = document.createElement('h2');
        h2El.classList.add('h2El');
        h2El.innerHTML = data[i].name;
        

        //create img element
        img = document.createElement('img');
        img.src = pictures[i];
        img.alt = data[i].name;

        img.style.height = '250px';
        img.style.width = '150px';
        
        divEl.appendChild(img);
        divEl.appendChild(h2El);
        
        divEl_2 = document.createElement('div');
        divEl_2.classList.add('hide');
        divEl_2.style.display = 'none'
        divEl_2.setAttribute('id', `hidiv${i}`);

        h2El_n= document.createElement('h2');
        h2El_h = document.createElement('h2');
        h2El_g = document.createElement('h2');

        //h2El_n.innerHTML = data[i].name
        h2El_h.innerHTML = `Height: ${data[i].height} cm`;
        h2El_g.innerHTML = `Gender: ${data[i].gender}`;
        

        //divEl_2.appendChild(h2El_n);
        divEl_2.appendChild(h2El_h);
        divEl_2.appendChild(h2El_g);

        divEl.appendChild(divEl_2);
        document.getElementById('main-div').appendChild(divEl);    

        divEl.addEventListener('click', function(event) {
            let clickedElement = event.target.parentElement.lastElementChild
            if (clickedElement.style.display === 'none'){
                clickedElement.style.display = 'block';
            }else{
                clickedElement.style.display = 'none';
            }
        })
    }    
}