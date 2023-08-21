import React from "react"
import { Modal, ModalHeader, ModalBody, Button, Label } from 'reactstrap'
import { useForm } from "react-hook-form"

const ModalBuyNow = (props) => {

  const {modal, toggleModal} = props

  const { register, handleSubmit, formState: {errors}} = useForm({})

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="buy-now">
    <Modal isOpen={modal} toggle={toggleModal} size='lg' centered>
      <ModalHeader toggle={toggleModal}>
        <label className="fw-normal">Thông tin mua hàng</label>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-12">
            <div class="row mb-3">
                <label className="col-form-label col-md-3">Họ và tên</label>
                <div className="col-md-9">
                  <input 
                    type={"text"}
                    name="name"
                    className="form-control"
                    placeholder="Nhập họ và tên"
                    {...register("name", {required: "Không được để trống"})}
                  />
                   {errors.name && <p className='text-danger'>Không để trống trường này</p>}
                </div>
              </div>
              <div class="row mb-3">
                <label className="col-form-label col-md-3">Số điện thoại</label>
                <div className="col-md-9">
                  <input 
                    type={"text"}
                    name="phone"
                    className="form-control"
                    placeholder="Nhập số điện thoại"
                    {...register("phone", {required: "Không được để trống"})}
                  />
                   {errors.phone && <p className='text-danger'>Không để trống trường này</p>}
                </div>
              </div>
              <div class="row mb-3">
                <label className="col-form-label col-md-3">Email</label>
                <div className="col-md-9">
                  <input 
                    type={"email"}
                    name="email"
                    className="form-control"
                    placeholder="Nhập địa chỉ"
                    {...register("email")}
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label className="col-form-label col-md-3">Ghi chú</label>
                <div className="col-md-9">
                <textarea
                  type={"note"}
                    name="note"
                    className="form-control"
                    placeholder="Ghi chú"
                    {...register("note")}
                >
                Ghi chú
                </textarea>
               
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary">
                  Đặt trước
                </button>
              </div>
            </div>
        </form>
      </ModalBody>
    </Modal>
    </div>
  )
}

export default ModalBuyNow