import { MENU_ITEMS } from '../../constant/menu'; 

import Menu from './Menu';

const Navigation = () => {
  const filterdMenu = MENU_ITEMS?.filter((item) => item?.isShow);

  return (
    <div>
      <Menu list={filterdMenu} />
    </div>
  );
};

export default Navigation;