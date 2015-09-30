import React, { Component } from 'react';
import styles from './styles.scss';
import { Title } from '../../components';


export default class TitleList extends Component {
	render() {
		const { titles, searchString } = this.props;
		return titles.length === 0 ? null :
		(
			<div className={styles.container}>
				<h3>Which <span className={styles.title}>{decodeURIComponent(searchString)}</span> did you mean?</h3>
			{titles.map((title, i) => <Title title={title} addMovie={this.props.addMovie} key={i} />)}
			</div>
		);
	}
}