import React from 'react';

import Logo from 'src/components/logo/Logo';
import Options from 'src/components/options/Options';
import 'src/components/card/card.sass';

const Card = () => (
  <div className="row card-elem">
    <div className="col-lg-3 card">
      <Logo />
      <Options />
    </div>
  </div>
);

export default Card;
