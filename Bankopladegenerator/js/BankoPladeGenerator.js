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
    let r=0;
    //r er række nummeret
    let j=[];
    //j er et array hvori de udtrukkede værdier af i gemmes, for at undgå dubletter.
    let i=Math.floor(Math.random()*9);
    //i er et tilfældigt Numre imellem 0 og 8

    function placerNul(){
      while(j.length<4){
        i=Math.floor(Math.random()*9);
        //While loopet kører indtil der er gemt 4 Numre i j. Altså indtil der er placeret 4 nuller i en række.

        if (j.includes(i)){
          i=Math.floor(Math.random()*9);
          /*Hvis der udtrækkes en værdi af i der i forvejen er gemt i j, udrtækkes der en ny værdi af i.*/
        }
        else {
          pladeUdkast[r][i]=0;
          j.push(i);
          //i værdien placeres i j arrayet
        }
      }
      return(pladeUdkast)
    }

    while(r<3){
      placerNul(pladeUdkast, r, i, j)
      r++;
      j=[];
      // Dette while loop lader der blive placeret 4 nuller i hver række, indtil alle tre rækker er udfyldt.
    }
    return(pladeUdkast)
  }
  function numre(){
    let r=0;
    //r er rækkenummeret
    let s=0;
    //s er søjlenummert
    let j=[];
    //j er et array hvortil søjlerne midlertidigt kopieres.
    let i=1;
    //i er den variable hvori de tilfældigt genrerede Numre vil blive gemt.
    let q=[];
    //q bruges som en cache til at undgå dubletter i de generede tilfældige Numre.

    function kopierSoljeNumre(){
      while(r<3){
        j.push(pladeUdkast[r][s]);
        r++;
      }
      r=0;
      return(j);
    }
    //Denne funktion kopierer søjle s over i j
    while(s<9){
      if(s==0){
        kopierSoljeNumre(r,s,j);
        let l = j.filter(x => x==1).length;
        for(let z=0; z<l; z++){
          i=Math.floor(Math.random() * (9 - 1 + 1) ) + 1;
          while(q.includes(i)){
            i=Math.floor(Math.random() * (9 - 1 + 1) ) + 1;
          }
            q.push(i);
        }
        q=q.sort();
        for(let r=0; r<3; r++){
          if((pladeUdkast[r][s]==1)&&(q.length!==0)){
            pladeUdkast[r][s]=q.slice(0,1);
            q.shift();
          }
        }
        r=0;
        j=[];
        q=[];
        s++;
      }
      if(s==1){
        kopierSoljeNumre(r,s,j);
        let l = j.filter(x => x==1).length;
        console.log(l)
        for(let z=0; z<l; z++){
          i=Math.floor(Math.random() * (19 - 10 + 1) ) + 10;
          while(q.includes(i)){
            i=Math.floor(Math.random() * (19 - 10 + 1) ) + 10;
          }
            q.push(i);
        }
        q=q.sort();
        for(let r=0; r<3; r++){
          if((pladeUdkast[r][s]==1)&&(q.length!==0)){
            pladeUdkast[r][s]=q.slice(0,1);
            q.shift();
          }
        }
        r=0;
        j=[];
        q=[];
        s++;
      }
      if(s==2){
        kopierSoljeNumre(r,s,j);
        let l = j.filter(x => x==1).length;
        console.log(l)
        for(let z=0; z<l; z++){
          i=Math.floor(Math.random() * (29 - 20 + 1) ) + 20;
          while(q.includes(i)){
            i=Math.floor(Math.random() * (29 - 20 + 1) ) + 20;
          }
            q.push(i);
        }
        q=q.sort();
        for(let r=0; r<3; r++){
          if((pladeUdkast[r][s]==1)&&(q.length!==0)){
            pladeUdkast[r][s]=q.slice(0,1);
            q.shift();
          }
        }
        r=0;
        j=[];
        q=[];
        s++;
      }
      if(s==3){
        kopierSoljeNumre(r,s,j);
        let l = j.filter(x => x==1).length;
        console.log(l)
        for(let z=0; z<l; z++){
          i=Math.floor(Math.random() * (39 - 30 + 1) ) + 30;
          while(q.includes(i)){
            i=Math.floor(Math.random() * (39 - 30 + 1) ) + 30;
          }
            q.push(i);
        }
        q=q.sort();
        for(let r=0; r<3; r++){
          if((pladeUdkast[r][s]==1)&&(q.length!==0)){
            pladeUdkast[r][s]=q.slice(0,1);
            q.shift();
          }
        }
        r=0;
        j=[];
        q=[];
        s++;
      }
      if(s==4){
        kopierSoljeNumre(r,s,j);
        let l = j.filter(x => x==1).length;
        console.log(l)
        for(let z=0; z<l; z++){
          i=Math.floor(Math.random() * (49 - 40 + 1) ) + 40;
          while(q.includes(i)){
            i=Math.floor(Math.random() * (49 - 40 + 1) ) + 40;
          }
            q.push(i);
        }
        q=q.sort();
        for(let r=0; r<3; r++){
          if((pladeUdkast[r][s]==1)&&(q.length!==0)){
            pladeUdkast[r][s]=q.slice(0,1);
            q.shift();
          }
        }
        r=0;
        j=[];
        q=[];
        s++;
      }
      if(s==5){
        kopierSoljeNumre(r,s,j);
        let l = j.filter(x => x==1).length;
        console.log(l)
        for(let z=0; z<l; z++){
          i=Math.floor(Math.random() * (59 - 50 + 1) ) + 50;
          while(q.includes(i)){
            i=Math.floor(Math.random() * (59 - 50 + 1) ) + 50;
          }
            q.push(i);
        }
        q=q.sort();
        for(let r=0; r<3; r++){
          if((pladeUdkast[r][s]==1)&&(q.length!==0)){
            pladeUdkast[r][s]=q.slice(0,1);
            q.shift();
          }
        }
        r=0;
        j=[];
        q=[];
        s++;
      }
      if(s==6){
        kopierSoljeNumre(r,s,j);
        let l = j.filter(x => x==1).length;
        console.log(l)
        for(let z=0; z<l; z++){
          i=Math.floor(Math.random() * (69 - 60 + 1) ) + 60;
          while(q.includes(i)){
            i=Math.floor(Math.random() * (69 - 60 + 1) ) + 60;
          }
            q.push(i);
        }
        q=q.sort();
        for(let r=0; r<3; r++){
          if((pladeUdkast[r][s]==1)&&(q.length!==0)){
            pladeUdkast[r][s]=q.slice(0,1);
            q.shift();
          }
        }
        r=0;
        j=[];
        q=[];
        s++;
      }
      if(s==7){
        kopierSoljeNumre(r,s,j);
        let l = j.filter(x => x==1).length;
        console.log(l)
        for(let z=0; z<l; z++){
          i=Math.floor(Math.random() * (79 - 70 + 1) ) + 70;
          while(q.includes(i)){
            i=Math.floor(Math.random() * (79 - 70 + 1) ) + 70;
          }
            q.push(i);
        }
        q=q.sort();
        for(let r=0; r<3; r++){
          if((pladeUdkast[r][s]==1)&&(q.length!==0)){
            pladeUdkast[r][s]=q.slice(0,1);
            q.shift();
          }
        }
        r=0;
        j=[];
        q=[];
        s++;
      }
      if(s==8){
        kopierSoljeNumre(r,s,j);
        let l = j.filter(x => x==1).length;
        console.log(l)
        for(let z=0; z<l; z++){
          i=Math.floor(Math.random() * (90 - 80 + 1) ) + 80;
          while(q.includes(i)){
            i=Math.floor(Math.random() * (90 - 80 + 1) ) + 80;
          }
            q.push(i);
        }
        q=q.sort();
        for(let r=0; r<3; r++){
          if((pladeUdkast[r][s]==1)&&(q.length!==0)){
            pladeUdkast[r][s]=q.slice(0,1);
            q.shift();
          }
        }
        r=0;
        j=[];
        q=[];
        s++;
      }
    }
    s=0;
    return(pladeUdkast);
  }
  layout(pladeUdkast);
  tjekLayout(pladeUdkast);
  while(tjekLayout()==false){
    kasserUdkast(pladeUdkast);
    layout(pladeUdkast);
  }
  numre(pladeUdkast);
  return(pladeUdkast)
}

