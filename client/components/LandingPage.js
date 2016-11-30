import React, { PropTypes as T } from 'react';
import radium from 'radium';
import { translate } from 'react-i18next';
import LanguageSwitcher from '../containers/LanguageSwitcher';
import Github from '../containers/Github';
import { colors, darken, lighten } from '../styles/colors';
import * as button from '../styles/button';

const styles = {
  wrapper: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    width: '100%',
    display: 'flex',
    flex: '1',
  },
  pattern: {
    height: '20vh',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  }
};

const LandingPage = (props) => {
  return (
      <div style={styles.wrapper}>
      <div style={styles.row}>
        <div style={{...styles.pattern, backgroundColor: lighten(colors.orange, 0.1) }}><a key='1' style={button.btn}>button</a></div>
        <div style={{...styles.pattern, backgroundColor: lighten(colors.orange, 0.3) }}><a key='2' style={button.largeBtn}>button</a></div>
        <div style={{...styles.pattern, backgroundColor: lighten(colors.orange, 0.5) }}><a key='3' style={button.flatBtn}>button</a></div>
        <div style={{...styles.pattern, backgroundColor: lighten(colors.orange, 0.7) }}><a key='4' style={{...button.largeBtn,...button.disabled}}>button</a></div>
      </div>
      <div style={styles.row}>2</div>
      <div style={styles.row}>3</div>
      <div style={styles.row}>4</div>
      <div style={styles.row}>5</div>
      </div>
  );
};




LandingPage.propTypes = {
  t: T.func.isRequired
};

export default translate()(radium(LandingPage));
