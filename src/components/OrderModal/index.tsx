import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";
import { Overlay, ModalBody, OrderDetails } from "./styles";


interface OrderModalProps {
  visible: boolean;
  order: Order | null;
}

export function OrderModal({visible, order}: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }



  return(
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button">
            <img src={closeIcon} alt="closeIcon" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === "WAITING" && "⌚"}
              {order.status === "IN_PRODUCTION" && "🐀"}
              {order.status === "DONE" && "🧔"}
            </span>
            <strong>
              {order.status === "WAITING" && "Fila de espera"}
              {order.status === "IN_PRODUCTION" && "Em preparo"}
              {order.status === "DONE" && "Pronto!"}
            </strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({_id,product, quantity}) => (
              <div className="item" key={_id}>
                <img src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="28.51" />
                <span className="quantity">{quantity}x</span>

                <div className="products-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>RS 120</strong>
          </div>
        </OrderDetails>
      </ModalBody>
    </Overlay>
  );
}
