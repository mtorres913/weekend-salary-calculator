console.log('hello world');
//Linked Dom elements
let highCost = 20000
  // Update the total guesses made

// // Guess history
// const guessHistory = {}
// for (let i = 0 < guessInputs.clientHeight; i++){
//     guessHistory('players{i+1}') = []
// }

function submitData(event) {
    console.log('submitGuess');
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

    let finalCost = '';
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
}
// Function to restart the game
function deleteEmp(event) {
  event.target.parentElement.parentElement.remove();
  }