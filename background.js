// Mảng dữ liệu chứa thông tin ảnh
const imageData = [
    {
      link: "https://i.pinimg.com/736x/eb/25/52/eb2552fdc5b60f9c8566365052a087f1.jpg",
      title: "❤️PEANUT❤️",
      description: "Bé đậu tập trung quá đi mất"
    },
    {
      link: "https://i.pinimg.com/736x/74/2f/18/742f18587c61d1c2ee0f313636782ca0.jpg",
      title: "❤️PEANUT❤️",
      description: "Thật sự không thể phong độ hơn"
    },
    {
      link: "https://i.pinimg.com/236x/c4/e0/5d/c4e05d59f5b7129eccc6d29647e10c4c.jpg",
      title: "Đôi mắt tinh anh",
      description: "Peanut ơi, đẹp trai quá, nhìn anh là tim em tan chảy luôn!"
    },
    {
      link: "https://i.pinimg.com/236x/f1/47/c5/f147c525eaf6d0b7c35b67f864684f6d.jpg",
      title: "Làm một quả đen trắng",
      description: "Dù là ảnh màu hay không màu, Đậu vẫn là siêu phẩm!"
    },
    {
      link: "https://i.pinimg.com/236x/6c/e8/43/6ce84302896185bbd95537498d750493.jpg",
      title: "Hờn",
      description: "Nhìn cái mặt hờn cưng không chịu nổi!"
    },
    {
      link: "https://i.pinimg.com/236x/45/37/c1/4537c1f9acc42b27e6c68eb4b0539ca8.jpg",
      title: "Vô tri",
      description: "Đó, một ảnh bình thường có vậy thôi đó **Rụng trứng**"
    },
    {
      link: "https://i.pinimg.com/236x/46/ab/4d/46ab4d9df080ed5e277b89638671555f.jpg",
      title: "Bịt mắt bắt dê",
      description: "Xin một slot làm dê!!!"
    },
    {
      link: "https://i.pinimg.com/474x/6e/04/a9/6e04a9e4f8ce3cef66a22da83785100e.jpg",
      title: "Đậu tỏa ra hào quang rực rỡ!",
      description: "Lóa mắt tôi luôn rồi!!!"
    },
    {
      link: "https://i.pinimg.com/236x/71/ab/f7/71abf7c3e7a459f532ee5ca70e240b9b.jpg",
      title: "Bước đi dứt khoát",
      description: "Phong độ là nhất thời , đẳng cấp là mãi mãi!!!"
    },
    {
      link: "https://i.pinimg.com/236x/97/ed/ca/97edca6a9c11526f3a8fe3d0b4bfb71a.jpg",
      title: "Phân thân chi thuật",
      description: "Ước gì ảnh phân thân ra cho mỗi fan một Đậu mang về nhà!!!"
    },
    {
      link: "https://i.pinimg.com/236x/e4/d0/6f/e4d06ff289e732d39920b03d0a24951a.jpg",
      title: "Lè lưỡi siêu Kiu!!!",
      description: "Chết mất, ha ha, cute hết sẩy con bà bảy!!!"
    },
    {
      link: "https://i.pinimg.com/474x/d9/f7/3b/d9f73bb5626ac89ed962c855b4aad704.jpg",
      title: "Đậu mặc 'Com lê'",
      description: "Đây liệu có phải tổng tài trong truyện bước ra không trời!!!"
    },
    {
      link: "https://i.pinimg.com/236x/24/08/a7/2408a7951bc89c4831dae291f552db7e.jpg",
      title: "Thủ lĩnh",
      description: "Ra dáng quá trời, Đậu đang trưởng thành từng ngày !!!"
    },
    {
      link: "https://i.pinimg.com/236x/65/68/29/6568290c4d324184e1b39cd44911148f.jpg",
      title: "Sẹc xy",
      description: "Má ơi!!! Con thích anh này!!!"
    },
    {
      link: "https://i.pinimg.com/236x/75/ac/a3/75aca36c66ad914cfedc289492f4fb10.jpg",
      title: "Trẩu",
      description: "Ha ha, trông ngây ngô quá!!!"
    },
    {
      link: "https://i.pinimg.com/474x/5b/be/61/5bbe619fd24a1c4582f3d026a80648e7.jpg",
      title: "Nâng cúp",
      description: "Cười rất là tươi luôn!!!"
    },
    {
      link: "https://i.pinimg.com/474x/41/ea/f9/41eaf95868fdf1a669bda4e9eaa17102.jpg",
      title: "Tóc ngắn",
      description: "Trời ơi, để kiểu tóc nào cũng làm tôi phọt máu mũi!!!"
    },
    {
      link: "https://i.pinimg.com/236x/d2/87/12/d287121a570641b64bab45b59b70ae8c.jpg",
      title: "Boy phố",
      description: "Boy phố cỡ này thì quần có rách cũng xin yêu luôn!"
    },
    {
      link: "https://i.pinimg.com/236x/1a/92/42/1a9242bd1127b2a75526552cf111ef04.jpg",
      title: "Trưởng thành",
      description: "Ảnh mà quảng cáo cho mặt hàng nào thì người mua không thèm xem mặt hàng lun, mẫu quá điển trai!"
    },
    {
      link: "https://i.pinimg.com/236x/d1/a7/9f/d1a79f40ecc4d28b434056d7768f4766.jpg",
      title: "Đậu và Hoa",
      description: "Ảnh làm đóa hoa kia lu mờ luôn cơ mà!"
    },
    {
      link: "https://i.pinimg.com/236x/6c/5a/10/6c5a1053cdeba1a9012ca4ed25284296.jpg",
      title: "Giản dị",
      description: "Đó đó, nhiêu đó thui cũng chớt tui rùi!"
    },
    {
      link: "https://i.pinimg.com/474x/9e/a8/e8/9ea8e816f85367b4bcab5bf43801b416.jpg",
      title: "Anime",
      description: "Phiên bản hoạt hình cũng vẫn hoàn hảo!"
    },
    {
      link: "https://i.pinimg.com/236x/09/25/65/0925657b5e987ee6838ee3f7e996f827.jpg",
      title: "Ngồi xổm",
      description: "Sẽ còn nhiều cup như vậy nữa!"
    },
    {
      link: "https://i.pinimg.com/474x/3b/0b/2c/3b0b2cdc5bf109ecf3268eef42940534.jpg",
      title: "Sâu lắng",
      description: "Mọi người có biết ảnh đang ở trong sự kiện nào khum?"
    },
  ];
  
// Lắng nghe tin nhắn từ content.js để gửi dữ liệu imageData
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getImageData") {
      sendResponse({ imageData: imageData });
    }
  });
