export default function Frame() {
  return (
    <div className="mil-frame">
      <div className="mil-frame-top">
        <a href="/" className="mil-logo">A.</a>
        <div className="mil-menu-btn">
          <span></span>
        </div>
      </div>
      <div className="mil-frame-bottom">
        <div className="mil-current-page"></div>
        <div className="mil-back-to-top">
          <a href="#top" className="mil-link mil-dark mil-arrow-place">
            <span>Back to top</span>
          </a>
        </div>
      </div>
    </div>
  );
}