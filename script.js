/* function result() {
    var score=0;
    // var marks=document.querySelector('.score')

    if(document.getElementById('true1').checked)
    {
        score++;
    }
    if(document.getElementById('true2').checked)
    {
        score++;
    }
    if(document.getElementById('true3').checked)
    {
        score++;
    }

    if(document.getElementById('true4').checked)
    {
        score++;
    }
    if(document.getElementById('true5').checked)
    {
        score++;
    }

    document.write('Your Score is'+score)
    alert(score)
}
*/

function result () {
    var score=0;
    if(document.getElementById('correct1').checked)
    {
        score++;
    }
    if(document.getElementById('correct2').checked)
    {
        score++;
    }
    if(document.getElementById('correct3').checked)
    {
        score++;
    }
 /* 
    if(document.getElementById('correct4').checked)
    {
        score++;
    } if(document.getElementById('correct5').checked)
    {
        score++;
    } 
   */
    document.write("Your Score Is : "+score);
    
    
  }