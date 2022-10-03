import * as React from 'react';
import styles from './Renovation02.module.scss';
import { IRenovation02Props } from './IRenovation02Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Renovation02 extends React.Component<IRenovation02Props, {}> {
  public render(): React.ReactElement<IRenovation02Props> {
    return (
      <div className={ styles.renovation02 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
