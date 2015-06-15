var ToyShop = (function () {
    var productData;
    var customerData;
    var orderData;

    function ToyShop() {
    };

    ToyShop.prototype.loadProductData = function (data) {
        productData = (data);
    };

    ToyShop.prototype.loadCustomerData = function (data) {
        customerData = (data);
    };

    ToyShop.prototype.loadOrderData = function (data) {
        orderData = (data);
    };

    ToyShop.prototype.getNumberOfProducts = function () {
        return productData.length;
    };

    ToyShop.prototype.getNumberOfOrders = function () {
        return orderData.length;
    };

    ToyShop.prototype.getNumberOfCustomers = function () {
        return customerData.length;
    };

    ToyShop.prototype.getPriceOfItemById = function (productId) {

        for (var i = 0; i < productData.length; i++) {
            if (productData[i].id == productId) {
                return productData[i].price;

            }
        }
    };

    ToyShop.prototype.getPriceOfOrder = function (orders) {
        var orderPrice = 0.0;

        for (order in orders) {
            orderPrice = this.getTotalPriceOfItemsInOrder(orders[order]);
        }

        return orderPrice;
    }

    ToyShop.prototype.getTotalPriceOfItemsInOrder = function (items) {
        var orderPrice = 0.0;

        for (var i = 0; i < items.length; i++) {
            orderPrice += this.getPriceOfItemById(items[i]);
        }
     
        return orderPrice;
    }

    ToyShop.prototype.getCustomerNameFromOrderId = function (orderId) {
        var customerName = '';

        for (var i = 0; i < customerData.length; i++) {
            var customerOrders = customerData[i].orders;

            for (var x = 0; x < customerOrders.length; x++) {
                if (customerOrders[x] == orderId) {
                    customerName = customerData[i].name;
                }
            }
        }

        return customerName;
    }

    ToyShop.prototype.isRepeatCustomerByCustomerId = function (customerId) {
        var isRepeat = false;

        var customerOrders = customerData;

        for (var i = 0; i < customerOrders.length; i++) {
            if (customerOrders[i].id == customerId) {
                isRepeat = this.isRepeatCustomerByCustomersOrders(customerData[i].orders)
            }
        }

        return isRepeat;
    }

    ToyShop.prototype.isRepeatCustomerByCustomersOrders = function (orders) {
        var isRepeat = false;

        if (orders.length > 1) {
            isRepeat = true;
        }

        return isRepeat;
    }
 
    return ToyShop;
}());