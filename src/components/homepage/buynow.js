import React from "react"
import { Card, CardBody } from 'reactstrap'
import { ToastContainer } from 'react-toastify'
import { useForm } from "react-hook-form"
import { _postReserve } from "../../api/home"
import { toast } from "react-toastify"
// import '../node_modules/react-toastify/dist/ReactToastify.css'
import "react-toastify/dist/ReactToastify.css"

const ModalBuyNow = () => {

  const { register, handleSubmit, formState: {errors}, reset} = useForm({})

  const onSubmit = (data) => {
    data.slug = 'dat-truoc-x2-omni'
    if(data.note == '') {
      delete data.note
    }
    _postReserve(data).then((res) => {
      if (res.status == 200) {
        toast.info(res.data.message)
        reset()
      }
    })
  }

  return (
    <Card>
      <CardBody className='pt-0'>
      <form onSubmit={handleSubmit(onSubmit)}>
              <div className="col-md-9" style={{margin: '0 auto'}}>
              <div className="row mb-3">
              <input
                  type={"text"}
                  name="name"
                  
                  className="form-control bg-transparent"
                  placeholder="Họ và tên"
                  {...register("name", { required: "Không được để trống" })}
                />
                {errors.name && <p className='text-danger'>Không để trống trường này</p>}
              </div>
              <div className="row mb-3">
              <input
                  type={"text"}
                  name="phone"
                  className="form-control bg-transparent"
                  placeholder="Số điện thoại"
                  {...register("phone", { required: "Không được để trống" })}
                />
                {errors.phone && <p className='text-danger'>Không để trống trường này</p>}
              </div>
              <div className="row mb-3">
              <input
                  type={"email"}
                  name="email"
                  className="form-control bg-transparent"
                  placeholder="Địa chỉ"
                  {...register("email")}
                />
              </div>
              <div className="row mb-3">
              <textarea
                  type={"note"}
                  name="note"
                  className="form-control bg-transparent"
                  placeholder="Ghi chú"
                  {...register("note")}
                >
          
                </textarea>
              </div>
              </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary">
                Đặt trước
              </button>
            </div>
        </form>
      </CardBody>
      <ToastContainer autoClose={2000} />
    </Card>
  )
}

export default ModalBuyNow