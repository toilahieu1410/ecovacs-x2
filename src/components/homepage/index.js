import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ReactPlayer from "react-player"
import Header from "../../components/header/index"

import Image1 from '../../assets/images/image-1.webp'
import Image2 from '../../assets/images/image-2.webp'
import Image3 from '../../assets/images/image-3.webp'
import Image4 from '../../assets/images/image-4.webp'
import Image5 from '../../assets/images/image-5.webp'
import ImageContent from '../../assets/images/image-content.webp'

import IconDown from '../../assets/images/icon-down.png'

const videoBanner = 'https://static.ecovacs.cn/a/2023/x2/assets/kv-8cf77359.mp4'

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
const Home = (props) => {

const topItems = document.querySelectorAll('.top-item');
  function setActiveItem() {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    
    topItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const itemTop = rect.top + scrollPosition;
      const translateY = ((itemTop / windowHeight) * 100).toFixed(2);
      
      if (itemTop >= 0 && itemTop <= windowHeight) {
        item.style.transform = `translateY(-${translateY}%)`;
        item.classList.add('active');
      } else {
        item.style.transform = 'translateY(-100%)';
        item.classList.remove('active');
      }
    });
  }
  
  window.addEventListener('scroll', setActiveItem);
  window.addEventListener('resize', setActiveItem);
  
  // Gọi hàm một lần khi trang tải lên để xác định các phần tử active ban đầu
  setActiveItem();

  return (
    <div className="homepage">
      <Header />
      <div className="list-banner">
        <div className="section-1">
          <ReactPlayer className="data-video w-100 h-100 " muted={true} playing={true} url={videoBanner} />
        </div>
        <div className="section-2">
          <div className="container">
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
          </div>
        </div>
        <div className="section-3">
          <div className="container">
            <div className="video-container">
              <img src={ImageContent} className="w-100" />
            </div>
            <div className="content-image">
              <h2 className="info-title">Hơn cả đổi mới, hơn cả đột phá   </h2>
              <p>Vào tháng 9 năm 2021, Ecovacs đã phát hành dòng DEEBOT X1 với trạm sạc đa năng toàn diện đầu tiên, đem lại trải nghiệm hoàn toàn rảnh tay cho người dùng. Năm nay, thiết kế thân vuông mới, đột phá của Ecovacs đã được ra mắt với chức năng làm sạch góc cạnh, mang đến cho người dùng trải nghiệm làm sạch mạnh mẽ hơn.                </p>
            </div>
          </div>
        </div>
        <div className="section-4">
        <div className="box-items">
    <div className="top-item">更薄：全新方形 <span>
      <span id="pccounter1">95</span>
      <i>mm</i>
    </span>超薄机身 </div>
    <div className="top-item">更窄： <span>
      <span id="pccounter2">320</span>
      <i>mm</i>
    </span>超窄机身 </div>
    <div className="top-item">更长： <span>
      <span id="pccounter3">200</span>
      <i>mm</i>
    </span>超长滚刷 </div>
    <div className="top-item">更贴： <span>
      <span id="pccounter4">99.77</span>
      <i>%</i>
    </span>单位面积清洁覆盖 </div>
    <div className="top-item">更高： <span>
      <span id="pccounter5">15</span>
      <i>mm</i>
    </span>拖布抬升 <sup>9</sup>
    </div>
    <div className="top-item">更强： <span>
      <span id="pccounter6">8,000</span>
      <i>Pa</i>
    </span>飓风吸力 <sup>19</sup>
    </div>
  </div>
        </div>
      </div>
    </div>
  )
}

export default Home