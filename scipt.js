function csuszka() {
    document.getElementById("sebessegSzam").innerHTML = document.getElementById("csuszka").value;
}
function szamol() {
    var sebessegHTML = document.getElementById("csuszka").value;
    var tarhelyHTML = document.getElementById("tarhely").value;
    var eredmenyHTML = document.getElementById("eredmeny");
    var sebesseg = sebessegHTML;
    var tarhely = tarhelyHTML;
    var eredmeny;

    if (document.getElementById("sebessegSelect").value == "Mbps") {
        sebesseg = sebessegHTML * 1000;
    }
    else if (document.getElementById("sebessegSelect").value == "Gbps") {
        sebesseg = sebessegHTML * 1000000;
    }
    if (document.getElementById("kapacitasSelect").value == "Mb") {
        tarhely = tarhelyHTML * 1000;
    }
    else if (document.getElementById("kapacitasSelect").value == "Gb") {
        tarhely = tarhelyHTML * 1000000;
    }
    else if (document.getElementById("kapacitasSelect").value == "Tb") {
        tarhely = tarhelyHTML * 1000000000;
    }

    eredmeny = Math.round((tarhely / (sebesseg / 0.125)) * 60);

    //Lopott sor ↓
    eredmenyHTML.innerHTML = new Date(eredmeny * 1000).toISOString().substr(11, 8);
}