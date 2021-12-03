var randomnumber = Math.floor(Math.random()*100+1);
var restcounter = document.getElementById('restcounter');
var displaytext = document.getElementById("displaytext");
var smalbig = document.getElementById("smalbig");
var submit = document.getElementById("submit");
var input = document.getElementById("guessNum");
 
var totalcount = 9;
var countplus = 0;

document.getElementById("submit").onclick = (FUNCTION) => {
    var usercheck = Number(guessNum.value);

    countplus++;
    input='';
    
    if ( totalcount == 10 || totalcount >= 0 ) {
        restcounter.textContent = `${totalcount--}`;
    }

    if ( usercheck == randomnumber && countplus <= 2  ){
        displaytext.textContent = "Bravo, vous etes un Genie !!!";
        displaytext.style.color = "green";
        smalbig.textContent = '';
    }

    else if ( usercheck === randomnumber && countplus >= 2 ) {
        displaytext.textContent = 'Félicitations, vous avez gagné après ' +`${countplus}`+ ' tentatives' ;
        smalbig.textContent = '';
    }

    else if (countplus >= 10) {
        displaytext.textContent = " YOU LOSS ";
        displaytext.style.color = "#ff0000";
        smalbig.textContent='';
    }
    
    else{

        displaytext.textContent = " Cest raté !!! ";

        if( usercheck < randomnumber) {
            smalbig.textContent='Last guess was small';
        }
        else if ( usercheck>randomnumber) {
            smalbig.textContent='Last guess was bigger';
        }

    }

} 
console.log(randomnumber); //find the random number//
