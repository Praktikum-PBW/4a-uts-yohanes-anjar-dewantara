function validasi() {
    var email = document.getElementById("email").value;
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var message = document.getElementById("message").value;
    if (email != "" && firstname!="" && lastname !="" && message !="") {
        alert('Pesan behasil dikirim');
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}