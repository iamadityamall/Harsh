const questionContainer = document.querySelector(".questionContainer");
const submitButton = document.getElementById("submitButton");
let questionArray = [];
const videoSection = document.querySelector(".videoSection");
const videoCam = document.getElementById("videoCam");
const closevideoButton = document.getElementById("closevideoButton");

const questionFinalArray = [];

window.addEventListener("load", function () {
  questionArray = [
    "What are the crazy adventures you want to try in your life?",
    " What is the best Wi-Fi name you have seen in your entire life?",
    " Have you ever fallen off your bike in front of a huge crowd?",
    "What is it that you keep wanting to smell despite the fact that it doesn't smell particularly good?",
    'If you can still remember, "what are your funniest childhood memories?',
  ];

  questionArray.map((question, index) => {
    let dic = {
      id: null,
      question: null,
      rating: null,
    };
    const id = index;
    dic["id"] = id;
    dic["question"] = question;
    const questionDiv = document.createElement("div");
    const questionPara = document.createElement("p");
    const ratingContainer = document.createElement("div");
    const buttonEl1 = document.createElement("button");
    const buttonEl2 = document.createElement("button");
    const buttonEl3 = document.createElement("button");
    const buttonEl4 = document.createElement("button");
    const buttonEl5 = document.createElement("button");
    const spanOr = this.document.createElement("span");
    spanOr.innerText = "|";
    spanOr.style.fontWeight = "bold";
    spanOr.style.color = "gray";

    const cameraButton = document.createElement("button");
    cameraButton.innerHTML = '<i class="fa-solid fa-camera"></i>';
    cameraButton.setAttribute("id", "cameraButton");

    ratingContainer.setAttribute("class", "ratingContainer");

    buttonEl1.setAttribute("type", "button");
    buttonEl1.setAttribute("class", "star");
    buttonEl1.innerHTML = "&#9734";

    buttonEl2.setAttribute("type", "button");
    buttonEl2.setAttribute("class", "star");
    buttonEl2.innerHTML = "&#9734";

    buttonEl3.setAttribute("type", "button");
    buttonEl3.setAttribute("class", "star");
    buttonEl3.innerHTML = "&#9734";

    buttonEl4.setAttribute("type", "button");
    buttonEl4.setAttribute("class", "star");
    buttonEl4.innerHTML = "&#9734";

    buttonEl5.setAttribute("type", "button");
    buttonEl5.setAttribute("class", "star");
    buttonEl5.innerHTML = "&#9734";

    questionPara.innerText = question;
    questionDiv.setAttribute("class", "question");

    questionDiv.appendChild(questionPara);
    questionContainer.appendChild(questionDiv);

    for (let i = 0; i < 6; i++) {
      ratingContainer.appendChild(buttonEl1);
      ratingContainer.appendChild(buttonEl2);
      ratingContainer.appendChild(buttonEl3);
      ratingContainer.appendChild(buttonEl4);
      ratingContainer.appendChild(buttonEl5);
      ratingContainer.appendChild(spanOr);
      ratingContainer.appendChild(cameraButton);
    }

    questionDiv.appendChild(ratingContainer);

    const buttonArray = [buttonEl1, buttonEl2, buttonEl3, buttonEl4, buttonEl5];

    buttonArray.forEach((star, index) => {
      star.addEventListener("click", function () {
        let rating = index + 1;
        dic["rating"] = rating;

        buttonArray.forEach((item, index) => {
          if (rating >= index + 1) {
            item.innerHTML = "&#9733";
          } else {
            item.innerHTML = "&#9734";
          }
        });

        questionArray.push(dic);
      });
    });

    questionFinalArray.push(dic);

    cameraButton.addEventListener("click", function (e) {
      e.preventDefault();
      videoSection.style.display = "grid";
      let All_mediaDevices = navigator.mediaDevices;
      if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
        console.log("getUserMedia() not supported.");
        return;
      }
      All_mediaDevices.getUserMedia({
        audio: true,
        video: true,
      })
        .then(function (vidStream) {
          var video = document.getElementById("videoCam");
          if ("srcObject" in video) {
            video.srcObject = vidStream;
          } else {
            video.src = window.URL.createObjectURL(vidStream);
          }
          video.onloadedmetadata = function (e) {
            video.play();
          };
        })
        .catch(function (e) {
          console.log(e.name + ": " + e.message);
        });

      closevideoButton.addEventListener("click", function () {
        videoSection.style.display = "none";
      });
    });
  });

  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(questionFinalArray);
  });
});
