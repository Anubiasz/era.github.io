document.addEventListener('DOMContentLoaded', function() {
    var encodedUrl = 'aHR0cHM6Ly9naXRodWIuY29tL0FudWJpYXN6L0VyYS9yZWxlYXNlcy9kb3dubG9hZC8xLjAuNjQvRXJhLlNldHVwLjEuMC42NC5leGU=';
    var decodedUrl = atob(encodedUrl);
    
    var downloadBtn = document.getElementById('clickbtn');
    downloadBtn.href = decodedUrl;
    downloadBtn.download = 'Era.Setup.1.0.64.exe';
});
