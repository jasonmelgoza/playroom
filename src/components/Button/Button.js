import React from "react";
import { Button as StyledButton } from 'semantic-ui-react';

import styles from './Button.module.scss';

import "./Button.scss";

function Button(props) {
  return (
    <div className={styles.Button}>
      <StyledButton className="button is-danger is-outlined container">{props.children}</StyledButton>
    </div>
  );
}

export default Button;
