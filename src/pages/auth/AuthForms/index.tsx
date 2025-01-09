import LoginModal from '@/features/LoginModal';
import RegisterModal from '@/features/RegisterModal';
import React from 'react';
import { useModal } from './store';

export const AuthForms: React.FC = () => {
  // const [{ activeModal }, { showLogin, showRegister, closeModals }] =
  //   useAuthFormsStore();
  const { activeModal, showRegister, showLogin, closeModals } = useModal();

  // Prevent scroll when modal is open
  React.useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  return (
    <>
      {/* Login Modal */}
      <LoginModal
        isOpen={activeModal === 'login'}
        onSwitchToRegister={showRegister}
        onClose={closeModals}
      />

      {/* Register Modal */}
      <RegisterModal
        isOpen={activeModal === 'register'}
        onSwitchToLogin={showLogin}
        onClose={closeModals}
      />
    </>
  );
};

export default AuthForms;
