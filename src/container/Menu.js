import React from 'react';
import { bem } from 'firefly/component';
import { Logo } from './Logo';

export const Menu = ({ isOpen, onClose, children }) => (
  <div className={bem("b-menu", { open: isOpen })}>
    <div className={bem("b-menu__backdrop", { open: isOpen })} onClick={onClose} />
    <div className={bem("b-menu__container", { open: isOpen })}>
      <div className="b-menu__logo">
        <Logo />
      </div>
      <div className="b-menu__content">
        {children}
      </div>
    </div>
  </div>
);
