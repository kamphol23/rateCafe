fetch("cafes.json")


.then(function(response){
    return response.json();
})

.then(function(cafes){

  let placeholder = document.querySelector('#table-body');
  let out = "";
  for(let cafe of cafes){
    out += `
      <tr>
        <td>${cafe.name}</td>
        <td>${cafe.rating}</td>
        <td>${cafe.location}</td>
      </tr>
    `
  }

  placeholder.innerHTML = out;
})
