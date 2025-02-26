import { useNavigate } from 'react-router-dom';
import './Widgets.css';

const Widgets = () => {
  const navigate = useNavigate();

  return (
    <section className="mainContent">
      <div className="services">
        <h2>What We Offer</h2>
        <div className="serviceGrid">
          <div className="serviceItem">
            <button onClick={() => navigate('/buy-widgets')}>
              <h3>Buy Widgets</h3>
              <p>
                Buy our widgets at the best prices. We offer a wide range of
                widgets to suit your needs
              </p>
            </button>
          </div>
          <div className="serviceItem">
            <button onClick={() => navigate('/service-widgets')}>
              <h3>Widget Services</h3>
              <p>
                Widget services to help you with all your widget needs, from
                repairs to installations
              </p>
            </button>
          </div>
          <div className="serviceItem">
            <h3>Widget Partnerships</h3>
            <p>
              Partnership services to help you find the best partners for your
              widget business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Widgets;
