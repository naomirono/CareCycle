import { useState } from 'react';

const DonateButton = () => {
  const [loading, setLoading] = useState(false);

  const handleDonateClick = async () => {
    setLoading(true);

    const stripe = await stripePromise;

    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
      setLoading(false);
    }
  };

  return (
    <button
      className="bg-white text-[#7B1FA2] font-semibold py-3 px-6 rounded-full shadow-lg transition-colors duration-300"
      onClick={handleDonateClick}
      disabled={loading}
    >
      {loading ? 'Processing...' : 'Donate Now'}
    </button>
  );
};
