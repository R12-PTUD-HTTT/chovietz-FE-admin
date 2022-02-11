import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../../redux/actions/pageAction";
import Loader from "../../../../components/LoaderEffect/Loader";
import { getShopApplyForm, createShopAccount } from "../../../../api/adminApi";
import CustomAlert from "../../../../components/Alert/CustomAlert";


function ManageShopAccount({}) {
    const dispatch = useDispatch();
    dispatch(setPageHeder("Quản lí tài khoản cửa hàng"));
    const [applyList, setApplyList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    useEffect(async () => {
        try {
            setLoading(true);
            const data = await getShopApplyForm();
            if (data.status === 200) {
                console.log(data.data);
                setApplyList(data.data);
            }
        } catch {}
        setLoading(false);
    }, []);
    const handleClick = async (e) => {
        console.log(e.target.id);
        try {
            const result = await createShopAccount(e.target.id);
            if (result.status === 200) {
                const data = await getShopApplyForm();
                setApplyList(data.data);
                setShowAlert(true);
                setError("Duyệt đơn đăng ký thành công.");
            }
            else {
                setShowAlert(true);
                setError(result.message);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
    <>
        <CustomAlert
        message={error}
        isShow={showAlert}
        onClose={setShowAlert}
        variant="warning"
        />
      <h2>Quản lí tài khoản cửa hàng </h2>
      <div className="container-fluid py-4" style={{minHeight: "70vh"}}>
            <div className="row">
                <div className="col-12">
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize ps-3">Đơn đăng ký bán hàng</h6>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th
                                                className="text-uppercase text-secondary font-weight-bolder opacity-7">
                                                Họ tên</th>
                                            <th
                                                className="text-uppercase text-secondary font-weight-bolder opacity-7 ps-2">
                                                Email</th>
                                            <th
                                                className="text-center text-uppercase text-secondary font-weight-bolder opacity-7">
                                                Số điện thoại</th>
                                            <th
                                                className="text-center text-uppercase text-secondary font-weight-bolder opacity-7">
                                                Địa chỉ</th>
                                            <th className="text-secondary opacity-7"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {applyList && applyList.length > 0 && applyList.map((item,key) => {
                                            console.log(item)
                                            return (
                                                <tr key={key}>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 ">{item.hoten}</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className=" font-weight-bold mb-0">{item.email}</p>
                                                    </td>
                                                    <td className="align-middle text-center ">
                                                        <span className="text-secondary font-weight-bold">{item.sdt}</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary font-weight-bold">{item.diachi}</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <button className="btn btn-success" id={item._id} onClick={handleClick}>
                                                            Duyệt
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    </>
)}

export default ManageShopAccount;
