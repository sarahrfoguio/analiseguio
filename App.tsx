
import React, { useState } from 'react';
import { SectionId } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Methodology from './components/Methodology';
import Product from './components/Product';
import WarRoom from './components/WarRoom';
import Plans from './components/Plans';
import Roadmap from './components/Roadmap';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard': return <Dashboard />;
      case 'methodology': return <Methodology />;
      case 'product': return <Product />;
      case 'warroom': return <WarRoom />;
      case 'plans': return <Plans />;
      case 'convergencia': return <Roadmap />; // Mapeado para o componente que contém a Convergência
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-[#F9F7F2] text-slate-700 font-sans">
      <Sidebar 
        activeSection={activeSection} 
        onNavigate={setActiveSection} 
      />
      <main className="flex-1 overflow-y-auto p-6 md:p-10 relative">
        <div className="max-w-6xl mx-auto animate-in fade-in duration-700">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
