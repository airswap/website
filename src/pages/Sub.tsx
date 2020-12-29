import React from 'react';
import SubMenu from '../components/SubMenu';
import SubDetail from '../components/SubDetail';
import { useParams, useLocation } from 'react-router-dom';
import { subMenus, pageAboutTechnology, pageDevelopment, pageTokenAndGov } from '../constants';
import { Redirect } from 'react-router-dom';

const Sub = () => {
  let { id } = useParams();
  const location = useLocation();
  let data = {};

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const arrSubPage = subMenus.map(item => item.to);
  if (!arrSubPage.includes(id)) {
    return <Redirect to="/" />;
  } else {
    switch (id) {
      case 'technology':
        data = pageAboutTechnology;
        break;
      case 'process':
        data = pageDevelopment;
        break;
      case 'token':
        data = pageTokenAndGov;
        break;
      default:
      // code block
    }
  }
  return (
    <>
      <SubMenu />
      <SubDetail data={data}/>
    </>
  );
};

export default Sub;
