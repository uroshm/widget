import './ServiceWidgets.css';

const services = [
  {
    title: 'Widget Repair',
    imageUrl: '/widgetRepair.jpg',
    description:
      'Professional widget repair services to get your widgets back in working order.',
  },
  {
    title: 'Widget Installation',
    imageUrl: '/widgetInstallation.jpg',
    description:
      'Expert widget installation services for all types of widgets.',
  },
  {
    title: 'Widget Maintenance',
    imageUrl: '/widgetMaintenance.jpg',
    description:
      'Regular maintenance services to keep your widgets running smoothly.',
  },
];

const ServiceWidgets = () => {
  return (
    <div className="service-widgets">
      <h1 className="title">Our Services</h1>
      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="service-image"
            />
            <div className="service-info">
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceWidgets;
