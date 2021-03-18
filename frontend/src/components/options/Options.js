import React from 'react';

import Edit from 'src/components/edit/Edit';
import Trash from 'src/components/trash/Trash';
import 'src/components/options/options.sass';

const Options = () => (
  <div className="row">
    <div className="options">
      <Trash className="btn btn-light" />
      <Edit className="btn btn-light" />
    </div>
  </div>
);

export default Options;
