import Button from "./common/Button";
import useWindow from "../hooks/useWindow";
const Footer = () => {
    const isMobile = useWindow();
  if (isMobile) {
    return (
      <footer className="w-full bg-secondary text-primary py-8">
        <div className="container mx-auto px-4 space-y-8">
          {/* Company Info */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-primary font-medium text-primary">Store Name</h3>
            <p className="text-sm font-secondary">
              Your premier destination for quality products and exceptional shopping experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center space-y-4">
            <h4 className="text-2xl font-primary font-medium text-primary">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/shop" className="hover:text-textSecondary transition-colors">Shop</a></li>
              <li><a href="/about" className="hover:text-textSecondary transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-textSecondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-4">
            <h4 className="text-2xl font-primary font-medium text-primary">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center gap-2">
                <span>📍</span>
                <span>123 Store Street, City</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span>📧</span>
                <span>contact@store.com</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span>📱</span>
                <span>+1 234 567 890</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center space-y-4">
            <h4 className="text-2xl font-primary font-medium text-primary">Newsletter</h4>
            <p className="text-sm">Stay updated with our latest offers</p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 rounded-sm bg-primary text-secondary focus:outline-none"
              />
              <Button className="w-full px-4 py-2">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 py-4 border-t border-primary/20 text-center">
          <p className="text-sm">© 2024 Store Name. All rights reserved.</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full bg-secondary text-primary py-16 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-primary font-medium text-primary">Store Name</h3>
            <p className="text-sm font-secondary">
              Your premier destination for quality products and exceptional shopping experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-2xl font-primary font-medium text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/shop" className="hover:text-textSecondary transition-colors">Shop</a></li>
              <li><a href="/about" className="hover:text-textSecondary transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-textSecondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-2xl font-primary font-medium text-primary">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>123 Store Street, City</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span>contact@store.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <span>+1 234 567 890</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-2xl font-primary font-medium text-primary">Newsletter</h4>
            <p className="text-sm">Stay updated with our latest offers</p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 rounded-sm bg-primary text-secondary focus:outline-none"
              />
              <Button className="w-full px-4 py-2 ">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 py-4 border-t border-primary/20 text-center">
          <p className="text-sm">© 2024 Store Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;