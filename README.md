# TestingJavaScript-FirstGo

Simple project showing some tests written for JavaScript within Visul Studio environment.  I used Chutzpah and Jasmine.

Initial problem that was set:


You are now the proud manager at the new Ben Smith’s Toys Superstore!

And you have the following data.



var products = [
{
id: 'transformer',
name: 'Transformer Toy'
price: 21.50
},
{
id: 'ninjaTurtle',
name: 'Ninja Turtle'
price: 9.99
},
{
id: 'barbie',
name: 'Malibu Barbie'
price: 6.99
},
{
id: 'cuddlyToy',
name: 'Teddy Bear
price: 11.49
}
],
customers = [
{
id: 1,
name: 'Leonardo'
orders: [0, 1]
},
{
id: 2,
name: 'Micky Mouse'
orderId: [3]
},
{
id: 0,
name: 'Tenderheart Bear'
orderId: [2, 4]
}
],
orders = {
'1': ['transformer', 'cuddlyToy'],
'2': ['ninjaTurtle'],
'3': ['barbie', 'barbie', 'barbie'],
'4': ['ninjaTurtle', 'transformer', 'barbie']
};

Time to get used to relational data… The kind of things the Sid used to do in SQL.

At the end of the day you want to be able to run a function that takes the three bits of data and outputs to the console or document.write.

“Order Id: [order id goes here] Total Price: [combined price of purchased items in GBP] Customer Name: [customer name goes here] Is Returning Customer: [boolean if they have shopped here before]”

For each order taken that day.


