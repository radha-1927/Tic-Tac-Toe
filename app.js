let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerO , playerX

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];  

const resetGame = () => {
    turnO = true;
    enableBoxes();  // Ensure boxes are re-enabled and cleared
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
box.addEventListener("click", () => {
    console.log("boxes was clicked");
    if(turnO) {  // player O is turn hoga
        box.innerText ="O";
        turnO = false; // corrected: use boolean value, not string
    } else {  // player x ki turn
        box.innerText = "X";
        turnO =true; // 
        }
        box.disable = true;

        checkWinner();
   });
});

const disableBoxes = () => {
  for(let box of boxes) {
    box.disabled = true;
  }
}

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;  // Corrected the property from `disable` to `disabled`
    box.innerText = "";  // Clear the text in the boxes
  }
}

// Show the winner message
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide"); // Show the winner message
  disableBoxes(); // Disable boxes after showing the winner
};


const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;  // Corrected here

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner",pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);