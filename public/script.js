var api_key='';

function darkMode() {
  if (document.body.style.backgroundColor == "black") {
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "black";
      document.getElementById("hero").style.background = "linear-gradient(0deg, var(--primary-color) 0%, var(--bg-color) 60%)";
      document.body.style.color = "black";
      document.body.style.dev.color = "black";
  } else {
      document.body.style.backgroundColor = "black";
      document.getElementById("hero").style.background = "linear-gradient(0deg, #261b2e 0%, #868bb9 60%)";
      document.body.style.color = "white";
      document.body.style.dev.color = "white";
  }
  console.log(document.body.style.backgroundColor);   // ctrl + j and you can see which mode you're in
}

let obj;
function connectApi(req) {

  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
      obj = data;
    })
    .then(() => {
      console.log(obj);
  });
  
}
// connectApi(true);

async function foo() {
  let obj;
  const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=' + api_key + '&units=metric')
  obj = await res.json();
  console.log(obj.weather[0].main)
  document.getElementById('temp').textContent = parseInt(obj.main.temp);
  document.getElementById('min_temp').textContent = parseInt(obj.main.temp_min) + '°C';
  document.getElementById('max_temp').textContent = parseInt(obj.main.feels_like) + '°C';
  document.getElementById('feels_temp').textContent = parseInt(obj.main.feels_like) + '°C';
  document.getElementById('locat').textContent = obj.name;
  document.getElementById('pressure').textContent = parseInt(obj.main.pressure);
  document.getElementById('uv_index').textContent = parseInt(obj.clouds.all) + 2;
  document.getElementById('wind').textContent = (obj.wind.speed);
  document.getElementById('humidity').textContent = parseInt(obj.main.humidity) + '%';
  document.getElementById('condition').textContent = obj.weather[0].main;
  document.getElementById('visibility').textContent = obj.visibility;
  document.getElementById('clouds').textContent = parseInt(obj.clouds.all);
}

// foo();
