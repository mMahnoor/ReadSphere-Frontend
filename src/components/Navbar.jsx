import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@material-tailwind/react";
import { BookOpen, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isLoggedIn] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="mx-3 md:mx-6 p-2">
        <div className="flex items-center justify-between h-16">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            <BookOpen className="h-6 w-6" />
            <span>ReadSphere</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {isLoggedIn ? (
              <>
                <NavLink
                  to="/books"
                  className="font-bold text-foreground hover:text-primary transition-colors"
                  activeClassName="text-primary font-semibold"
                >
                  Books
                </NavLink>
                <NavLink
                  to="/borrow-records"
                  className="font-bold text-foreground hover:text-primary transition-colors"
                  activeClassName="text-primary font-semibold"
                >
                  Borrow Records
                </NavLink>
                <NavLink
                  to="/reservations"
                  className="font-bold text-foreground hover:text-primary transition-colors"
                  activeClassName="text-primary font-semibold"
                >
                  Reservations
                </NavLink>
                <NavLink
                  to="/profile"
                  className="font-bold text-foreground hover:text-primary transition-colors"
                  activeClassName="text-primary font-semibold"
                >
                  Profile
                </NavLink>
                <Button variant="outline" size="sm">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm">
                  Login
                </Button>
                <Button size="sm">Sign Up</Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-5">
            <div className="flex flex-col gap-4">
              {isLoggedIn ? (
                <>
                  <NavLink
                    to="/books"
                    className="text-foreground hover:text-primary transition-colors py-2"
                    activeClassName="text-primary font-semibold"
                    onClick={toggleMobileMenu}
                  >
                    Books
                  </NavLink>
                  <NavLink
                    to="/borrow-records"
                    className="text-foreground hover:text-primary transition-colors py-2"
                    activeClassName="text-primary font-semibold"
                    onClick={toggleMobileMenu}
                  >
                    Borrow Records
                  </NavLink>
                  <NavLink
                    to="/reservations"
                    className="text-foreground hover:text-primary transition-colors py-2"
                    activeClassName="text-primary font-semibold"
                    onClick={toggleMobileMenu}
                  >
                    Reservations
                  </NavLink>
                  <NavLink
                    to="/profile"
                    className="text-foreground hover:text-primary transition-colors py-2"
                    activeClassName="text-primary font-semibold"
                    onClick={toggleMobileMenu}
                  >
                    Profile
                  </NavLink>
                  <Button variant="outline" className="w-full">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                  <Button className="w-full">Sign Up</Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
