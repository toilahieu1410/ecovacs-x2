import React, { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ReactPlayer from "react-player"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import '../../assets/scss/homepage/swiper.css'
import { Mousewheel, Pagination } from 'swiper/modules'
import Header from "../../components/header/index"

import Slider from "react-slick";
import Image1 from '../../assets/images/anh1.jpg'
import Image2 from '../../assets/images/anh2.jpg'
import Image3 from '../../assets/images/anh3.jpg'
import Image4 from '../../assets/images/anh4.jpg'
import Image5 from '../../assets/images/anh5.jpg'

import ImageSlider1 from '../../assets/images/slider-1.webp'
import ImageSlider2 from '../../assets/images/slider-2.webp'
import ImageSlider3 from '../../assets/images/slider-3.webp'
import ImageSlider4 from '../../assets/images/slider-4.webp'
import ImageSlider5 from '../../assets/images/slider-5.webp'
import ImageSlider6 from '../../assets/images/slider-6.webp'
import ImageSlider7 from '../../assets/images/slider-7.webp'
import ImageSlider8 from '../../assets/images/slider-8.webp'

import Video1 from '../../assets/video/video1-x2-omni.mp4'
import Video2 from '../../assets/video/video2-x2-omni.mp4'
import Video3 from '../../assets/video/video3-x2-omni.mp4'
import Video4 from '../../assets/video/video4-x2-omni.mp4'
import Video5 from '../../assets/video/video5-x2-omni.mp4'
import Video6 from '../../assets/video/video6-x2-omni.mp4'
import Video7 from '../../assets/video/video7-x2-omni.mp4'
import Video8 from '../../assets/video/video8-x2-omni.mp4'
import Video9 from '../../assets/video/video9-x2-omni.mp4'
import Video10 from '../../assets/video/video10-x2-omni.mp4'
import videoBanner from '../../assets/video/video-banner.mp4'

import ImageLogo2 from '../../assets/images/logo/logo-02.png'
import ImageLogo3 from '../../assets/images/logo/logo-03.png'
import ImageLogo4 from '../../assets/images/logo/logo-04.png'
import ImageLogoGiga from '../../assets/images/logo/logo-giga.png'

import ImageQRCode2 from '../../assets/images/logo/qrcode-2.svg'
import ImageQRCode3 from '../../assets/images/logo/qrcode-3.svg'
import ImageQRCode4 from '../../assets/images/logo/qrcode-4.svg'
import ImageQRCodeGiga from '../../assets/images/logo/qrcode-1.svg'

import ImageThongSo from '../../assets/images/thong-so.webp'
import ImageContent from '../../assets/images/anh6.jpg'
import ImageEcovacsX2 from '../../assets/images/image-ecovacsX2.webp'
import ImageEcovacX2Black from '../../assets/images/ecovacsX2-black.webp'
import IconDown from '../../assets/images/icon-down.png'
import Footer from "../footer"
import { settingSlider } from "../../utilities/settingSlider"
import ScrollAnimation from "react-animate-on-scroll"
import ReactHtmlParser from 'react-html-parser'

const listSlider = [
  {
    id: 1,
    image: ImageSlider1,
    title: 'Thêm tọa độ nhà trong bản đồ cấu trúc ngôi nhà, dễ dàng để bạn tùy chỉnh'
  },
  {
    id: 2,
    image: ImageSlider2,
    title: 'Có thể hiểu được các ngôn ngữ địa phương'
  },
  {
    id: 3,
    image: ImageSlider3,
    title: ' Nhiều đoạn hội thoại mới được thêm vào, giao tiếp như người thật'
  },
  {
    id: 4,
    image: ImageSlider4,
    title: ' Luôn phản hồi và hỗ trợ bạn kịp thời ngay cả khi đang offline, hay mất kết nối mạng'
  },
  {
    id: 5,
    image: ImageSlider5,
    title: 'Thêm tọa độ nhà trong bản đồ cấu trúc ngôi nhà, dễ dàng để bạn tùy chỉnh'
  },
  {
    id: 6,
    image: ImageSlider6,
    title: 'Có thể hiểu được các ngôn ngữ địa phương'
  },
  {
    id: 7,
    image: ImageSlider7,
    title: ' Nhiều đoạn hội thoại mới được thêm vào, giao tiếp như người thật'
  },
  {
    id: 8,
    image: ImageSlider8,
    title: ' Luôn phản hồi và hỗ trợ bạn kịp thời ngay cả khi đang offline, hay mất kết nối mạng'
  },
]

const listData = [
  {
    id: 1,
    image: Image1,
    title: 'Hơn cả đổi mới, hơn cả đột phá',
    description: 'Thiết kế thân vuông hoàn toàn mới theo đuổi giới hạn của ngành và là một chuyên gia làm sạch thực sự trong mọi tình huống.'
  },
  {
    id: 2,
    image: Image2,
    title: 'Sử dụng dễ dàng, trải nghiệm rảnh tay',
    description: 'Trạm sạc đa năng giúp trải nghiệm dọn dẹp rảnh tay hơn, và tính năng nhận diện nước thải thông minh đã được tích hợp, giúp vắt cho đến khi sạch hoàn toàn'
  },
  {
    id: 3,
    image: Image3,
    title: 'Thông minh, hơn cả sự mong đợi',
    description: 'Được trang bị công nghệ Gemini và Ecovacs AINA, robot có thể phản ứng linh hoạt với những thay đổi và các điều kiện môi trường khác nhau.'
  },
  {
    id: 4,
    image: Image4,
    title: 'Công nghệ nâng cấp độc quyền',
    description: '7 nâng cấp chính của trợ lý giọng nói YIKO 2.0 và công nghệ 3D Mapping 2.0 mang lại trải nghiệm tương tác chân thực.'
  },
  {
    id: 5,
    image: Image5,
    title: 'Diện mạo thanh lịch từ trong ra ngoài',
    description: 'Sự kết hợp hoàn hảo giữa phong cách phương Đông và công nghệ hiện đại, phù hợp với những không gian nhà cao cấp nhưng vẫn mang phong cách tối giản.'

  }
]

const listVideo1 = [
  {
    id: 1,
    title: `Mỏng hơn: Thân máy siêu mỏng <span>95</span><i>mm</i>`,
    videoId: Video1,
  },
  {
    id: 2,
    title: `Hẹp hơn: Thân máy siêu hẹp <span>320</span><i>mm</i>`,
    videoId: Video2,
  },
  {
    id: 3,
    title: "Rộng hơn: Bàn chải con lăn rộng nhất đến <span>200</span><i>mm</i>",
    videoId: Video3,
  },
  {
    id: 4,
    title: `Chặt chẽ hơn: Độ bao phủ góc lên đến <span>99.7</span><i>%</i>`,
    videoId: Video4,
  },
  {
    id: 5,
    title: `Cao hơn: Nâng giẻ lau nhà <span>15</span><i>mm</i>`,
    videoId: Video5,
  },
  {
    id: 6,
    title: `Mạnh hơn: <span>8000</span><i>Pa</i> lốc xoáy`,
    videoId: Video6,
  },
]
  
const Home = () => {

  const mapSwiperRef = useRef(null)

  const [isLastSlide, setIsLastSlide] = useState(false)
  const [isFirstSlide, setIsFirstSlide] = useState(true)

  const handleMapSwiperChange = () => {

    // console.log(mapSwiperRef.current.swiper.activeIndex)

    // if (mapSwiperRef.current) {
    //   const currentSlideIndex = mapSwiperRef.current.swiper.activeIndex
    //   if (currentSlideIndex === listVideo1.length - 1) {
    //     setIsLastSlide(true)
    //   } else {
    //     setIsLastSlide(false)
    //   }
    // }
    if (mapSwiperRef.current) {
      const currentSlideIndex = mapSwiperRef.current.swiper.activeIndex
      setIsLastSlide(currentSlideIndex === listVideo1.length - 1)
      setIsFirstSlide(currentSlideIndex === 0)
    }
  }

  const handleMouseWheel = (e) => {
    if (isLastSlide && e.deltaY > 0) {
      // Khi đạt đến slide cuối cùng và có cuộn chuột xuống
      window.scrollTo({
        top: window.scrollY + e.deltaY,
        behavior: 'smooth',
      })
    }

    if (isFirstSlide && e.deltaY < 0) {
      // Khi ở slide đầu tiên và cuộn chuột lên
      window.scrollTo({
        top: window.scrollY + e.deltaY,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    window.addEventListener('wheel', handleMouseWheel);
    return () => {
      window.removeEventListener('wheel', handleMouseWheel);
    };
  }, [isLastSlide, isFirstSlide])

  return (
    <div className="homepage">
      <Header />
      <div className="list-banner">
        <div className="section-1">
          <ReactPlayer 
            className="data-video w-100 h-100 " 
            muted={true} 
            playing={true} 
            url={videoBanner} 
            loop={true}
          />
        </div>

        <div className="section-2">
          <div className="container">
            <ScrollAnimation
              offset={300}
              animateIn='slideInUp'
              duration={0.5}
              delay={100}
              animateOut='slideInUp'
              animateOnce={true}
            >
              <div className="top-parts">
                {listData && listData.map((item, index) => (
                  index < 2 && (
                    <div className="item-part">
                      <div className="item-img">
                        <img src={item.image} />
                      </div>
                      <h4 className="text-white">{item.title}</h4>
                      <p className="text-gray">{ReactHtmlParser(item.description)}</p>
                      <Link className="text-decoration-none" to={'#'}>Mở khóa công nghệ mới <img src={IconDown} className="ml-10" width={20} /> </Link>
                    </div>
                  )
                ))}
              </div>
              <div className="bottom-parts">
                {listData && listData.map((item, index) => (
                  index >= 2 && (
                    <div className="item-part">
                      <div className="item-img">
                        <img src={item.image} />
                      </div>
                      <h4 className="text-white">{item.title}</h4>
                      <p className="text-gray">{item.description}</p>
                      <Link className="text-decoration-none" to={'#'}>Mở khóa công nghệ mới <img src={IconDown} className="ml-10" width={20} /> </Link>
                    </div>
                  )
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="section-3">
          <div className="container">
            <div className="showUp">
              <ScrollAnimation
                offset={1200}
                animateIn='slideInUp'
                duration={0.8}
                delay={600}
                animateOut='slideInUp'
                animateOnce={true}
              >
                <div className="video-container">
                  <img src={ImageContent} className="w-100" />
                </div>
              </ScrollAnimation>
            </div>


          </div>
        </div>

        <div className="section-4">
          <div className="animate-box">
            <div className="box-container">
            <h4 className="mt-4">Không còn nỗi lo bụi mịn vô hình.</h4>
            <Swiper
            ref={mapSwiperRef}
              direction={'vertical'}
              slidesPerView={1}
              spaceBetween={30}
              mousewheel={true}
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
              }
              }}
              modules={[Mousewheel, Pagination]}
              className="mySwiper"
              onSlideChange={handleMapSwiperChange}
            >
              {
                listVideo1.map((item) => (
                  <SwiperSlide>
                    <div className="top-item d-contents">
                      {ReactHtmlParser(item.title)}
                    </div>
                    <div>
                      <ReactPlayer 
                        className="active-video w-100 h-100" 
                        muted={true} 
                        playing={true} 
                        loop={true}
                        url={item.videoId} />
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
            </div>
          </div>
        </div>

        <div className="section-5">
          <div className="animate-box" style={{ overflow: 'initial' }}>
            <h2>Trạm sạc đa năng All-in-one, đem tới trải nghiệm rảnh tay mỗi khi sử dụng</h2>
            <div className="img-pro position-relative">
              <img src={ImageEcovacsX2} className='w-100' />
              <img src={ImageThongSo} className="position-absolute" width={500} />
            </div>
          </div>
        </div>
        <div className="section-6">
          <ScrollAnimation
            offset={1200}
            animateIn='slideInUp'
            duration={0.8}
            delay={600}
            animateOut='slideInUp'
            animateOnce={true}
          >
            <div className="container">
              <ReactPlayer className="data-video-small w-100 h-100" muted={true} playing={true} url={videoBanner} />
            </div>
            <ReactPlayer className="data-video w-100" height={1000} muted={true} playing={true} url={videoBanner} />
          </ScrollAnimation>
        </div>
        <div className="section-7">

        </div>

        <div className="section-8">
          <ScrollAnimation
            offset={1200}
            animateIn='slideInUp'
            duration={0.8}
            delay={600}
            animateOut='slideInUp'
            animateOnce={true}
          >
            <h2>Trợ lí giọng nói YIKO 2.0 có thể làm được nhiều hơn cho bạn</h2>
            <Slider
              {...settingSlider}
            >
              {listSlider.map((item, index) => (
                <div key={index} className="grid-item  float-left mb-5">
                  <img src={item.image} alt={`Image ${index}`} className="img-fluid" />

                  <h5 className="mt-3">{item.title}</h5>
                </div>
              ))}
            </Slider>
          </ScrollAnimation>

        </div>
        <div className="section-9">
          <div className="container">
            <h2>Trải nghiệm dọn dẹp - tương tác chân thực thời đại mới</h2>
            <p>
              3D Mapping 2.0 <br />
              Với bản đồ 3D mới được nâng cấp, Deebot X2 Omni sẽ tiến hành dọn dẹp khi bạn chạm vuốt ngón tay tới vị trí cần làm sạch trên ứng dụng Ecovacs Home.
            </p>
            <ReactPlayer className="data-video w-100 h-100" muted={true} playing={true} loop={true} url={Video10} />
          </div>
        </div>

        <div className="section-10">
          <div className="container">
            <div className="x2-omni">
              <h2>X2 Omni</h2>

              <div className="deebot-image">
                <img src={ImageEcovacX2Black} className='d-block' />
                <Link to={'#'} className='btn buy mt-4'>
                  <span>Đặt bây giờ</span>
                </Link>
              </div>
            </div>

            <div className="list-contact mt-4">
              <ul className="list-unstyled d-flex align-items-center justify-content-around">
                <li>
                <a href="https://gigadigital.vn/robot-hut-bui/robot-hut-bui-lau-nha-ecovacs-deebot-x2-omni" target={"_blank"}>
                    <img src={ImageLogoGiga} className="img-fluid" width={200} />
                  </a>
                </li>
                <li>
                  <a href="https://shop.tiktok.com/view/product/1729686821185948273?region=VN&locale=vi-VN" target={"_blank"}>
                    <img src={ImageLogo2} className="img-fluid " width={200} />
                  </a>
                </li>
                <li>
                  <a href="https://www.lazada.vn/products/robot-hut-bui-lau-nha-thong-minh-ecovacs-x2-omni-tu-dong-giat-say-kho-gie-tro-ly-giong-noi-yiko-bao-hanh-chinh-hang-24-thang-i2399502761-s11708290922.html?" target={"_blank"}>
                    <img src={ImageLogo3} className="img-fluid" width={200} />
                  </a>
                </li>
                <li>
                  <a href="https://shopee.vn/product/752342657/22077063358" target={"_blank"}>
                    <img src={ImageLogo4} className="img-fluid" width={200} />
                   
                  </a>
                </li>
              </ul>
            </div>
            <div className="list-qrcode mt-4">
              <ul className="list-unstyled d-flex align-items-center justify-content-around">
                <li>
                <a href="https://gigadigital.vn/robot-hut-bui/robot-hut-bui-lau-nha-ecovacs-deebot-x2-omni" target={"_blank"}>
                    <img src={ImageQRCodeGiga} className="img-fluid" width={150} />
                  </a>
                </li>
                <li>
                  <a href="https://shop.tiktok.com/view/product/1729686821185948273?region=VN&locale=vi-VN" target={"_blank"}>
                    <img src={ImageQRCode2} className="img-fluid" width={150} />
                  </a>
                </li>
                <li>
                  <a href="https://www.lazada.vn/products/robot-hut-bui-lau-nha-thong-minh-ecovacs-x2-omni-tu-dong-giat-say-kho-gie-tro-ly-giong-noi-yiko-bao-hanh-chinh-hang-24-thang-i2399502761-s11708290922.html" target={"_blank"}>
                    <img src={ImageQRCode3} className="img-fluid" width={150} />
                  </a>
                </li>
                <li>
                  <a href="https://shopee.vn/product/752342657/22077063358" target={"_blank"}>
                    <img src={ImageQRCode4} className="img-fluid" width={150} />
                   
                  </a>
                </li>
              </ul>
            </div>
            <div className="line-middle"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home

