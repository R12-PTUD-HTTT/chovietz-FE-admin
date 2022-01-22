import React from "react";

function calculateTotalPrice(products){
  return products.reduce((a, b) => +a + +b.sale_price, 0);
}

function ShipperHistoryRow(props) {
  let data = props.data;
  let totalPrice = calculateTotalPrice(data.product);

  return (
      <tr>
        <td className="text-center">1</td>
        <td className="text-center">{data.customer.username}</td>
        <td className="text-center">{data.status}</td>
        <td className="text-center">
          {data.month}/{data.year}
        </td>
        <td className="text-right">&euro; {totalPrice}</td>
      </tr>
  );
}

export default ShipperHistoryRow;
