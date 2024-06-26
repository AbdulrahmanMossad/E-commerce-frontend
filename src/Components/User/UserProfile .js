import React, { useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import ProfileHook from "../../hook/user/profile-hook";
import deleteicon from "../../images/delete.png";
import { ToastContainer } from "react-toastify";
import editicon from "./../../images/edit.png";
const UserProfile = () => {
  const [
    user,
    show,
    handleClose,
    handleShow,
    handelSubmit,
    name,
    email,
    phone,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    changePassword,
    oldPassword,
    newPassword,
    confirmNewPassword,
    onChangeOldPass,
    onChangeNewPass,
    onChangeConfirmPass,
  ] = ProfileHook();

  return (
    <div className="breaking-word">
      <div className="admin-content-text">الصفحه الشخصية</div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">تعديل البيانات الشخصية</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={name}
            onChange={onChangeName}
            type="text"
            className="input-form font d-block mt-3 px-3"
            placeholder="اسم المستخدم"
          />
          <input
            value={email}
            onChange={onChangeEmail}
            type="email"
            className="input-form font d-block mt-3 px-3"
            placeholder="الايميل"
          />
          <input
            value={phone}
            onChange={onChangePhone}
            type="phone"
            className="input-form font d-block mt-3 px-3"
            placeholder="الهاتف"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
            تراجع
          </Button>
          <Button className="font" variant="dark" onClick={handelSubmit}>
            حفظ التعديل
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="  p-3 prod-container mt-2 mb-4">
        <Row className="d-flex justify-content-between pt-2 flex-wrap">
          <Col className="d-flex flex-wrap">
            <div className="p-2">الاسم:</div>
            <div className="p-1 item-delete-edit">{user.name}</div>
          </Col>
          <Col className="d-flex justify-content-end">
            <div onClick={handleShow} className="d-flex mx-2 flex-wrap">
              <img
                alt=""
                className="ms-1 mt-2"
                src={editicon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit"> تعديل</p>
            </div>
            <div className="d-flex ">
                <img
                  alt=""
                  className="ms-1 mt-2"
                  src={deleteicon}
                  height="17px"
                  width="15px"
                />
                <p className="item-delete-edit"> حذف</p>
              </div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex flex-wrap">
            <div className="p-2">رقم الهاتف:</div>
            <div className="p-1 item-delete-edit">{user.phone}</div>
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="d-flex flex-wrap ">
            <div className="p-2">الايميل:</div>
            <div className="p-1 item-delete-edit">{user.email}</div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="12" sm="8" md="6" className="">
            <div className="admin-content-text">تغير كملة المرور</div>
            <input
              value={oldPassword}
              onChange={onChangeOldPass}
              type="password"
              className="input-form d-block mt-1 px-3 bg-white"
              placeholder="ادخل كلمة المرور القديمة"
            />
            <input
              value={newPassword}
              onChange={onChangeNewPass}
              type="password"
              className="input-form d-block mt-3 px-3 bg-white"
              placeholder="ادخل كلمة المرور الجديده"
            />
            <input
              value={confirmNewPassword}
              onChange={onChangeConfirmPass}
              type="password"
              className="input-form d-block mt-3 px-3 bg-white"
              placeholder="تاكيد كلمة المرور الجديدة"
            />
          </Col>
        </Row>

        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
            <button
              onClick={changePassword}
              className="btn-save d-inline mt-2 "
            >
              حفظ كلمة السر
            </button>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserProfile;
