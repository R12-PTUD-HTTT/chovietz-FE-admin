import React, { useEffect,useState} from "react";
import ShipperHistoryRow from './ShipperHistoryRow';
import {getLstOrderShip} from "../../biz/shipperBiz";


async function getHistoryOrderByShipper (){
    let lstData = await getLstOrderShip();
    return lstData;
}

function ShipperHistoryTable(props) {
    const [data, dataSet] = useState([])

    useEffect(()=>{
        async function fetchData() {
            try {
               let result = await getHistoryOrderByShipper();
               dataSet(result)
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    },[])

  return (
    <React.Fragment>
      <table className="table">
            <thead>
                <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Customer Name</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Date</th>
                    <th className="text-right">Total</th>
                </tr>
            </thead>
            <tbody>
              {data && data.length >0 && data.map((item,key) => {
                  console.log(item)
                 return <ShipperHistoryRow data={item}/>
              })}
            </tbody>
        </table>
    </React.Fragment>
  );
}

export default ShipperHistoryTable;
