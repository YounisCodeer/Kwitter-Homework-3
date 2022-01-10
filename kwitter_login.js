function addUser () {
    player1_name_input = document.getElementById("player1_name_input").value;

    localStorage.setItem("player1_name_input", player1_name_input);

     window.location = "Kwitter_room.html";
}