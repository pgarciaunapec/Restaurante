import React, { useReducer, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Events from './pages/Events';
import Services from './pages/Services';
import './App.css';

type PopupInfo = { displayFlag: boolean; titleContent: string; bodyContent: string };
type PopupAction = 
  | { kind: 'LAUNCH_POPUP'; payload: { titleContent: string; bodyContent: string } }
  | { kind: 'TERMINATE_POPUP' };

const popupReducerFunction = (currentState: PopupInfo, incomingAction: PopupAction): PopupInfo => {
  switch (incomingAction.kind) {
    case 'LAUNCH_POPUP':
      return { displayFlag: true, ...incomingAction.payload };
    case 'TERMINATE_POPUP':
      return { ...currentState, displayFlag: false };
    default:
      return currentState;
  }
};

const initialPopupState: PopupInfo = { displayFlag: false, titleContent: '', bodyContent: '' };

const RestaurantApp: React.FC = () => {
  const [popupInfo, dispatchPopupAction] = useReducer(popupReducerFunction, initialPopupState);

  const launchPopupWindow = useCallback((titleContent: string, bodyContent: string) => {
    dispatchPopupAction({ kind: 'LAUNCH_POPUP', payload: { titleContent, bodyContent } });
  }, []);

  const terminatePopupWindow = useCallback(() => {
    dispatchPopupAction({ kind: 'TERMINATE_POPUP' });
  }, []);

  const bookingRequestAction = useCallback(() => {
    launchPopupWindow('Próximamente', 'Esta funcionalidad estará próximamente disponible.');
  }, [launchPopupWindow]);

  return (
    <BrowserRouter>
      <div className="application-root">
        <Header onShowModal={bookingRequestAction} />
        
        <main className="primary-content">
          <Routes>
            <Route path="/" element={<Home onShowModal={bookingRequestAction} />} />
            <Route path="/menu" element={<Menu onShowModal={launchPopupWindow} />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events onShowModal={bookingRequestAction} />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>

        <Footer />
        
        <Modal
          isVisible={popupInfo.displayFlag}
          heading={popupInfo.titleContent}
          content={popupInfo.bodyContent}
          handleDismiss={terminatePopupWindow}
        />
      </div>
    </BrowserRouter>
  );
};

export default RestaurantApp;
