// Material Select Initialization
$(document).ready(function () {
    $('.mdb-select').materialSelect();
    //pizza

    class Pizza {
        constructor(types, toppings, crust, size,total) {
            this.types = types;
            this.toppings = toppings;
            this.crust = crust;
            this.size = size;
            this.total = total;

        }
    }

    Pizza.prototype.getTypePrice = function () {

        var typeNames = {
            name: ["BBQ", "Hawaaian", "ChickenTikka"]
        };
        var toppingNames = {
            name: ["mushroom", "sausage","periperi"]
        };
        var crustNames = {
            name: ["thick", "thin"]
        };
        var sizeNames = {
            name: ["large", "medium", "small"]
        };
        sizeNames.name.forEach(function (sizeName) {
            if (sizeName[0]) {
                typeNames.name.forEach(function (typeName) {
                    if (typeName[0])
                        return this.types; 
                })
            } else if (sizeName[1]) {
                typeNames.name.forEach(function (typeName) {
                    if (typeName[0])
                        return 1300;
                })
            } else {
                return 1000;
            }

        });

    }
    var pizz = new Pizza("BBQ", "mush", "thick", "small");
    alert(pizz.getTypePrice());
});