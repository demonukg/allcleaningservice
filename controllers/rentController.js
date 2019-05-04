const Machine = require("../models/machine.js");

exports.getRent = function(request, response){
    if (Machine.getAll().length == 0) {
        fetchMachine();
    }
    
    response.render("rent.hbs", {
        headTitle: "Аренда техники KARCHER в Нур-Султане (Астана)",
        headDescription: "Аренда техники Керхер (KARCHER) для уборки помещений. Аренда профессиональной клининговой техники в Нур-Султане, Астана",
        home: false,
        machines: Machine.getAll()
    });
};

function fetchMachine() {
    new Machine(
        "Поломоечная машина B 95 RS Bp Pack", 
        "Поломоечная машина с управлением стоя B 95 RS Bp Pack. Эту машину удобно применять в помещениях с нестандартной формой. Давление контакта щетки и количество подаваемой воды можно настраивать в зависимости от типа поверхности. Всасывающая балка гарантирует полное всасывание грязной воды, даже на крутых поворотах. Поверхность моментально становится чистой и сухой.",
        "/images/2.png",
        "Поломоечные машины").save();

    new Machine(
        "Поломоечная машина B 90 R Classic Bp Pack", 
        "Поломоечная машина, управляемая водителем, с питанием от аккумуляторной батареи. Универсальная машина B 90 R Classic Bp Pack с баком повышенной емкости (90 л.) и переменной рабочей шириной (55-75 см). Можно использовать роликовые и дисковые щеточные насадки.", 
        "not found",
        "Поломоечные машины").save();

    new Machine(
        "Поломоечная машина BD 50/40 RS Bp Pack", 
        "Поломоечная машина с шириной захвата 51 см и емкостью бака 40 л. Отличная модель, которая сочетает в себе легкость управления и высокий уровень маневренности. Предназначена для уборки средних по размеру помещений.", 
        "not found",
        "Поломоечные машины").save();

    new Machine(
        "Поломоечная машина BR 530 Ep", 
        "Поломойно-всасывающая машина Karcher BR 530 Ep, работающая от сети, предназначена для уборки средних по размеру помещений.",
        "not found",
        "Поломоечные машины").save();
}


/*exports.getRent = function(request, response){
    response.render("rent.hbs", {
        title: "Аренда",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    })
};;*/