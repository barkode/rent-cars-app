import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section>
        <h1>Your moment starts from here. Carrent. </h1>
        <p>
          Rent a car online now from one of our worldwide locations. With 35
          years’ experience in car hire and van rentals, take advantage of our
          large vehicle rental selection and make your booking online instantly.
          With all the best offers and deals on car rental on the website right
          now, and the option to pay online or upon collection of your car,
          Hertz.ie is the best place to book your car hire. Start your booking
          process using the reservation system above or check out latest car
          rental offers and van hire promotions that are currently available.
        </p>
        <button type="button">Let's Go!</button>
      </section>

      <section>
        <div>
          <h2>Reasons to rent a car with us</h2>
          <ul>
            <li>
              <div>
                <p>All cars in good condition</p>
              </div>
            </li>
            <li>
              <div>
                <p>Support on the road</p>
              </div>
            </li>
            <li>
              <div>
                <p>Affordable prices</p>
              </div>
            </li>
            <li>
              <div>
                <p>Full insurance</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div>
          <h2>Our advantages</h2>
          <p>
            In matters of cooperation with a client, we adhere the principles of
            partnership, which provides a lot of advantages. Concluding a car
            rental agreement with our company, you can be sure that:
          </p>
          <ul>
            <li>
              each car is fully serviceable, regularly undergoes scheduled
              inspection;
            </li>
            <li>all vehicles are insured;</li>
            <li>we will provide a refilled car;</li>
            <li>
              a car will be delivered clean, and it is not necessary to wash it
              before return;
            </li>
            <li>
              if necessary, you will be provided with additional equipment, such
              as a child seat or a GPS navigator;
            </li>
            <li>
              round-the-clock technical support service will always be in touch,
              wherever you are;
            </li>
            <li>
              you will be required to pay only the amount indicated in the
              contract. Additional commissions and other hidden payments are
              excluded.
            </li>
          </ul>
          <li>
            Renting a car with us is advantageous, comfortable and safe. Try our
            services and just be sure of it!
          </li>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
