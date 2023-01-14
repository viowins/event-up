import { useState } from "react";
import Logo from "./Logo";
import Input from "./UIComponents/Input";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const productNavItems = {
    conference: {
      name: "Conference",
      path: "/conference/",
    },
    pricing: {
      name: "Pricing",
      path: "/pricing/",
    },
    solution: {
      name: "Solution",
      path: "/solution/",
    },
  };

  const companyNavItems = {
    about: {
      name: "About",
      path: "/about/",
    },
    contact: {
      name: "Contact",
      path: "/contact/",
    },
    careers: {
      name: "Careers",
      path: "/careers/",
    },
    blog: {
      name: "Blog",
      path: "/path",
    },
  };

  const supportNavItem = {
    contactUs: {
      name: "Contact Us",
      path: "/contact-us/",
    },
    supportPolicy: {
      name: "Support Policy",
      path: "/support-policy/",
    },
    talkToSales: {
      name: "Talk to Sales",
      path: "/talk-to-sales/",
    },
  };

  const [email, setEmail] = useState("");

  const footerBottomNavItems = {
    privacyPolicy: {
      name: "Privacy Policy",
      path: "/privacy-policy/",
    },
    termsOfService: {
      name: "Terms of Service",
      path: "/terms-of-service/",
    },
    cookieSetings: {
      name: "Cookie Settings",
      path: "/cookie-settings/",
    },
  };

  return (
    <footer>
      <div className="container flex flex-col mx-auto py-14 md:pt-20 md:pb-10">
        <div className="flex flex-col md:flex-row items-start justify-between mb-10 gap-y-10">
          <div className="w-full md:w-2/12">
            <Logo.Black linked={true} />
            <p className="text-lg text-neutral-400 mt-4">
              Made around the world.
            </p>
          </div>
          <div className="w-auto bg-red-500 flex flex-row flex-wrap items-start md:justify-center gap-x-14 gap-y-6">
            <Footer.MenuItem
              menuItems={productNavItems}
              menuTitle={"Products"}
            />
            <Footer.MenuItem
              menuItems={companyNavItems}
              menuTitle={"Company"}
            />
            <Footer.MenuItem menuItems={supportNavItem} menuTitle={"Support"} />
          </div>
          <div className="w-full md:w-3/12">
            <h5 className="text-xl font-semibold text-neutral-800 mb-4">
              Subscribe to our newsletter.
            </h5>
            <p className="text-lg text-neutral-400 mb-6">
              Want to stay up to date with news and updates about our product?
              Subscribe.
            </p>
            <form>
              <Input.Email
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Enter your email adress."}
                buttonType={"Submit"}
              />
              {email}
            </form>
            <p className="text-sm text-neutral-200 mt-6">
              By subscribing to our newsletter you agree to our privacy policy
              and will get commercial communication.
              <br />
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between pt-10 border-t border-neutral-50 gap-y-6">
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-y-6 md:gap-x-20">
            <p className="text-lg text-neutral-500">© 2022 EventUp, Inc.</p>
            <nav className="flex flex-row flex-wrap items-center gap-y-2 gap-x-6">
              {Object.keys(footerBottomNavItems).map((key, index) => {
                return (
                  <a href={footerBottomNavItems[key]["path"]} key={index}>
                    {footerBottomNavItems[key]["name"]}
                  </a>
                );
              })}
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-full">
              <LanguageSwitcher />
            </div>
            <nav className="w-auto shrink-0 flex itesm-center gap-x-4">
              <a href="#">
                <img src="/ui/Twitter.svg" alt="Twitter" draggable="false" />
              </a>
              <a href="#">
                <img src="/ui/Facebook.svg" alt="Facebook" draggable="false" />
              </a>
              <a href="#">
                <img src="/ui/Linkedin.svg" alt="Linkedin" draggable="false" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.MenuItem = function ({ menuItems, menuTitle }) {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="text-xl font-semibold text-neutral-800">{menuTitle}</h5>
      <nav className="flex flex-col gap-2">
        {Object.keys(menuItems).map((key, index) => {
          return (
            <div key={index}>
              <a
                className="text-lg text-neutral-500"
                href={menuItems[key]["path"]}
              >
                {menuItems[key]["name"]}
              </a>
            </div>
          );
        })}
      </nav>
    </div>
  );
};
