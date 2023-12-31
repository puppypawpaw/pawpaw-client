'use client';

/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';

interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  isClickableOverlay?: boolean;
}
function Overlay({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-70"
      onClick={onClose}
    >
      {children}
    </div>
  );
}
function ModalWrapper({ children }: { children: ReactNode }) {
  return <div onClick={(event) => event.stopPropagation()}>{children}</div>;
}
export default function Modal({
  children,
  open,
  onClose,
  isClickableOverlay = true,
}: ModalProps) {
  const [modalRoot, setModalRoot] = useState<Element | null>(null);

  useEffect(() => {
    setModalRoot(document.getElementById('modal-root'));
  }, []);

  const handleModalVisible = (event: KeyboardEvent) => {
    if (!open || event.key !== 'Escape') return;
    onClose();
  };
  useEffect(() => {
    if (!modalRoot?.hasChildNodes()) return;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleModalVisible);
    // eslint-disable-next-line consistent-return
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleModalVisible);
    };
  }, [open]);

  if (!modalRoot) {
    return null;
  }
  return createPortal(
    <>
      {open && (
        <Overlay onClose={isClickableOverlay ? onClose : () => {}}>
          <FocusLock>
            <ModalWrapper>{children}</ModalWrapper>
          </FocusLock>
        </Overlay>
      )}
    </>,
    modalRoot,
  );
}
