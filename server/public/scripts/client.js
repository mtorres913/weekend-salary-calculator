console.log('Do not pray for easy lives');
//Linked Dom elements
let highCost = 20000
let salaryTotal = 0

function submitData(event) {
    // Stop the page from refreshing
    event.preventDefault();
    // Find the input field and assign the value to our variable
    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    //! .value always returns a string, for a number use Number(string)
    let empId = document.querySelector('#emp-id').value;
    let empTitle = document.querySelector('#emp-title').value;
    let empSalary = document.querySelector('#emp-salary').value;
    // Find the tbody on the page so that we can append to it
    let monthCost = document.querySelector('#month-cost')
    // if (monthCost > highCost) {
  // finalCost = background color red to month cost
  
    empdata.innerHTML += `
        <tr>
            <td>${firstName} </td>
            <td>${lastName} </td>
            <td>${empId} </td>
            <td>${empTitle} </td>
            <td>${empSalary} </td>
            <td>
            <button onClick="deleteEmp(event)" class="delete-emp">Delete</button>
            </td>

        </tr>
    `;
    salaryTotal += empSalary/12
    monthCost.innerHTML =  `<p>Monthly Cost: ${salaryTotal}</p>`
    if (salaryTotal > highCost) {
      monthCost.innerHTML = `<p class="high-cost">Monthly Cost: ${salaryTotal}</p>`
  }
}
function deleteEmp(event) {
  event.target.parentElement.parentElement.remove();
  }

