import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ReactPlayer from "react-player"
import Header from "../../components/header/index"

import Slider from "react-slick";
import Image1 from '../../assets/images/image-1.webp'
import Image2 from '../../assets/images/image-2.webp'
import Image3 from '../../assets/images/image-3.webp'
import Image4 from '../../assets/images/image-4.webp'
import Image5 from '../../assets/images/image-5.webp'

import ImageSlider1 from '../../assets/images/slider-1.webp'
import ImageSlider2 from '../../assets/images/slider-2.webp'
import ImageSlider3 from '../../assets/images/slider-3.webp'
import ImageSlider4 from '../../assets/images/slider-4.webp'
import ImageSlider5 from '../../assets/images/slider-5.webp'
import ImageSlider6 from '../../assets/images/slider-6.webp'
import ImageSlider7 from '../../assets/images/slider-7.webp'
import ImageSlider8 from '../../assets/images/slider-8.webp'

import ImageContent from '../../assets/images/image-content.webp'
import ImageEcovacsX2 from '../../assets/images/image-ecovacsX2.webp'
import ImageEcovacX2Black from '../../assets/images/ecovacsX2-black.webp'
import IconDown from '../../assets/images/icon-down.png'
import Footer from "../footer"
import { settingSlider } from "../../utilities/settingSlider"
import ScrollAnimation from "react-animate-on-scroll"

const videoBanner = 'https://static.ecovacs.cn/a/2023/x2/assets/kv-8cf77359.mp4'
const videoEnd = 'https://static.ecovacs.cn/a/2023/x2/assets/9-bd6166d5.mp4'


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
const listVideoContents = [
  {
    id: 1,
    url: 'https://static.ecovacs.cn/a/2023/x2/assets/1-392538a6.mp4'
  },
  {
    id: 2,
    url: 'https://static.ecovacs.cn/a/2023/x2/assets/6-266e754f.mp4'
  },
  {
    id: 3,
    url: 'https://static.ecovacs.cn/a/2023/x2/assets/5-69c29c22.mp4'
  },
  {
    id: 4,
    url: 'https://static.ecovacs.cn/a/2023/x2/assets/4-5f270793.mp4'
  },
  {
    id: 5,
    url: 'https://static.ecovacs.cn/a/2023/x2/assets/3-31197729.mp4'
  },
  {
    id: 6,
    url: 'https://static.ecovacs.cn/a/2023/x2/assets/2-49f7eb78.mp4'
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
    title: 'Bình tĩnh, giải phóng đôi tay của bạn',
    description: 'Trạm cơ sở mười môn phối hợp thực sự giải phóng đôi tay1 và tính năng nhận dạng nước thải thông minh mới được bổ sung sẽ kéo nó cho đến khi sạch2'
  },
  {
    id: 3,
    image: Image3,
    title: 'Thông minh, hơn một bên',
    description: 'Được trang bị các mẫu Gemini và Ecovacs AINA, nó có thể phản ứng linh hoạt với những thay đổi môi trường năng động'
  },
  {
    id: 4,
    image: Image4,
    title: 'nâng cấp, đứng một mình',
    description: 'Bảy nâng cấp chính của YIKO 2.0, 3D Mapping 2.0 mang lại trải nghiệm tương tác chân thực.'
  },
  {
    id: 5,
    image: Image5,
    title: 'Thanh lịch, từ trong ra ngoài',
    description: 'Sự kết hợp hoàn hảo giữa thẩm mỹ phương Đông và công nghệ hiện đại, được tùy chỉnh cho ngôi nhà cao cấp tối giản.'

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
    title: 'trình quản lý video',
    description: 'Camera Starlight 960P RGB hỗ trợ video thời gian thực và giọng nói hai chiều.'
  }
]
const Home = (props) => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);


  const topItems = [
    {
      title: "更薄",
      videoId: 1,
    },
    {
      title: "更窄：",
      videoId: 2,
    },
    {
      title: "更窄：",
      videoId: 3,
    },
    {
      title: "更窄：",
      videoId: 4,
    },
    {
      title: "更窄：",
      videoId: 5,
    },
    {
      title: "更窄：",
      videoId: 6,
    },
    // ...
  ];



  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const newPosition = window.scrollY;
    const newIndex = Math.min(
      Math.floor(newPosition / windowHeight),
      topItems.length - 1
    ); // Ensure newIndex doesn't exceed topItems length

    setScrollPosition(newPosition);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


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
                      <p className="text-gray">{item.description}</p>
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
                <div className="content-image">
                  <h2 className="info-title"> Hơn cả đổi mới, hơn cả đột phá </h2>
                  <p>Vào tháng 9 năm 2021, Ecovacs đã phát hành dòng DEEBOT X1 với trạm sạc đa năng toàn diện đầu tiên, đem lại trải nghiệm hoàn toàn rảnh tay cho người dùng. Năm nay, thiết kế thân vuông mới, đột phá của Ecovacs đã được ra mắt với chức năng làm sạch góc cạnh, mang đến cho người dùng trải nghiệm làm sạch mạnh mẽ hơn.                </p>
                </div>
              </ScrollAnimation>
            </div>


          </div>
        </div>

        <div className="section-4">
          <div className="animate-box">
            <div className="box-container showUp">
              <div className="section-top">
                <div className="out-box">
                  <div className="box-items" style={{ transform: `translateY(-${activeIndex * 100}%)` }}>
                    {topItems.map((item, index) => (

                      <div
                        key={index}
                        className={`top-item ${index === activeIndex ? 'active' : ''}`}
                      >

                        {item.title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="section-bottom">
                <div className="box-items" style={{ transform: `translateY(-${activeIndex * 100}%)` }}>
                  {topItems.map((item, index) => (
                    <div key={index} className={`top-item ${index === activeIndex ? 'active' : ''}`}>
                      {index === activeIndex && (
                        <ReactPlayer className="active" muted={true} playing={true} url={listVideoContents[item.videoId - 1].url} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-5">
          <div className="animate-box">
            <h2>Trạm sạc đa năng All-in-one, đem tới trải nghiệm rảnh tay mỗi khi sử dụng</h2>
            <div className="img-pro">
              <img src={ImageEcovacsX2} className='w-100' />
            </div>
          </div>
        </div>
        <div className="section-6">
          <ReactPlayer className="data-video w-100 h-100" muted={true} playing={true} url={videoBanner} />
        </div>
        <div className="section-7">
          <div className="animate-box">
            <ReactPlayer className="data-video w-100 h-100" muted={true} playing={true} url={videoBanner} />
            <div className="video-text">
            </div>
          </div>
          <ReactPlayer className="data-video w-100 h-100" muted={true} playing={true} url={videoBanner} />
        </div>
        <div className="section-8">

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

        </div>
        <div className="section-9">
          <div className="container">
            <h2>Trải nghiệm chân thực, tương tác dọn dẹp mới</h2>
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