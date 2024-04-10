

const Footer = () => {
    return (
      <footer className=" p-10 mt-10 bg-gray-800 text-white">
        <div className="footer max-w-[1170px] mx-auto md:p-5">
          <aside>
            <h3 className="text-3xl font-bold">Dream Estate</h3>
            <p>
              Dream Estate Industries Ltd.
              <br />
              Providing reliable service since 2000
            </p>
          </aside>
          <nav className="text-center">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Rent</a>
            <a className="link link-hover">Sale</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
    );
};

export default Footer;