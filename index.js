function changeText() {
    const topic = document.getElementById("topic1")
    topic.style.color = "red";
    topic.innerHTML = "Du Hast den Button geklickt!!!"
}

function deleteText() {
  const topic = document.getElementById("topic1")
  topic.style.color = "rgba(135, 206, 250, 0.200)";
  topic.innerHTML = "Willkommen!";
}
