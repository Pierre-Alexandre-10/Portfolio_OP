import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://formspree.io/f/mnnqvggd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => {
      if (response.ok) {
        setSubmitted(true);          
        setFormData({                 
          name: '',
          email: '',
          message: ''
        });
      }
    })
    .catch((error) => console.error('Erreur lors de l\'envoi', error));
  };

  return (
    <div className='contactForm'>
        <div className='contactForm__block'>
            <h2>Contactez-moi</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name"></label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nom"
                    required
                />
                </div>
                <div>
                <label htmlFor="email"></label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                </div>
                <div>
                <label htmlFor="message"></label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                />
                </div>
                <button type="submit">Envoyer</button>
            </form>
            
            {submitted && <p>Merci pour votre message ! Nous vous répondrons bientôt.</p>}
        </div>            
    </div>
  );
}

export default ContactForm;
