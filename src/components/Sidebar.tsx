interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About us', href: '#about' },
    { label: 'Collection', href: '#collection' },
    { label: 'Fabric Artistry', href: '#fabric' },
    { label: 'Journey', href: '#journey' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Watch Finest', href: '#finest-film' },
    { label: 'Artisanal Excellence', href: '#artisanal-excellence' },
    { label: 'Faces Of Kosha', href: '#faces-of-kosha' },
    { label: 'Contact', href: '#footer' },
  ];

  const handleNavClick = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onClose();
  };

  return (
    <>
      <div
        className={`overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />
      <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <nav className="nav-links mt-5 text-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
