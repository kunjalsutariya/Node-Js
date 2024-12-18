let no=0;
const demo = () =>{
    no++;
    if(no <= 10){
        console.log(no);
    }
}
setInterval(demo,1000);

const DEMO = () =>{
    console.log("Hello Node Js");
}
setTimeout(DEMO,4000);