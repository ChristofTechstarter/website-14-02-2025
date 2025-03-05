function userSignUp() {
    const userEmailTi = document.getElementById("emailTI").value;
    const userPasswordTi = document.getElementById("passwordTI").value;
    const userReapeatPasswordTi = document.getElementById("repeatPasswordTI").value;
    const userFirstName = document.getElementById("firstName").value;
    const userFamilyName = document.getElementById("familyName").value;

    if (userEmailTi.length >= 3) {
        if (userPasswordTi === userReapeatPasswordTi) {
            if (userFirstName && userFamilyName !== undefined) {
                alert(`User wurde Erfolgreich erstellt!\n
                    Email: ${userEmailTi}\n
                    Passwort: ${userPasswordTi}\n
                    Vorname: ${userFirstName}\n
                    Nachname: ${userFamilyName}\n`)
            } else {
                alert("Du hast nicht alle Felder korrekt ausgefüllt!")
            }
        } else {
            alert("Die Passwörter stimmen nicht überein!")
        }
    } else {
        alert("Die Email muss min. 3 Zeichen Lang sein!")
    }
    
}