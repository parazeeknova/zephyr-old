import { useState, useEffect } from 'react';
import { Header } from './components/Widgets/MainHeader';
import { Sidebar } from './components/Widgets/MainSidebar';
import { MainContent } from './components/Widgets/MainContent';
import { RightSidebar } from './components/Widgets/RightSidebar';
import { BottomNavbar } from './components/Widgets/BottomNavbar';
import { FloatingChat } from './components/Widgets/FloatingChat';
import { Footer } from './components/Widgets/MainFooter';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar isDarkMode={isDarkMode} />
        <MainContent isDarkMode={isDarkMode} />
        <RightSidebar isDarkMode={isDarkMode} />
      </div>

      <BottomNavbar
        isDarkMode={isDarkMode}
        isScrolled={isScrolled}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        setIsChatOpen={setIsChatOpen}
      />

      {isChatOpen && (
        <FloatingChat isDarkMode={isDarkMode} setIsChatOpen={setIsChatOpen} />
      )}

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
