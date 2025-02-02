import icons from '../../../assets/icons.svg';

import { UserModalBody, ModalLink, ModalButton } from './ModalStyles';

export const UserModal = ({ setIsOpen, setOverlay }) => {
  return (
    <UserModalBody>
      <ModalLink to="/settings">
        <svg>
          <use href={`${icons}#icon-setting-2`} />
        </svg>
        Setting
      </ModalLink>
      <ModalButton
        onClick={() => {
          setIsOpen(true);
          setOverlay(false);
        }}
      >
        <svg>
          <use href={`${icons}#icon-logout`} />
        </svg>
        Log out
      </ModalButton>
    </UserModalBody>
  );
};
