import ReactDom from 'react-dom';

interface IPortalType {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: IPortalType): React.ReactPortal => {
  const element = document.getElementById('modal') as Element;
  return ReactDom.createPortal(children, element);
};

export default ModalPortal;
