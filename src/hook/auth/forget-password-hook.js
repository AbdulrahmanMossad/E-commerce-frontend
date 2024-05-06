import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import { notify } from "../useNotification";

const ForgetPasswordHook = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const res = useSelector((state) => state.authReducer.forgetPassword);
  const OnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = async () => {
    if (email === "") {
      notify("من فضلك ادخل الايميل", "error");
      return;
    }
    localStorage.setItem("user-email", email);
    setLoading(true);
    await dispatch(forgetPassword({ email }));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.data.status === "Success") {
          notify("تم ارسال الكود للايميل بنجاح", "success");
          setTimeout(() => {
            navigate("/user/verify-code");
          }, 1000);
        } else {
          notify("هناك مشكلة حاول مرة اخري لاحقا ", "error");
        }
      }
    }
  }, [loading]);
  return [OnChangeEmail, email, onSubmit];
};

export default ForgetPasswordHook;
