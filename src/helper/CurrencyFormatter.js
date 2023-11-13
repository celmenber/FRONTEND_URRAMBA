/* eslint-disable prettier/prettier */
var currencyFormatter = require('currency-formatter');

export const GetcurrencyFormatter = (valor) => {
    const Valorcurrency = currencyFormatter.format(valor, {
        locale: 'USD',
        precision: 0,
    });
    return Valorcurrency
}