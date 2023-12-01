// Function to open the notepad modal
function openNotepad() {
    document.getElementById('notepadModal').style.display = 'block';
}

// Function to close the notepad modal
function closeNotepad() {
    document.getElementById('notepadModal').style.display = 'none';
}

// Close the modal if clicked outside the content
window.onclick = function(event) {
    let modal = document.getElementById('notepadModal');
    if (event.target === modal) {
        closeNotepad();
    }
}

// This function runs when the homepage loads
document.addEventListener('DOMContentLoaded', function() {
    // Get the current URL
    var currentUrl = window.location.href;
    // Create a URL object
    var url = new URL(currentUrl);
    // Check if the 'opennotepad' query parameter is set to 'true'
    if(url.searchParams.get('opennotepad') === 'true') {
        openNotepad();
    }
});



function openNewPage(url) {
    window.location.href = url;
}