// write your code here
document.addEventListener('DOMContentLoaded', function() {
    function fetchRamens() {
        fetch ('http://localhost:3000/ramens')
        .then (Response =>Response.json())
        .then (data => renderRamens(data))
    }

    function renderRamens(ramens){
        console.log(ramens);
    }

    fetchRamens();
});