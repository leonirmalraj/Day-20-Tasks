import React from 'react';
import './App.css';

function FeatureList({ features }) {
  return (
    <div className="features">
      {features.map((feature, index) => {
        const isPositive = feature.includes('☑');
        return (
          <p key={index} className={isPositive ? 'positive' : 'negative'}>
            {feature}
          </p>
        );
      })}
    </div>
  );
}

function Card({ plan, price, features }) {
  return (
    <div className="card">
      <div className="plan-price">
        <p>{plan}</p>
        <h2>${price}/month</h2>
      </div>
      <hr />
      <FeatureList features={features} />
      <button className="buy-button">Buy Now</button>
    </div>
  );
}

function App() {
  const cardsData = [
    {
      plan: 'FREE',
      price: '0',
      features: ['☑ Single User', '☑ 50GB Storage', '☑ Unlimited Public Projects', '☑ Community Access', '☒ Unlimited Private Projects', '☒ Dedicated Phone Support', '☒ Free Subdomain', '☒ Monthly Status Reports']
    },
    {
      plan: 'PLUS',
      price: '9',
      features: ['☑ Single User', '☑ 50GB Storage', '☑ Unlimited Public Projects', '☑ Community Access', '☑ Unlimited Private Projects', '☑ Dedicated Phone Support', '☑ Free Subdomain', '☒ Monthly Status Reports']
    },
    {
      plan: 'PRO',
      price: '49',
      features: ['☑ Single User', '☑ 50GB Storage', '☑ Unlimited Public Projects', '☑ Community Access', '☑ Unlimited Private Projects', '☑ Dedicated Phone Support', '☑ Free Subdomain', '☑ Monthly Status Reports']
    }
  ];

  return (
    <div className="container">
      <div className="PlanCard">
        <div className="card-container">
          {cardsData.map((card, index) => (
            <Card key={index} plan={card.plan} price={card.price} features={card.features} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
