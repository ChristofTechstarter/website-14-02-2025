function userSignUp() {
    const userEmailTi = document.getElementById("emailTI").value;
    const userPasswordTi = document.getElementById("passwordTI").value;
    const userReapeatPasswordTi = document.getElementById("repeatPasswordTI").value;
    const userFirstName = document.getElementById("firstName").value;
    const userFamilyName = document.getElementById("familyName").value;



    if (userEmailTi && userPasswordTi && userReapeatPasswordTi && userFirstName && userFamilyName) {
        if (userEmailTi.length >= 3) {
            if (userPasswordTi === userReapeatPasswordTi) {
                alert(`User wurde Erfolgreich erstellt!\n
                    Email: ${userEmailTi}\n
                    Passwort: ${userPasswordTi}\n
                    Vorname: ${userFirstName}\n
                    Nachname: ${userFamilyName}\n`)
            } else {
                alert("Deine Passwörter stimmen nicht überein!")
            }
        } else {
            alert("Deine Email muss min. 3 Zeichen Lang sein!")
        }
    } else {
        alert("Du hast nicht alle Felder ausgefüllt!")
    }
    
}
