import React from "react";

function calculateTotalPrice(products){
  return products.reduce((a, b) => +a + +b.sale_price * b.quantity, 0);
}

function getAllItem(products){
    console.log(products);
    var items = [];

    products.forEach(item => {
        let name = item.name;
        if(!items.includes(name)){
            items.push(name);
        }
    })

    return items.join(', ');
}

function CustomerHistoryRow(props) {
  let data = props.data;
  let totalPrice = calculateTotalPrice(data.product);
  let items = getAllItem(data.product);

  return (
      <tr>
        <td className="text-center">1</td>
        <td className="text-center">{items}</td>
        <td className="text-center">{data.status}</td>
        <td className="text-center">
          {data.month}/{data.year}
        </td>
        <td className="text-right">&euro; {totalPrice}</td>
      </tr>
  );
}

export default CustomerHistoryRow;
