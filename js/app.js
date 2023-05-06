//Saludo Inicial
Swal.fire({
    title: '<strong>Bienvenido</strong>',
    icon: 'info',
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
    },
    html:
        'Calcule de manera rápida y sencilla el consumo eléctrico de su hogar. ' + 
        'Seleccione la <b>cantidad</b> de electrodomésticos y las <b>horas de uso</b> de cada uno para obetener un cálculo velóz y preciso.',
    confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Entendido!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    })

//Operaciones    
const KWH = 9.38;

const KWH_APARATO_TOTAL = function (horas_aparato, cant_aparatos, kwh_aparatos){
        return (horas_aparato * cant_aparatos * kwh_aparatos).toFixed(2);
    };
const COSTO_APARATO = function (kwhaparto){
    return (kwhaparto * KWH).toFixed(2);
};

const MENSAJE = function(nombre,consumo, gasto){
    return 'El consumo de ' + nombre + ' es de ' + consumo + 'KW, por un total de $' + gasto + ' por hora';
}

const MENSAJE_FINAL = function(consumo_total, gasto_total){
    return 'Su consumo total es de ' + consumo_total + ' KW, por un total de $ ' + gasto_total + ' por hora';
}

//Funcion Aire acondicionado
const cant1 = () => {
    fetch('aparatos.json')
        .then(response => response.json())
        .then(data => {
        console.log(data);
            const cantidad2Input = $('cantidad2');
            const hUso2Input = $('hUso2');
            data[0].cantidad = cantidad2Input.value;
            data[0].horasUso = hUso2Input.value;    
            let kwh_aire = KWH_APARATO_TOTAL(parseInt(data[0].horasUso),parseInt(data[0].cantidad),parseInt(data[0].consumoKwh));
            //sessionStorage.setItem("valor1", JSON.stringify(kwh_aire));
            localStorage.setItem("valor1", kwh_aire);
            let costo_aire = COSTO_APARATO(kwh_aire);
            let devolucion2 = $('texto-aire');
            setTimeout(function(){
                devolucion2.innerText = MENSAJE(data[0].nombre, kwh_aire, costo_aire);
            }, 3000);
            setTimeout(function(){
                Toastify({
                    text: "Cálculo exitoso",
                    duration: 2000,
                    gravity: "top",
                    position: "right",
                    style: {
                        background: "linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201,61))",
                    },
                }).showToast();
            },3000);
        })
        
    .catch(error => console.error(error));
};

//Funcion Televisión
const cant2 = () =>{
    fetch('aparatos.json')
        .then(response => response.json())
        .then(data =>{
        console.log(data);
        const cantidad3Input = $('cantidad3');
        const hUso3Input = $('hUso3');
        data[1].cantidad = cantidad3Input.value;
        data[1].horasUso = hUso3Input.value;
        let kwh_television = KWH_APARATO_TOTAL(parseInt(data[1].horasUso),parseInt(data[1].cantidad),parseInt(data[1].consumoKwh));
        //sessionStorage.setItem("valor2", JSON.stringify(kwh_television));
        localStorage.setItem("valor2", kwh_television);
        let costo_television = COSTO_APARATO(kwh_television);
        let devolucion3 = $('texto-tv');
        setTimeout(function(){
            devolucion3.innerText = MENSAJE(data[1].nombre, kwh_television, costo_television);
        }, 3000);
        setTimeout(function(){
            Toastify({
                text: "Cálculo exitoso",
                duration: 2000,
                gravity: "top",
                position: "right",
                style: {
                    background: "linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201,61))",
                },
            }).showToast();
        },3000);
    }) 
.catch(error => console.log(error));
};

//Funcion Heladera
const cant3 = () =>{
    fetch('aparatos.json')
        .then(response => response.json())
        .then(data =>{
        console.log(data);
        const cantidad4Input = $('cantidad4');
        const hUso4Input = $('hUso4');
        data[2].cantidad = cantidad4Input.value;
        data[2].horasUso = hUso4Input.value;
        let kwh_hela = KWH_APARATO_TOTAL(parseInt(data[2].horasUso),parseInt(data[2].cantidad),parseInt(data[2].consumoKwh));
        //sessionStorage.setItem("valor3", JSON.stringify(kwh_hela));
        localStorage.setItem("valor3", kwh_hela);
        let costo_hela = COSTO_APARATO(kwh_hela);
        let devolucion4 = $('texto-hela');
        setTimeout(function(){
            devolucion4.innerText = MENSAJE(data[2].nombre, kwh_hela, costo_hela);
        }, 3000);
        setTimeout(function(){
            Toastify({
                text: "Cálculo exitoso",
                duration: 2000,
                gravity: "top",
                position: "right",
                style: {
                    background: "linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201,61))",
                },
            }).showToast();
        },3000);
    }) 
.catch(error => console.log(error));
};

//Funcion Estufa Eléctrica
const cant4 = () =>{
    fetch('aparatos.json')
        .then(response => response.json())
        .then(data =>{
        console.log(data);
        const cantidad5Input = $('cantidad5');
        const hUso5Input = $('hUso5');
        data[3].cantidad = cantidad5Input.value;
        data[3].horasUso= hUso5Input.value;
        let kwh_estu = KWH_APARATO_TOTAL(parseInt(data[3].horasUso),parseInt(data[3].cantidad),parseInt(data[3].consumoKwh));
        //sessionStorage.setItem("valor4", JSON.stringify(kwh_estu));
        localStorage.setItem("valor4", kwh_estu);
        let costo_estu = COSTO_APARATO(kwh_estu);
        let devolucion5 = $('texto-estu');
        setTimeout(function(){
            devolucion5.innerText = MENSAJE(data[3].nombre, kwh_estu, costo_estu);
        }, 3000);
        setTimeout(function(){
            Toastify({
                text: "Cálculo exitoso",
                duration: 2000,
                gravity: "top",
                position: "right",
                style: {
                    background: "linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201,61))",
                },
            }).showToast();
        },3000);
        }) 
.catch(error => console.log(error));
};

prueba();

function prueba(){
        let aire = localStorage.getItem("valor1");
        let tele = localStorage.getItem("valor2");
        let hela = localStorage.getItem("valor3");
        let estu = localStorage.getItem("valor4");
        console.log(aire);
        console.log(tele);
        console.log(hela);
        console.log(estu);
}

//Barra de progreso funcional pero incompleta

const barraElement = document.querySelector(".barra");
const setBarraValue = (barra, value) => {
    if (value < 0 || value > 1) {
    return;
    }
    barra.querySelector(".barra-fill").style.transform = `rotate(${value / 2}turn)`;
    barra.querySelector(".barra-cover").textContent = `${Math.round(value * 100)}%`;
};
setBarraValue(barraElement, 0.3);





//var tele = sessionStorage.getItem("valor2");
//var hela = sessionStorage.getItem("valor3");
//var estu = sessionStorage.getItem("valor4");



