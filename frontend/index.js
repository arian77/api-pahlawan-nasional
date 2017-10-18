;(function () {
$.get('http://localhost:3000/api/pahlawan', data => {
  data.map(item =>{
    const id = item.id
    const firstName = item.firstName
    const lastName = item.lastName
    const die = item.die
    const area = item.area
    const senjata = item.senjata

    const newRow = `
    <tr>
      <th scope="row">${id}</th>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${die}</td>
      <td>${area}</td>
      <td>${senjata}</td>
    </tr>
    `
         $("#app-table-body").append(newRow)
  })
})
})()