import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMapMarker } from 'react-icons/fa';
import { Col, Row } from 'react-bootstrap';
import styles from '../map/map.module.css';

const AnyReactComponent = ({ text }) => (
	<div style={{ color: '#0eb397', backgroundColor: '#0eb397', fontSize: '1.5rem' }}>
		<FaMapMarker />
	</div>
);

class Map extends Component {
	static defaultProps = {
		center: {
			lat: 52.225421,
			lng: 21.017331
		},
		zoom: 17
	};

	render() {
		return (
			// Important! Always set the container height explicitly
			<Col xs={12}>
				<Row>
					<Col xs={12}>
						<Row className={styles.contentHolder}>
							<Col xs={12} md={3}>
								<p className={styles.phoneP}>{this.props.phoneNumber}</p>
							</Col>
							<Col xs={12} md={6}>
								<p>{this.props.address}</p>
							</Col>
							<Col xs={12} md={3}>
								<p className={styles.facebookP}>
									<a
										href={this.props.facebookSlug}
										target="_blank"
										rel="noopener noreferrer"
										className={styles.facebook}
									>
										FACEBOOK
									</a>
								</p>
							</Col>
						</Row>
					</Col>
					<Col style={{ height: '45vh', width: '100%' }} className={styles.map}>
						<GoogleMapReact
							bootstrapURLKeys={{ key: 'AIzaSyALl9ysd3pGFZSy2bnXI2KCfj7GFLhxRA0' }}
							defaultCenter={this.props.center}
							defaultZoom={this.props.zoom}
						>
							<AnyReactComponent lat={52.225421} lng={21.017331} text="Tahina" />
						</GoogleMapReact>
					</Col>
				</Row>
			</Col>
		);
	}
}

export default Map;
