import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer_box">
      <footer>
        <div className="media">
          <a href="https://www.facebook.com/">
            <i>
              <FacebookIcon sx={{ fontSize: "30px" }} />
            </i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="">
              <InstagramIcon sx={{ fontSize: "30px" }} />
            </i>
          </a>
          <a href="https://www.linkedin.com/home">
            <i className="">
              <LinkedInIcon sx={{ fontSize: "30px" }} />
            </i>
          </a>
          <a href="https://twitter.com/">
            <i className="">
              <TwitterIcon sx={{ fontSize: "30px" }} />
            </i>
          </a>
        </div>
        <p>
          &copy; All rights reserved <span className="date"></span>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
