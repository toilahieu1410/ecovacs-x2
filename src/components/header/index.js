import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import LogoEcovacs from '../../assets/images/logo.png'
import { Modal, ModalHeader, ModalBody, Button, Label } from 'reactstrap'
import QRcodeGiga from '../../assets/images/qrcode_giga.jpg'

const Header = () => {

  const [isScroll, setIsScroll] = useState(false)
  const [modal, setModal] = useState(false)

  const toggleModal = () => setModal(!modal)

  useEffect(() => {
    let prevScrollTop = window.pageYOffset

    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      setIsScroll(scrollTop > prevScrollTop)
      prevScrollTop = scrollTop
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <header className="header">
      <div className="container">
        {/* {isScroll ? (
          <div className='visible-navbar header-menu'>

          </div>
        ) : (
    
        )} */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="menu__item left">
            <ul className="list-unstyled d-flex mb-0">
              <li className="menu__item ">
                <Link to={'#'} className="text-decoration-none text-black " >ECOVACS DEEBOT X2 OMNI</Link>
              </li>
            </ul>
          </div>
          <div className="menu__item center flex-1 text-center">
            <Link to={'#'}>
              <img src={LogoEcovacs} />
            </Link>
          </div>
          <div className="menu__item right">
            <ul className="list-unstyled d-flex mb-0">
              <li className="menu__item mr-25">
                <Link to={'#'} className="text-decoration-none text-black">Hotline</Link>
              </li>

              <li className="menu__item">
                <Link to={'#'} className="btn buy text-decoration-none text-white" onClick={toggleModal}>Mua ngay</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </header>
  )
}

export default Header

