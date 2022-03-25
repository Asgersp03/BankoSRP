let pladeUdkast =[
  [1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1]
];

let plade = [
  [1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1]
];

function generer(){
  function layout(){
    let k=0;
    //k er række nummeret
    let j=[];
    //j er et array hvori de udtrukkede værdier af i gemmes, for at undgå dubletter.
    let i=Math.floor(Math.random()*9);
    //i er et tilfældigt tal imellem 0 og 8

    function placerNul(){
      while(j.length<4){
        i=Math.floor(Math.random()*9);
        //While loopet kører indtil der er gemt 4 tal i j. Altså indtil der er placeret 4 nuller i en række.

        if (j.includes(i)){
          i=Math.floor(Math.random()*9);
          /*Hvis der udtrækkes en værdi af i der i forvejen er gemt i j, udrtækkes der en ny værdi af i.*/
        }
        else {
          pladeUdkast[k][i]=0;
          j.push(i);
          //i værdien placeres i j arrayet
        }
      }
      return(pladeUdkast)
    }

    while(k<3){
      placerNul(pladeUdkast, k, i, j)
      k=k+1;
      j=[];
      // Dette while loop lader der blive placeret 4 nuller i hver række, indtil alle tre rækker er udfyldt.
    }
    return(pladeUdkast)
  }

  layout(pladeUdkast);
  tjekLayout(pladeUdkast);
  return(pladeUdkast)
}

function tjekLayout(){
  let i=0;
  //i er søjle koordinaten
  let k=0;
  //k er række koordinaten
  let j=[];
  //j er et array hvortil søjlerne midlertidigt kopieres

  function kopierSojle(){
      while(k<3){
        j.push(pladeUdkast[k][i])
        k=k+1
      }
    return(j)
  }
  //Denne funktion kopierer de tre tal i søjle i, over i j arrayet.

  while(i<9){
    kopierSojle(j,k,i);
    //Søjle i kopieres til j
    if(j.filter(x => x==0).length < 3){
    //Hvis antallet af nuller i j er mindre end 3, nulstilles k og der rykkes en søjle frem vis i=i+1
      k=0;
      i=i+1;
      j=[];
    }
    else{
      return false
    }
  }
  return true
  //Hvis alle 9 søjler er tjekket igennem, og der i ingen af dem var 3 nuller, returneres true
}

function tjekTal(){


  return(pladeUdkast)
}

function udskriv(){
  for (var i = 0; i < pladeUdkast.length; i++)
    plade[i] = pladeUdkast[i].slice();
  //Indholdet af pladeUdkast kopieres over i plade

  document.getElementById('0.0').innerHTML=plade[0][0];
  document.getElementById('0.1').innerHTML=plade[0][1];
  document.getElementById('0.2').innerHTML=plade[0][2];
  document.getElementById('0.3').innerHTML=plade[0][3];
  document.getElementById('0.4').innerHTML=plade[0][4];
  document.getElementById('0.5').innerHTML=plade[0][5];
  document.getElementById('0.6').innerHTML=plade[0][6];
  document.getElementById('0.7').innerHTML=plade[0][7];
  document.getElementById('0.8').innerHTML=plade[0][8];

  document.getElementById('1.0').innerHTML=plade[1][0];
  document.getElementById('1.1').innerHTML=plade[1][1];
  document.getElementById('1.2').innerHTML=plade[1][2];
  document.getElementById('1.3').innerHTML=plade[1][3];
  document.getElementById('1.4').innerHTML=plade[1][4];
  document.getElementById('1.5').innerHTML=plade[1][5];
  document.getElementById('1.6').innerHTML=plade[1][6];
  document.getElementById('1.7').innerHTML=plade[1][7];
  document.getElementById('1.8').innerHTML=plade[1][8];

  document.getElementById('2.0').innerHTML=plade[2][0];
  document.getElementById('2.1').innerHTML=plade[2][1];
  document.getElementById('2.2').innerHTML=plade[2][2];
  document.getElementById('2.3').innerHTML=plade[2][3];
  document.getElementById('2.4').innerHTML=plade[2][4];
  document.getElementById('2.5').innerHTML=plade[2][5];
  document.getElementById('2.6').innerHTML=plade[2][6];
  document.getElementById('2.7').innerHTML=plade[2][7];
  document.getElementById('2.8').innerHTML=plade[2][8];
}

function kasserUdkast(){
  pladeUdkast =[
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1]
  ];
  return(pladeUdkast)
  lavPlade();
}

function lavPlade(){
  generer(pladeUdkast);
  //tjek(plade,pladeUdkast);

  if((generer()==false)||(tjekLayout()==false)){
    kasserUdkast(pladeUdkast);
  }
  //Hvis der på noget tidspunkt i processen returneres et false, starter processen forfra.
  udskriv(plade);
}
