//div
const questionsContainer = document.querySelector(".questionsContainer");

//inputs
const mobileNumberInput = document.getElementById("mobileNumber");
const questionsInput = document.getElementById("questionsInput");
const questionInput = document.getElementById("questionInput");

// buttons
const submitButton = document.getElementById("submitButton");
const resetButton = document.getElementById("resetButton");
const addQueriesButton = document.getElementById("addQueriesButton");
const editSaveButton = document.getElementById("editButton");
const deleteButton = document.getElementById("deleteButton");

//array
const questionArray = [];

//add button EventListener

questionsInput.addEventListener("keydown", function () {
  this.parentElement.lastChild.innerText = "";
  this.classList.remove("failMessageInputBehaviour");
  addQueriesButton.removeAttribute("disabled");
  this.focus();
});

addQueriesButton.addEventListener("click", function (e) {
  const askedQuestion = questionsInput.value;
  if (askedQuestion === "null" || !askedQuestion) {
    this.setAttribute("disabled", true);
    emptyQuestionInput(this);
  } else {
    const questionAsked = questionsInput.value;
    addQuestions(questionAsked);
    questionsInput.value = "";
  }
});

//functions
function emptyQuestionInput() {
  const parentElement = questionsInput.parentElement;
  questionsInput.classList.add("failMessageInputBehaviour");
  const failMessage = document.createElement("p");
  failMessage.innerText = "Ask your question. Empty field not allowed.";
  failMessage.classList.add("failMessage");
  parentElement.appendChild(failMessage);
}

function addQuestions(question) {
  let questionAsked = question;
  const dic = {
    id: parseInt(Math.random() * 11),
    question: questionAsked,
  };
  questionArray.push(dic);
  
  //questionDiv
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  questionsContainer.appendChild(questionDiv);

  //inputfield
  const inputField = document.createElement("textarea");
  inputField.value = questionAsked;
  inputField.setAttribute("type", "text");
  inputField.setAttribute("id", "questionInput");
  inputField.setAttribute("readonly", true);
  inputField.value = questionAsked;
  questionDiv.appendChild(inputField);

  //buttonContainer
  const buttonContainerDiv = document.createElement("div");
  buttonContainerDiv.classList.add("optionsContainer");
  questionDiv.appendChild(buttonContainerDiv);

  //button
  const buttonEdit = document.createElement("button");
  buttonEdit.setAttribute("type", "button");
  buttonEdit.setAttribute("id", "editButton");
  buttonEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  buttonContainerDiv.appendChild(buttonEdit);

  const buttonDelete = document.createElement("button");
  buttonDelete.setAttribute("type", "button");
  buttonDelete.setAttribute("id", "deleteButton");
  buttonDelete.innerHTML = '<i class="fa-solid fa-x"></i>';
  buttonContainerDiv.appendChild(buttonDelete);

  buttonEdit.addEventListener("click", function () {
    if (this.innerHTML !== '<i class="fa-solid fa-check"></i>') {
      inputField.removeAttribute("readonly");
      inputField.focus();
      this.innerHTML = '<i class="fa-solid fa-check"></i>';
      this.style.color = "green";
    } else {
      inputField.setAttribute("readonly", "true");
      this.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
      this.style.color = "#ffca08";
    }
  });

  buttonDelete.addEventListener("click", function () {
    questionDiv.remove();
    questionArray.map((item) => {
      const id = item["id"];
      if (id === dic["id"]) {
        questionArray.pop(item);
        console.log("removed element from array");
        if (!questionArray.length) {
          console.log("Element in the array is 0");
        } else {
          console.log("Element in the array is: " + questionArray.length);
        }
      }
    });
  });
}

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(questionArray);
  const mobileNumber = mobileNumberInput.value;
  console.log(mobileNumber);
  const newArray = [mobileNumber, ...questionArray];
  console.log(newArray);
});
