import { LordIcon } from "../lord-icon";
import "./styles.css";

function Header() {
  return (
    <header>
      <div className="container">
        {/* <!-- Cụm phần thứ 1: Logo - Search --> */}
        <div className="g_left">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unicourse-f4020.appspot.com/o/Logo%2Flogo%20hi%CC%80nh.png?alt=media&token=b21fff42-3fb8-4d66-9a28-69c7ad4adaeb"
            alt="Unicourse logo"
            style={{ width: "3rem", cursor: "pointer" }}
          />

          <div className="searchBar">
            <span className="g_left_icon">
              <LordIcon
                src="https://cdn.lordicon.com/jtkfemwz.json"
                trigger="loop"
                size={24}
              />
            </span>

            <input
              className="g_left_input"
              type="text"
              placeholder="Tìm kiếm khóa học..."
              style={{ borderRadius: 5 }}
            />
          </div>
        </div>

        {/* <!-- Cụm phần thứ 2: Navigator --> */}
        <div className="g_selection">
          <nav className="g_selection_navigation">
            <p className="header__navigate-item">Trang chủ</p>
            <p className="header__navigate-item">Về Unicourse</p>
            <p className="header__navigate-item">Liên hệ</p>
            <p className="header__navigate-item">Chính sách</p>
          </nav>
        </div>

        {/* <!-- Cụm phần thứ 3: Options - Login button --> */}
        <div className="g_right">
          {/* <!-- More Options --> */}
          <LordIcon
            src="https://cdn.lordicon.com/rcgrnzji.json"
            trigger="loop"
            size={32}
          />
          {/* <!-- Login button --> */}
          <button className="g_right_loginButton">Đăng nhập</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
