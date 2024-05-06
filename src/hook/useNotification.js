import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const notify = (msg, typ) => {
  if (typ === "success") {
    toast.success(msg, { autoClose: 1000 });
  } else if (typ === "warn") {
    toast.warn(msg, { autoClose:1000 });
  } else if (typ === "error") {
    toast.error(msg, { autoClose: 1000 });
  }
};
