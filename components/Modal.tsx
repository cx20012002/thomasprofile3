"use client";
import React, { useRef } from "react";
import { Transition } from "react-transition-group";

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  duration?: number;
  onLeaveClose?: boolean;
  className?: string;
  children: React.ReactNode;
}

const PopupModal: React.FC<PopupModalProps> = ({
  isOpen,
  onClose,
  onOpen,
  duration = 300,
  onLeaveClose = true,
  className,
  children,
}) => {
  const nodeRef = useRef(null);

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
  };

  // Close modal when clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    if (nodeRef.current && !nodeRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  return (
    <Transition
      in={isOpen}
      timeout={duration}
      unmountOnExit
      nodeRef={nodeRef}
      onEnter={() => {
        document.addEventListener("mousedown", handleClickOutside);
      }}
      onExit={() => {
        document.removeEventListener("mousedown", handleClickOutside);
      }}
    >
      {(state) => (
        <div
          ref={nodeRef}
          className={className}
          style={{ ...transitionStyles[state], ...defaultStyle }}
          onMouseEnter={onOpen}
          onMouseLeave={() => onLeaveClose && onClose()}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default PopupModal;
