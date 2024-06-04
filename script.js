function back(){
    window.location.href = "https://destiny-puzzle-mapper-10258304.codehs.me"
}
const LINKS = [
    "<a class='pages' href='https://destiny-puzzle-mapper-10258304.codehs.me/missions/zerohour/floor'>Zero Hour : Floor</a>",
    "<a class='pages' href='https://destiny-puzzle-mapper-10258304.codehs.me/missions/seraphsshield/floor'>Seraph\'s Shield: Floor</a>",
    "<a class='pages' href='https://destiny-puzzle-mapper-10258304.codehs.me/dungeons/graspofavarice/messages'>Grasp: Messages</a>",
    "<a class='pages' href='https://destiny-puzzle-mapper-10258304.codehs.me/page4.html'>Page 4</a>",
    "<a class='pages' href='https://destiny-puzzle-mapper-10258304.codehs.me/page5.html'>Page 5</a>",]
document.body.innerHTML += "<div class='search-container'><input type='text' id='searchInput' onkeyup='filterFunction()' onfocus='showDropdown()' placeholder='Search...'><div id='dropdown' class='dropdown-content'>"+LINKS.join("")+"</div></div>"
// document.body.innerHTML += "<div id='form'><p class='header'>Missing Puzzles/Secrets? Feature Ideas/Requests? Want to Help Work on the Site?</p><p>click <a style='color:red;' href=''./forms'>Here</a>, or Go to the Forms tab, or  go to <span style='color:red'>https://destiny-puzzle-mapper-10258304.codehs.me/forms</span></p></div>"
function filterFunction() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let div = document.getElementById('dropdown');
    let a = div.getElementsByTagName('a');

    div.classList.add('show');

    for (let i = 0; i < a.length; i++) {
        let txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }

    if (!input.value) {
        for (let i = 0; i < a.length; i++) {
            a[i].style.display = "";
        }
    }
}

function showDropdown() {
    let div = document.getElementById('dropdown');
    let a = div.getElementsByTagName('a');
    
    div.classList.add('show');
    
    for (let i = 0; i < a.length; i++) {
        a[i].style.display = "";
    }
}

document.addEventListener('click', function (e) {
    if (!document.querySelector('.search-container').contains(e.target)) {
        document.getElementById('dropdown').classList.remove('show');
    }
});
