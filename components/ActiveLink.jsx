import { useRouter } from 'next/router';

import { useContext } from 'react';
import { DataContext } from '../Utils/DataContext';

const ActiveLink = ({ children, href }) => {
  const { handleSideClose } = useContext(DataContext);

  const router = useRouter();

  const isCurrentPath = router.pathname === href || router.asPath === href;

  const handleClick = (e) => {
    e.preventDefault();

    router.push(href);
    handleSideClose();
  };

  return (
    <a
      href={href}
      className={isCurrentPath ? 'active' : ''}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default ActiveLink;
