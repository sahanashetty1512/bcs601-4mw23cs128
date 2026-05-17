function saveFeedback() {

    let name = document.getElementById("name").value;

    let feedback = document.getElementById("feedback").value;

    let data = {
        name: name,
        feedback: feedback
    };

    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

    feedbacks.push(data);

    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    displayFeedback();

    document.getElementById("name").value = "";

    document.getElementById("feedback").value = "";
}

function displayFeedback() {

    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

    let list = document.getElementById("feedbackList");

    list.innerHTML = "";

    feedbacks.forEach(function(item) {

        let li = document.createElement("li");

        li.innerHTML = item.name + " : " + item.feedback;

        list.appendChild(li);
    });
}

displayFeedback();