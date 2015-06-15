/// <reference path="scripts/Jasmine.js" />
/// <reference path="../javascript.test/toyshop.js" />
/// <reference path="../javascript.test/productsdata.js" />




describe("Toy shop", function () {
    var toyShop;

    beforeEach(function () {
        toyShop = new ToyShop();

        var productData = products;
        var orderData = orders;
        var customerData = customers;

        toyShop.loadProductData(productData);
        toyShop.loadOrderData(orderData);
        toyShop.loadCustomerData(customerData);
    });

    afterEach(function () {
        delete toyShop;

        delete productData;
        delete orderData;
        delete customerData;
    });

    it("should load product data", function () {
        expect(toyShop.getNumberOfProducts()).toBe(4);
    });

    it("should load all data for the shop", function () {
        expect(toyShop.getNumberOfProducts()).toBe(4);
        expect(toyShop.getNumberOfCustomers()).toBe(3);
    });

    it('should get the price of a particular toy', function () {
        var priceOfninjaTurtle = toyShop.getPriceOfItemById('ninjaTurtle');

        expect(priceOfninjaTurtle).toBe(9.99);
    });

    it('should return the total price of a particular order', function () {
        var orderData = { '1': ['transformer', 'cuddlyToy'] };
       
        toyShop.loadOrderData(orderData);

        var priceOfOrder = toyShop.getPriceOfOrder(orderData);

        expect(priceOfOrder).toBe(32.99);
    });

    it('should tell me the customer name from order id', function () {
        var nameOfCustomer = toyShop.getCustomerNameFromOrderId(1);

        expect(nameOfCustomer).toBe('Leonardo');
    });

    it('should tell me if a customer is a repeat customer', function () {

        var repeatCustomer = toyShop.isRepeatCustomerByCustomerId(0);
        var notRepeatCustomer = toyShop.isRepeatCustomerByCustomerId(2);

        expect(repeatCustomer).toBe(true);

        expect(notRepeatCustomer).toBe(false);

    });
});