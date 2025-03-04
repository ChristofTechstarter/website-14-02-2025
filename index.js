function changeText() {
    const topic = document.getElementById("topic1");
    topic.style.color = "red";
    topic.innerHTML = "Du Hast den Button geklickt!!!"
}

function deleteText() {
  const topic = document.getElementById("topic1");
  topic.style.color = "rgba(135, 206, 250, 0.200)";
  topic.innerHTML = "Willkommen!";
}

function changeBodyColor() {
  const BODY = document.getElementById("body");
  if (BODY.style.backgroundColor === "green") {
    BODY.style.backgroundColor = "red";
  } else {
    BODY.style.backgroundColor = "green";
  }
}

function removeBodyChanges() {
  const BODY = document.getElementById("body");
  BODY.style.backgroundColor = "rgb(50, 50, 50)";
}