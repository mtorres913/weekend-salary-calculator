console.log('Do not pray for easy lives');
//Linked Dom elements
let highCost = 20000
let salaryTotal = 0
  // Update the total guesses made
// // Guess history
// const guessHistory = {}
// for (let i = 0 < guessInputs.clientHeight; i++){
//     guessHistory('players{i+1}') = []
// }

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
    let empData = document.querySelector('#emp-data');
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
   // totalGuesses.innerHTML = `<p>Total Guesses Made ${currentIndex}</p>` ;
}
// Function to restart the game
function deleteEmp(event) {
  event.target.parentElement.parentElement.remove();
  }
  // function monthCost(event){
  //  let monthCost = document.querySelector('#emp-salary'/12);

  //   finalCost.innerHTML = `<p>Monthly Cost: ${monthCost} </p>`;
  // }