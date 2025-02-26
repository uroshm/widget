import { useEffect, useState } from 'react';
import { Widget } from '../utils';
import './BuyWidgets.css';
import { fetchToken } from '../../auth/Auth';

const BuyWidgets = () => {
  const [widgets, setWidgets] = useState<Widget[]>([]);

  useEffect(() => {
    const getTokenAndFetchWidgets = async () => {
      try {
        const token = await fetchToken();
        console.log('token: '+JSON.stringify(token));
        if (token) {
          const response = await fetch('http://localhost:8080/widgets/getAllWidgets', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            throw new Error('Failed to fetch widgets');
          }

          const data = await response.json();
          setWidgets(data);
        }
      } catch (error) {
        console.error('Error fetching widgets:', error);
      }
    };

    getTokenAndFetchWidgets();
  }, []);

  return (
    <div className="buy-widgets">
      <h1 className="title">Choose Your Widget</h1>
      <div className="widget-table">
        {widgets.map((widget, index) => (
          <div key={index} className="widget-card">
            <div className="widget-info">
              <h2 className="widget-title">{widget.name}</h2>
              <p className="widget-description">{widget.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyWidgets;
