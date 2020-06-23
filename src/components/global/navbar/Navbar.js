import React, { useState } from 'react';
import styles from '../navbar/navbar.module.css';
import { GiCancel } from 'react-icons/gi';
import { AiOutlineMenu } from 'react-icons/ai';
import Links from '../../constants/Links';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'gatsby';
import Language from '../language';

export default function Navbar({ textColor }) {
	const [ active, setActive ] = useState(false);

	return (
		<header className={styles.mobileNav}>
			<Col>
				<Row>
					{/* code in the below Col handles everything to do with the navbar when under 768 px */}
					<Col>
						<Row className={styles.mobileNavRow}>
							<Col xs={12} className={styles.hamburgerHolder}>
								<AiOutlineMenu
									className={styles.hamburgerMenu}
									onClick={() => setActive(!active)}
									style={{ color: `${textColor}` }}
								/>
								<Language />
								<nav
									// I opted to use inline styles here to make sure I could change the transform property with the active state. Might not be pretty but it got the job done
									style={{
										position: 'fixed',
										top: '0',
										right: '0',
										bottom: '0',
										left: '0',
										backgroundColor: 'black',
										display: 'flex',
										justifyContent: 'center',
										alignContent: 'center',
										overflowY: 'auto',
										transform: `${active ? 'scale(1)' : 'scale(0)'}`,
										transition: '0.5s'
									}}
								>
									<ul className={styles.ul}>
										{Links.map((link) => (
											<li className={styles.li} key={uuidv4()}>
												<Link className={styles.link} to={link.path}>
													{link.text}
												</Link>
											</li>
										))}
										<li>
											<GiCancel className={styles.cancel} onClick={() => setActive(!active)} />
										</li>
									</ul>
								</nav>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		</header>
	);
}
