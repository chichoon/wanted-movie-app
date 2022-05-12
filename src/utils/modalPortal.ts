import ReactDom from 'react-dom';

interface IPortalType {
  children: React.ReactNode;
}

const modalPortal = ({ children }: IPortalType) => {
  const element = document.getElementById('modal') as Element;
  return ReactDom.createPortal(children, element);
};

export default modalPortal;
