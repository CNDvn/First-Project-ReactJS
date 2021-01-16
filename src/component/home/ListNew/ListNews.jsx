import React from 'react'
import './ListNews.css'
import PropTypes from 'prop-types'

function ListNew(props) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 news-top">
            <div className="news-top-info">
              <a href="#">
                <img src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056938333773.jpg" alt=""/>
              </a>
              <a href="#">
                <h5 className="title">“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</h5>
              </a>
              <p className="content">Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360 Giải Phóng!</p>
            </div>
            <div className="interactive">

            </div>
          </div>
          <div className="col-6 news-top">
            <div className="news-top-info">
              <a href="#"><img src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png" alt=""/></a>
              <a href="#"><h5 className="title">Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu</h5></a>
              <p className="content">Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng </p>
            </div>
            <div className="interactive">

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4 news-bottom">
            <div className="news-bottom-info">
              <a href="#"><img src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg" alt=""/></a>
              <a href="#"><h6 className="title">NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN</h6></a>
              <p className="content">Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng </p>
            </div>
            <div className="interactive">

            </div>
          </div>
          <div className="col-4 news-bottom">
            <div className="news-bottom-info">
              <a href="#"><img src="https://s3img.vcdn.vn/123phim/2020/11/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png" alt=""/></a>
              <a href="#"><h6 className="title">[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng</h6></a>
              <p className="content">Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ Ante</p>
            </div>
            <div className="interactive">

            </div>
          </div>
          <div className="col-4 news-bottom news-bottom-list">
            <div className="news-bottom-a-list">
              <div className="news-bottom-a-list-img">
                <a href="#"><img src="https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png" alt=""/></a>
              </div>
              <a href="#"><p className="title">Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan</p></a>
            </div>
            <div className="news-bottom-a-list">
              <div className="news-bottom-a-list-img">
                <a href="#"><img src="https://s3img.vcdn.vn/123phim/2020/08/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png" alt=""/></a>
              </div>
              <a href="#"><p className="title">Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn</p></a>
            </div>
            <div className="news-bottom-a-list">
              <div className="news-bottom-a-list-img">
                <a href="#"><img src="https://s3img.vcdn.vn/123phim/2020/08/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png" alt=""/></a>
              </div>
              <a href="#"><p className="title">6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood</p></a>
            </div>
            <div className="news-bottom-a-list">
              <div className="news-bottom-a-list-img">
                <a href="#"><img src="https://s3img.vcdn.vn/123phim/2020/08/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png" alt=""/></a>
              </div>
              <a href="#"><p className="title">Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn</p></a>
            </div>
          </div>
        </div>
      </div>
    ); 
}

ListNew.propTypes = {

}

export default ListNew

