import CartItem from "./CartItem";


function Modal({ setShowModal, }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src="/images/icon-order-confirmed.svg" alt="confirm order"/>
        <h2>Order Confirmed </h2>
        <button onClick={() => setShowModal(false)}>
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default Modal;