document.getElementById('messageFrom').addEventListener('submit', function(event){
    event.preventDefault();

    // Get current time
    const currentTime = new Date().toString();
    document.getElementById('currentTime').innerText = 'Current time: ' + currentTime;
    
    // Get from data
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    // Display submitted information
    const info = `
        Nama: ${name}
        Tanggal Lahir: ${birthdate}
        Jenis Kelamin: ${gender}
        Pesan: ${message}
    `;
    document.getElementById('submittedInfo').innerText = info;
});