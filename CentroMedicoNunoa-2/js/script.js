

// ARREGLOS POR CATEGORIA
let radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

let traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

// NUEVAS HORAS EN TRAUMATOLOGIA

traumatologia.push ({hora: '9:00',  especialista: 'RENE POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE'},
                    {hora: '9:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA'},
                    {hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE'},
                    {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE'},
                    {hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6 ', prevision: 'FONASA'});
   
// console.log(traumatologia);

let dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];





// ELIMINAR PRIMERO Y ULTIMO DE RADIOLOGIA
// PRIMERO
radiologia.shift();

// ULTIMO
 radiologia.pop();

//  console.log(radiologia);


// LISTADO DENTAL
// CAMBIO EL DOCUMENT.WRITE PARA CONOCER AMBAS MANERAS DE HACERLO
let dentis = document.getElementById("dentis");

dental.forEach(function(datos) {
    dentis.innerHTML += (` ${datos.hora} - ${datos.especialista} - ${datos.paciente} - ${datos.rut} - ${datos.prevision}. <br> <br>`);
});


// LISTADO PACIENTES
let total = document.getElementById("total");
var concadenar =radiologia.concat(traumatologia, dental);
concadenar.forEach(function(all) {
    total.innerHTML  += (` ${all.paciente}.<br>`);
});

// PACIENTES ISAPRES DENTAL
let dentalIsapre = dental.filter(function(dental){
    return (dental.prevision == "ISAPRE")
});


let dentalFiltrado = document.getElementById("dentalFiltrado");
dentalFiltrado = "";
dentalIsapre.map(function(item) {
    dentalFiltrado += `<p> ${[item.paciente, item.prevision].join(" - ")} </p>`;
});

document.write('<h4> LISTA CUNSULTA DENTAL FILTRADA POR ISAPRE </h4>');
document.write(dentalFiltrado);
let traumatologiaFonasa = traumatologia.filter(function(traumatologia){
    return (traumatologia.prevision == "FONASA")
});


let traumotologiaFiltrado = document.getElementById("traumotologiaFiltrado");
traumotologiaFiltrado = "";
traumatologiaFonasa.map(function(item) {
    traumotologiaFiltrado += `<p> ${[item.paciente, item.prevision].join(" - ")} </p>`;
});

document.write('<h4> LISTA CONSULTA TRAUMATOLOGIA POR FONASA</h4>');
document.write(traumotologiaFiltrado);

