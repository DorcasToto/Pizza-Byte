// Material Select Initialization
$(document).ready(function () {

    function Pizza(type, size, topping, crust) {
        this.type = type;
        this.size = size;
        this.topping = topping;
        this.crust = crust;
    }

    Pizza.prototype.getTypePrice = function () {
        if (this.type === "BBQ") {
            if (this.size === "large") {
                return 1200
            } else if (this.size === "medium")
                return 1100
            else {
                return 800

            }
        } else if (this.type === "periperi") {
            if (this.size === "large") {
                return 1500
            } else if (this.size === "medium")
                return 1300
            else {
                return 900

            }

        } else if (this.type === "hawaaian") {
            if (this.size === "large") {
                return 2000
            } else if (this.size === "medium")
                return 1500
            else {
                return 1300

            }
        }else{
            if (this.size === "large") {
                return 1000
            } else if (this.size === "medium")
                return 800
            else {
                return 500

            }
        }
    }

    // console.log(pizza.typeSelected);

    $("#pizza-form").submit(function (e) {
        e.preventDefault();
        var typeSelected = $("#type").val();
        var sizeSelected = $("#size").val();
        var toppingSelected = $("#topping").val();
        var crustSelected = $("#crust").val();
        var pizza = new Pizza(typeSelected, sizeSelected, toppingSelected, crustSelected);
        console.log(pizza.getTypePrice());
    });

});