import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchShopAddProduct } from "../../../api/userApi";

import CustomAlert from "../../../components/Alert/CustomAlert";
import Loader from "../../../components/LoaderEffect/Loader";

export default function ShopAddProduct() {
  const history = useHistory();

  const [error, setError] = useState("");
  const [typeAlert, setTypeAlert] = useState("warning");
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [data, setData] = useState({
    name: "",
    price: "",
    type: "",
    image_link: "",
    stock: "",
    description: "",
    sale_price: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(data);
    try {
      const response = await fetchShopAddProduct(data);
      history.push('/shop/add/product/success');
    } catch (err) {
      console.log(err);
      setError("Có lỗi trong quá trình tải, vui lòng thử lại sau!");
      setShowAlert(true);
    }
    setLoading(false);
  };
  return (
    <>
    <CustomAlert
        message={error}
        isShow={showAlert}
        onClose={setShowAlert}
        variant={typeAlert}
      />
      <main>
        <div class="container">
          <div class="cad card m-5">
            <h3 class="text-center mb-4">Đăng thông tin sản phẩm</h3>
            <form class="form-card" onSubmit={handleSubmit}>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex py-2">
                  <label class="form-control-label px-5 m-auto">
                    Tên sản phẩm
                  </label>
                  <input type="text" name="name" onChange={handleChange} placeholder="Nhập tên sản phẩm"></input>
                </div>
                <div class="form-group col-sm-5 flex-column d-flex py-2 px-5">
                  <label class="form-control-label px-5 m-auto">
                    Giá sản phẩm
                  </label>
                  <input type="text" name="price" onChange={handleChange} placeholder="VNĐ"></input>
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-3 flex-column d-flex py-2">
                  <label class="form-control-label px-5 m-auto">
                    Loại sản phẩm
                  </label>
                  <input type="text" name="type" onChange={handleChange} placeholder="VD: trái cây,..."></input>
                </div>
                <div class="form-group col-sm-3 flex-column d-flex py-2">
                  <label class="form-control-label px-3 m-auto">
                    Số lượng
                  </label>
                  <input type="text" name="stock" onChange={handleChange} placeholder=""></input>
                </div>
                <div class="form-group col-sm-3 flex-column d-flex py-2">
                  <label class="form-control-label px-3 m-auto">
                    Giá bán
                  </label>
                  <input type="text" name="sale_price" onChange={handleChange} placeholder="VNĐ"></input>
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex py-2">
                  <label class="form-control-label px-3 m-auto">
                  Link hình ảnh
                  </label>
                  <input type="text" name="image_link" onChange={handleChange} placeholder="Nhập link ảnh sản phẩm"></input>
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-12 flex-column d-flex py-2">
                  <label class="form-control-label px-3 m-auto">
                    Mô tả
                  </label>
                  <input type="text" name="description" onChange={handleChange} placeholder="Mô tả của sản phẩm"></input>
                </div>
              </div>
              
              <div class="row  text-center ">
                <div class="form-group col-12 py-4">
                  <button type="submit" class="btn  btn-success" style={{position: "relative"}} disabled = {loading}>
                    <div class="h5">Thêm sản phẩm</div>
                    {loading && <Loader />}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}


