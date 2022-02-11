export const WAIT_PAYMENT = { label: "Đợi thanh toán", value: "WAIT_PAYMENT" };
export const WAIT_CONFIRM = { label: "Chờ xác nhận", value: "WAIT_CONFIRM" };
export const HANDLING = { label: "Đang xử lí", value: "HANDLING" };
export const WRAPING = { label: "Đang đóng gói", value: "WRAPING" };
export const DELIVERING = { label: "Đang vận chuyển", value: "DELIVERING" };
export const DELIVERY_SUCCESS = {
  label: "Giao hàng thành công",
  value: "DELIVERY_SUCCESS",
};
export const DELIVERY_FAILED = {
  label: "Giao hàng thất bại",
  value: "DELIVERY_FAILED",
};
export const RETURN_ORDER = {
  label: "Đơn hàng bi trả lại",
  value: "RETURN",
};
export const CANCELED = { label: "Đơn hàng bị hủy", value: "CANCELED" };

export const OrderStatus = [
  { id: 1, ...WAIT_PAYMENT },
  { id: 2, ...WAIT_CONFIRM },
  { id: 3, ...HANDLING },
  { id: 4, ...WRAPING },
  { id: 5, ...DELIVERING },
  { id: 6, ...DELIVERY_SUCCESS },
  { id: 7, ...DELIVERY_FAILED },
  { id: 8, ...RETURN_ORDER },
  { id: 9, ...CANCELED },
];

export const TYPE_NEW_ORDER = "NEW";
export const TYPE_FINISHED_ORDER = "FINISHED";
export const TYPE_CANCELED_ORDER = "CANCELED";
