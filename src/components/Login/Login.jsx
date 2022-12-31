import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import logo from "../../assets/images/logo.png";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungActions";
import "./login.css";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  console.log("userLogin", userLogin);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      const action = dangNhapAction(values);
      dispatch(action);
      // console.log("result", values);
    },
  });

  return (
    <div className="bg__login">
      <div className="login__container">
        <div className="login__title">
          <img className="login__logo" src={logo} alt="logo" />
          <p className="login__title--text">Sign in to your account</p>
        </div>
        <div className="login__modal">
          <form onSubmit={formik.handleSubmit}>
            <div className="inputBox">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="taiKhoan"
                required
                type="text"
              />
              <span>Account Name</span>
            </div>
            <div className="inputBox">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="matKhau"
                required
                type="password"
              />
              <span>Password</span>
            </div>
            <div className="inputBox">
              <Button className="login__button" type="submit">
                <span>Log in to your account</span>
              </Button>
            </div>
            <div className="inputBox input__register">
              <p>
                Don't have an account?
                <NavLink className="" to="/register">
                  Sign Up
                </NavLink>
              </p>
            </div>
          </form>
        </div>
        <div className="login__close" onClick={() => navigate(-2)}>
          <i class="ri-close-circle-line"></i>
        </div>
      </div>
    </div>
  );
};

export default Login;
