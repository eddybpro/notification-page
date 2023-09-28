import "./Header.css";

function Header() {
  return (
    <header>
      <div className="NotifBox">
        <h1 className="NotifBox-Title">notifications</h1>
        <div className="NotifBox-Container">
          <p className="NotifBox-Container-Num">3</p>
        </div>
      </div>
      <a className="MarkAsReadLink" href="#">
        Mark all as read
      </a>
    </header>
  );
}
export default Header;
