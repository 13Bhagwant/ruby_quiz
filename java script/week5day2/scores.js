let Score={
    Parneet:1,
    Jasleen:3,
    Badal:0,
    Komal:0,
}
Score.Parneet=99;
Score['Jasleen']=Score['Jasleen']+1;
Score.Parneet++;
Score.Parneet--;
Score.Parneet-=1;
Score['Badal']=Score['Badal']+1;
Score['Komal']=Score['Komal']+1;
console.log(Score);
console.log(Object.keys(Score));
