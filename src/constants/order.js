export const WAIT_PAYMENT = "Đợi thanh toán";
export const WAIT_CONFIRM = "Chờ xác nhận";
export const HANDLING = "Đang xử lí";
export const WRAPING = "Đang đóng gói";
export const DELIVERING = "Đang vận chuyển";
export const DELIVERY_SUCCESS = "Giao hàng thành công";
export const DELIVERY_FAILED = "Giao hàng thất bại";
export const CANCELED = "Đơn hàng bị hủy";

export const TYPE_NEW_ORDER = "NEW";
export const TYPE_FINISHED_ORDER = "FINISHED";
export const TYPE_CANCELED_ORDER = "CANCELED";

export const OrderStatus = [
  { id: 1, label: WAIT_PAYMENT, value: "WAIT_PAYMENT" },
  { id: 2, label: WAIT_CONFIRM, value: "WAIT_CONFIRM" },
  { id: 3, label: HANDLING, value: "HANDLING" },
  { id: 4, label: WRAPING, value: "WRAPING" },
  { id: 5, label: DELIVERING, value: "DELIVERING" },
  { id: 6, label: DELIVERY_SUCCESS, value: "DELIVERY_SUCCESS" },
  { id: 7, label: DELIVERY_FAILED, value: "DELIVERY_FAILED" },
  { id: 8, label: CANCELED, value: "CANCELED" },
];
