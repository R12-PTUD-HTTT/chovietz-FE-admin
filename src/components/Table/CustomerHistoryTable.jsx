import React, { useEffect,useState} from "react";
import CustomerHistoryRow from './CustomerHistoryRow';
import {getLstOrder} from "../../biz/customerBiz";


async function getHistoryOrderByShipper (){
    let lstData = await getLstOrder();
    return lstData;
}

function CustomerHistoryTable(props) {
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
                    <th className="text-center">Items</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Date</th>
                    <th className="text-right">Total</th>
                </tr>
            </thead>
            <tbody>
              {data && data.length >0 && data.map((item,key) => {
                 return <CustomerHistoryRow data={item}/>
              })}
            </tbody>
        </table>
    </React.Fragment>
  );
}

export default CustomerHistoryTable;