function tjekLayout(){
  let s=0;
  //i er søjle koordinaten
  let r=0;
  //k er række koordinaten
  let j=[];
  //j er et array hvortil søjlerne midlertidigt kopieres

  function kopierSojle(){
      while(r<3){
        j.push(pladeUdkast[r][s]);
        r++;
      }
    return(j)
  }
  //Denne funktion kopierer de tre Numre i søjle i, over i j arrayet.

  while(s<9){
    kopierSojle(j,r,s);
    //Søjle i kopieres til j
    if(j.filter(x => x==0).length < 3){
    //Hvis anNumrelet af nuller i j er mindre end 3, nulstilles k og der rykkes en søjle frem vis i=i+1
      r=0;
      s++;
      j=[];
    }
    else{
      return false
    }
  }
  return true
  //Hvis alle 9 søjler er tjekket igennem, og der i ingen af dem var 3 nuller, returneres true
}

function udskriv(){
  for (var i = 0; i < pladeUdkast.length; i++)
    plade[i] = pladeUdkast[i].slice();
  //Indholdet af pladeUdkast kopieres over i plade

  if(plade[0][0]==0){
    document.getElementById('0.0').innerHTML=" "
  }
  else{
      document.getElementById('0.0').innerHTML=plade[0][0];
  }

  if(plade[0][1]==0){
    document.getElementById('0.1').innerHTML=" "
  }
  else{
    document.getElementById('0.1').innerHTML=plade[0][1];
  }

  if(plade[0][2]==0){
    document.getElementById('0.2').innerHTML=" "
  }
  else{
    document.getElementById('0.2').innerHTML=plade[0][2];
  }

  if(plade[0][3]==0){
    document.getElementById('0.3').innerHTML=" "
  }
  else{
    document.getElementById('0.3').innerHTML=plade[0][3];
  }

  if(plade[0][4]==0){
    document.getElementById('0.4').innerHTML=" "
  }
  else{
    document.getElementById('0.4').innerHTML=plade[0][4];
  }

  if(plade[0][5]==0){
    document.getElementById('0.5').innerHTML=" "
  }
  else{
    document.getElementById('0.5').innerHTML=plade[0][5];
  }

  if(plade[0][6]==0){
    document.getElementById('0.6').innerHTML=" "
  }
  else{
    document.getElementById('0.6').innerHTML=plade[0][6];
  }

  if(plade[0][7]==0){
    document.getElementById('0.7').innerHTML=" "
  }
  else{
    document.getElementById('0.7').innerHTML=plade[0][7];
  }

  if(plade[0][8]==0){
    document.getElementById('0.8').innerHTML=" "
  }
  else{
    document.getElementById('0.8').innerHTML=plade[0][8];
  }

  if(plade[1][0]==0){
    document.getElementById('1.0').innerHTML=" "
  }
  else{
    document.getElementById('1.0').innerHTML=plade[1][0];
  }

  if(plade[1][1]==0){
    document.getElementById('1.1').innerHTML=" "
  }
  else{
    document.getElementById('1.1').innerHTML=plade[1][1];
  }

  if(plade[1][2]==0){
    document.getElementById('1.2').innerHTML=" "
  }
  else{
    document.getElementById('1.2').innerHTML=plade[1][2];
  }

  if(plade[1][3]==0){
    document.getElementById('1.3').innerHTML=" "
  }
  else{
    document.getElementById('1.3').innerHTML=plade[1][3];
  }

  if(plade[1][4]==0){
    document.getElementById('1.4').innerHTML=" "
  }
  else{
    document.getElementById('1.4').innerHTML=plade[1][4];
  }

  if(plade[1][5]==0){
    document.getElementById('1.5').innerHTML=" "
  }
  else{
    document.getElementById('1.5').innerHTML=plade[1][5];
  }

  if(plade[1][6]==0){
    document.getElementById('1.6').innerHTML=" "
  }
  else{
    document.getElementById('1.6').innerHTML=plade[1][6];
  }

  if(plade[1][7]==0){
    document.getElementById('1.7').innerHTML=" "
  }
  else{
    document.getElementById('1.7').innerHTML=plade[1][7];
  }

  if(plade[1][8]==0){
    document.getElementById('1.8').innerHTML=" "
  }
  else{
    document.getElementById('1.8').innerHTML=plade[1][8];
  }

  if(plade[2][0]==0){
    document.getElementById('2.0').innerHTML=" "
  }
  else{
    document.getElementById('2.0').innerHTML=plade[2][0];
  }

  if(plade[2][1]==0){
    document.getElementById('2.1').innerHTML=" "
  }
  else{
    document.getElementById('2.1').innerHTML=plade[2][1];
  }

  if(plade[2][2]==0){
    document.getElementById('2.2').innerHTML=" "
  }
  else{
    document.getElementById('2.2').innerHTML=plade[2][2];
  }

  if(plade[2][3]==0){
    document.getElementById('2.3').innerHTML=" "
  }
  else{
    document.getElementById('2.3').innerHTML=plade[2][3];
  }

  if(plade[2][4]==0){
    document.getElementById('2.4').innerHTML=" "
  }
  else{
    document.getElementById('2.4').innerHTML=plade[2][4];
  }

  if(plade[2][5]==0){
    document.getElementById('2.5').innerHTML=" "
  }
  else{
    document.getElementById('2.5').innerHTML=plade[2][5];
  }

  if(plade[2][6]==0){
    document.getElementById('2.6').innerHTML=" "
  }
  else{
    document.getElementById('2.6').innerHTML=plade[2][6];
  }

  if(plade[2][7]==0){
    document.getElementById('2.7').innerHTML=" "
  }
  else{
    document.getElementById('2.7').innerHTML=plade[2][7];
  }

  if(plade[2][8]==0){
    document.getElementById('2.8').innerHTML=" "
  }
  else{
    document.getElementById('2.8').innerHTML=plade[2][8];
  }

}

function kasserUdkast(){
  pladeUdkast =[
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1]
  ];
  return(pladeUdkast)
}

function lavPlade(){
  generer(pladeUdkast);
  udskriv(plade);
}
