window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculate)
}
function add(a,b,c){
    return a + b + c;
}


function calculate(){
    let a = document.querySelector('#tem1').value;
    let b = document.querySelector('#tem2').value;
    let c = document.querySelector('#tem3').value;
    let d = document.querySelector('#tem4').value;
    let e = document.querySelector('#tem5').value;
    let f = document.querySelector('#tem6').value;
    let v = document.querySelector('#vo').value;
    let i = document.querySelector('#io').value;
    let result = document.querySelector('#Result');
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    d = parseFloat(d);
    e = parseFloat(e);
    f = parseFloat(f);
    v = parseFloat(v);
    i = parseFloat(i);
    let T1 = (a+b+c)/3;
    let T2 = (d+e+f)/3;
    T1 = parseFloat(T1);
    T2 = parseFloat(T2);
    // console.log(T1);
    // console.log(T2);
    let Q = v*i;
    
    // console.log(Q);


    let m = (Q*0.405465108);
    
    // console.log(m);
    let k = (T1 - T2);
    
    let S = (k*3.141592654);
    
    let Conductivity = (m/S);

   

result.innerText = `Conductivity: ${Conductivity}`;
// result.innerHTML = conso.log("CONDUCTIVITY: ",Conductivity);
}

