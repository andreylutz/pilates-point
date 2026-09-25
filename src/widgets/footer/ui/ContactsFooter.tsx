export default function ContactsFooter() {
  return (
    <footer id="contacts" className="site-footer">
      <div className="container footer-top" data-reveal>
        <div>
          <span className="eyebrow">Контакты</span>
          <h2>
            Будем рады
            <br />
            <em>встрече.</em>
          </h2>
        </div>
        <a className="footer-phone" href="tel:+79194430023">
          +7 (919) 443-00-23 <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="container footer-bottom">
        <span>PILATES POINT © {new Date().getFullYear()}</span>
        <span>Пермь, ул. Докучаева, 23</span>
        <span>Ежедневно, 07:00–22:00</span>
        <a href="#top">Наверх ↑</a>
      </div>
    </footer>
  );
}
