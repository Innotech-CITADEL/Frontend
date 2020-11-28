import React from 'react';
import colors from '../../styles/colors';
import introImage from '../../assets/intro.png';
import logo from '../../assets/logo.svg';
import { buttonStyles, contentStyles, headerStyles } from '../../styles/controls';
import { Link } from 'react-router-dom';

const styles = {
	container: {
		display: 'flex',
		background: colors.background,
		minHeight: '100vh'
	},
	halfCol: {
		width: '50%'
	},
	imageContainer: {
		display: 'flex',
		placeItems: 'center',
		height: '100vh'
	},
	image: {
		width: '100%',
		height: 'auto'
	},
	content: {
		display: 'flex',
		width: '80%',
		height: '100vh',
		margin: '0 auto',
		placeItems: 'center'
	}
} as { [key: string]: React.CSSProperties };

export default function IntroPage() {
	return (
		<main style={styles.container}>
			<div style={styles.halfCol}>
				<div style={styles.content}>
					<div>
						<img alt='App logo' src={logo} />
						<h1 style={headerStyles}>Bara bara bara, bere bere bere</h1>
						<p style={contentStyles}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt obcaecati, error facilis quae eius libero odit excepturi cupiditate optio consequuntur rem voluptate, amet perferendis? Et eos quod iste corrupti.</p>
						<Link to='/form'>
							<button
								style={{
									...buttonStyles,
									marginTop: 50
								}}
							>
								Let's Start
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div style={styles.halfCol}>
				<div style={styles.imageContainer}>
					<img alt='' src={introImage} style={styles.image} />
				</div>
			</div>
		</main>
	);
}
