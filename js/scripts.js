// Material Select Initialization
$(document).ready(function () {
    $("#table1").hide();
    $("#bill").hide();

    var totalCost = 0;
    var pizzaOrdered = [];

    function Pizza(type, size, topping, crust) {
        this.type = type;
        this.size = size;
        this.topping = topping;
        this.crust = crust;
    }

    Pizza.prototype.getPizzaPrice = function () {
        return this.getTypePrice() + this.getToppingPrice() + this.getCrustType();
    }
    Pizza.prototype.getSubTotal = function () {
        return totalCost;
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
        } else {
            if (this.size === "large") {
                return 1000
            } else if (this.size === "medium")
                return 800
            else {
                return 500

            }
        }
    }
    Pizza.prototype.getToppingPrice = function () {
        if (this.size === "large") {
            if (this.topping === "pepperoni") {
                return 150;
            } else if (this.topping === "mushroom") {
                return 120;
            } else {
                return 180;
            }
        } else if (this.size === "medium") {
            if (this.topping === "pepperoni") {
                return 100;
            } else if (this.topping === "mushroom") {
                return 80;
            } else {
                return 140;
            }
        } else {
            if (this.topping === "pepperoni") {
                return 80;
            } else if (this.topping === "mushroom") {
                return 50;
            } else {
                return 100;
            }
        }
    }
    Pizza.prototype.getCrustType = function () {
        if (this.crust === "thick") {
            return 100;
        } else {
            return 0;
        }

    }

    $("#pizza-form").submit(function (e) {
        e.preventDefault();
        var typeSelected = $("#type").val();
        var sizeSelected = $("#size").val();
        var toppingSelected = $("#topping").val();
        var crustSelected = $("#crust").val();
        var total = "";
        var pizza = new Pizza(typeSelected, sizeSelected, toppingSelected, crustSelected);

        pizzaOrdered.push(pizza);

        totalCost = totalCost + pizza.getPizzaPrice();

        $("#table").append(
            "<tr>" +
            '<td scope="row">' + "#" +
            "</td>" +
            '<td scope="row">' +
            pizza.type +
            "</td>" +
            '<td scope="row">' +
            pizza.size +
            "</td>" +
            '<td scope="row">' +
            pizza.topping +
            "</td>" +
            '<td scope="row">' +
            pizza.crust +
            "</td>" +
            "<td>" +
            pizza.getPizzaPrice() +
            "</td>" +
            "<td>" +
            pizza.getSubTotal() +
            "</td>" +
            "<td>" +
            "<button class='btn btn-danger me' id='del'>Delete </button>" +
            "</td>" +
            "</tr>"
        );
        $("#table1").slideDown(3000);

        $("#checkout").click(function (e) {
            e.preventDefault();
            $("#billAmount").append(pizza.getSubTotal())
            $("#bill").slideDown(3000);

        });


    });

});