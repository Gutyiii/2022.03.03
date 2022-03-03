class Kosar {
    constructor() {
        if ((typeof (Storage) !== "undefined")) {
            this.kosar = [];
            let teliKosar = JSON.parse(localStorage.getItem("kosarban"));
            for (let elem in teliKosar) {
                this.kosar.push(teliKosar[elem]);
                this.megjelenit();
            }
        } else {
            this.kosar = [];
        }
    }

    getKosar() {
        for (const elem in this.kosar) {
            $("#kosar").append(this.kosar[elem]);
        }
    }

    setKoarhozAdd(elem) {
        this.kosar.push(elem);
        this.megjelenit();
        localStorage.setItem("kosarban", JSON.stringify(this.kosar));
    }

    megjelenit() {
        let tartalom = 0;
        //console.log(this.kosar);
        $("#kosar").empty();
        $("#kosar").append("<table>");
        let elem = "<tr id='fejlec'><th>Név:</th><th>Ídőtaram:</th><th>Ár:</th></tr>";
        this.kosar.forEach((value, index) => {
            console.log(value);
            for (let item in value) {
                if (item === "megnevezes" || item === "idotartam_nap" || item === "eredeti_ár")
                    elem += "<td>" + value[item] + "</td>";
                tartalom++;
            }
            elem += "<td>" + "<button class='torol' data-id='" + index + "'>Töröl</button>" + "</td>";
            elem += "</tr>";
        });
        $("table").append(elem);
        $(".torol").on("click", (event) => {
            let aktTermek = $(event.target).attr("data-id");
            this.kosar.splice(aktTermek, 1);
            localStorage.setItem("kosarban", JSON.stringify(this.kosar));
            this.megjelenit();
            tartalom--;
            if (this.kosar.length == 0/*1*/) {
                //elem.hide();
                //$("#kosar").remove(elem);
                $("#kosar").empty();
                localStorage.removeItem("kosarban");
                //$(".fejlec").remove()/hide();
                //$("table").remove();
            }
        });
    }
}