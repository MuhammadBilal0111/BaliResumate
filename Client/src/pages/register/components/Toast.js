import toast from "react-hot-toast";

export function ToastSuccess(message) {
  return toast.success(message, {
    style: {
      border: "1px solid #4BB543",
      padding: "16px",
      color: "#4BB543",
    },
    iconTheme: {
      primary: "#4BB543",
      secondary: "#FFFAEE",
    },
  });
}

export function ToastFailure(message) {
  return toast.error(message);
}
