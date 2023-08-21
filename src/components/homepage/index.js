import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ReactPlayer from "react-player"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
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
import videoEnd from '../../assets/video/video-end.mp4'

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

const listInfo = [
  {
    id: 1,
    image: 'https://static.ecovacs.cn/a/2023/x2/assets/icon-7500-286d8d24.png?imageView2/0/format/webp',
    title: 'Lực hút lớn 7500Pa',
    description: 'Các hạt lớn với lực hút bão cũng không phải lo lắng'
  },
  {
    id: 2,
    image: 'https://static.ecovacs.cn/a/2023/x2/assets/icon-22-dbcc98e0.png?imageView2/0/format/webp',
    title: 'Lực lượng vượt chướng ngại vật 22mm',
    description: 'Việc sử dụng các bánh dẫn động mới được bổ sung lực truyền động mạnh mẽ cho phép lên xuống và xuống dưới'
  },
  {
    id: 3,
    image: 'https://static.ecovacs.cn/a/2023/x2/assets/icon-battery-6135b59a.png?imageView2/0/format/webp',
    title: 'Tuổi thọ pin mạnh mẽ 6400mAh',
    description: 'Lên đến 210 phút, có thể quét và lau sàn phẳng rộng 200 mét vuông cùng một lúc '
  },
  {
    id: 4,
    image: 'https://static.ecovacs.cn/a/2023/x2/assets/icon-video-4e2bf968.png?imageView2/0/format/webp',
    title: 'Trình quản lý video',
    description: 'Camera Starlight 960P RGB hỗ trợ video thời gian thực và giọng nói hai chiều.'
  }
]

  const listVideo1 = [
    {
      id: 1,
      title: `Mỏng hơn: thân máy siêu mỏng <span>95</span><i>mm</i>`,
      videoId: Video1,
    },
    {
      id: 2,
      title: `Hẹp hơn: thân máy siêu hẹp <span>320</span><i>mm</i>`,
      videoId: Video2,
    },
    {
      id: 3,
      title: "Dài hơn: Bàn chải con lăn dài thêm",
      videoId: Video3,
    },
    {
      id: 4,
      title: `Cao hơn<span>15</span><i>mm</i> nâng cây lau nhà`,
      videoId: Video4,
    },
    {
      id: 5,
      title: `Mạnh hơn:<span>8000</span> <i>Pa</i> lực hút`,
      videoId: Video5,
    },
    {
      id: 6,
      title: `Hẹp hơn: thân máy siêu hẹp <span>320</span><i>mm</i>`,
      videoId: Video6,
    },
  ]

const Home = () => {

  return (
    <div className="homepage">
      <Header />
      <div className="list-banner">
        <div className="section-1">
          <ReactPlayer className="data-video w-100 h-100 " muted={true} playing={true} url={videoBanner} />
        </div>

        <div className="section-2">
          <div className="container">
            <ScrollAnimation
              offset={1200}
              animateIn='slideInUp'
              duration={0.8}
              delay={600}
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
                {/* <div className="content-image">
                  <h2 className="info-title"> Hơn cả đổi mới, hơn cả đột phá </h2>
                  <p>Vào tháng 9 năm 2021, Ecovacs đã phát hành dòng DEEBOT X1 với trạm sạc đa năng toàn diện đầu tiên, đem lại trải nghiệm hoàn toàn rảnh tay cho người dùng. Năm nay, thiết kế thân vuông mới, đột phá của Ecovacs đã được ra mắt với chức năng làm sạch góc cạnh, mang đến cho người dùng trải nghiệm làm sạch mạnh mẽ hơn.                </p>
                </div> */}
              </ScrollAnimation>
            </div>


          </div>
        </div>

        <div className="section-4">
          <div className="animate-box">

            <Swiper
              direction={'vertical'}
              slidesPerView={1}
              spaceBetween={30}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              className="mySwiper"
            >
              {
                listVideo1.map((item) => (
                  <SwiperSlide>
                    <div><span>Không còn nỗi lo bụi mịn vô hình.</span></div>
                    <div>
                      {ReactHtmlParser(item.title)}
                    </div>
                    <div>
                      <ReactPlayer 
                        className="active-video" 
                        width={1200} 
                        height={700} 
                        muted={true} 
                        playing={true} 
                        url={item.videoId} />
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>

          </div>
        </div>

        <div className="section-5">
          <div className="animate-box" style={{overflow:'initial'}}>
            <h2>Trạm sạc đa năng All-in-one, đem tới trải nghiệm rảnh tay mỗi khi sử dụng</h2>
            <div className="img-pro">
              <img src={ImageEcovacsX2} className='w-100' />
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
            <ReactPlayer className="data-video w-100 h-100" muted={true} playing={true} loop={true} url={videoEnd} />
          </div>
        </div>

        <div className="section-10">
          <div className="container">
            <h2>DEEBOT X2</h2>
            <p className="text-gray">Thiết kế thân máy vuông thành thạo trong cách thiết kế cân đối thẩm mỹ, thân máy bo cong mượt mà, các chi tiết được trau chuốt tỉ mỉ.</p>
            <div className="deebot-image">
              <img src={ImageEcovacX2Black} className='' />
              <h5 className="mt-3">DEEBOT X2</h5>
              <p>Xám không gian</p>
              <Link to={'#'} className='btn buy'>
                <span>Đặt bây giờ</span>
              </Link>
            </div>
            <div className="list-info">
              {listInfo && listInfo.map((item) => (
                <div className="list-item mt-4">
                  <img src={item.image} className='' />
                  <h5 className="mt-3">{item.title}</h5>
                  <p className="text-gray">{item.description}</p>
                </div>
              ))}
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