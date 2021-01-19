import ReactModal, { Props } from 'react-modal'

ReactModal.setAppElement('#__next')

const Modal: React.FC<Props> = ({ children, ...props }) => {
  return (
    <ReactModal style={customStyles} {...props}>
      {children}
    </ReactModal>
  )
}

const customStyles = {
  overlay: {
    zIndex: 999,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    width: 400,
    maxWidth: '95%',
    height: 400,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

export default Modal
