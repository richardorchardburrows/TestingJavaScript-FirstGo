var products = [
{
    id: 'transformer',
    name: 'Transformer Toy',
    price: 21.50
},
{
    id: 'ninjaTurtle',
    name: 'Ninja Turtle',
    price: 9.99
},
{
    id: 'barbie',
    name: 'Malibu Barbie',
    price: 6.99
},
{
    id: 'cuddlyToy',
    name: 'Teddy Bear',
    price: 11.49
}
],
customers = [
{
    id: 1,
    name: 'Leonardo',
    orders: [0, 1]
},
{
    id: 2,
    name: 'Micky Mouse',
    orders: [3]
},
{
id: 0,
    name: 'Tenderheart Bear',
orders: [2, 4]
}
],
orders = {
    '1': ['transformer', 'cuddlyToy'],
    '2': ['ninjaTurtle'],
    '3': ['barbie', 'barbie', 'barbie'],
    '4': ['ninjaTurtle', 'transformer', 'barbie']
};
