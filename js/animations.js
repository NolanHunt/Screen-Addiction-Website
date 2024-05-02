//Currently TRYING TO GET THE "GAMES" BUTTON On the frontpage TO FOLLOW THE SAME ANIMATION PATTERN AS THE BLUE BOX, EXPANDING AND CONTRACTING.//

//copy and pasting the javascript from the box to the "games"//

let games = document.getElementById('games');

function toggleGamesSize() {
    games.classList.toggle('gamesexpanded');
}

setInterval(toggleGamesSize, 800);



        let box = document.getElementById('animatedBox');

        function toggleBoxSize() {
            box.classList.toggle('boxexpanded');
        }
        
        setInterval(toggleBoxSize, 800);
    