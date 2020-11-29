import React, {  SyntheticEvent, useRef, useState } from 'react';
import logo from '../../assets/logo.svg';
import colors from '../../styles/colors';
import { buttonStyles } from '../../styles/controls';

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		marginTop: 20
	},
	logo: {
		marginBottom: 20
	},
	upload: {
		display: 'flex',
		fontSize: 54,
		border: `3px solid ${colors.black}`,
		borderRadius: 15,
		width: 150,
		height: 150,
		placeItems: 'center',
		margin: '20px auto',
		cursor: 'pointer'
	},
	uploadPlus: {
		width: '100%',
		textAlign: 'center'
	}
};

export default function FormPage() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [file, setFile] = useState(null);
	const [links, setLinks] = useState(new Array(10).fill(''));
	const [res, setRes] = useState<any>(false);
	const fileInput = useRef(null);

	const submit = () => {
		setIsLoading(true);
		const fd = new FormData();
		fd.append('image', file || '');
		links.filter(x => x !== '').forEach(x => fd.append('links', x));
		fetch('https://895bad95711b.ngrok.io/getMatch', {
			method: 'POST',
			body: fd
		})
			.then(x => x.json())
			.then(res => {
				setRes(res);
			});	
	};

	const handleTChange = (e: SyntheticEvent, index: number) => {
		let d = [...links];
		d[index] = (e.target as any).value;
		setLinks(d);
	};

	const onFileSelected = (e: SyntheticEvent) => {
		if ((e.target as any).files) {
			setFile((e.target as any).files[0]);
		}
	};

	return (
		<main className='ui main text container' style={styles.container}>
			<img alt='App logo' src={logo} style={styles.logo} />
			{res ? (
				<>
					<h1>{res.name}</h1>
					<h2>Уровень доверия {~~(res.trust * 100)}%</h2>
					{res.itns.map((x: any, i: number) => (
						<div key={i} className='ui card' style={{width: '100%'}}>
							<div className='content'>
								<div className='header'>{x.name}</div>
								<div className='meta'>ИНН {x.itn}</div>
								<div className='description'>
									{x.status ? (
										<b>{x.status === 'active' ? 'Ликвидирован' : 'Дейстителен'}</b>
									) : 'Статус неизвестен'}
								</div>
							</div>
							
						</div>
					))}
					<h2>Ключевые слова</h2>
					<ul>
						{Object.keys(res.words)
							.map(x => ({
								name: x,
								counter: res.words[x]
							}))
							.sort((a: any, b: any) => b.counter - a.counter)
							.slice(0, 8)
							.map(({ name }: any, i: number) => <li key={i}>{name}</li>)
						}
					</ul>
				</>
			) : (
				<form
					className={'ui form' + (isLoading ? ' loading' : '')}
					onSubmit={(e: SyntheticEvent) => {
						e.preventDefault();
						return false;
					}}
				>
					<div className='field'>
						<input
							type='file'
							id='file'
							ref={fileInput}
							onChange={onFileSelected}
						/>
					</div>
					<div className='field'>
						<div className='two fields'>
							<div className='field'>
								<input type='text' placeholder='vk.com/id1' onChange={(e) => handleTChange(e, 0)} />
							</div>
							<div className='field'>
								<input type='text' placeholder='vk.com/id1' onChange={(e) => handleTChange(e, 1)} />
							</div>
						</div>
						<div className='two fields'>
							<div className='field'>
								<input type='text' placeholder='vk.com/id1' onChange={(e) => handleTChange(e, 2)} />
							</div>
							<div className='field'>
								<input type='text' placeholder='vk.com/id1' onChange={(e) => handleTChange(e, 3)} />
							</div>
						</div>
						<div className='two fields'>
							<div className='field'>
								<input type='text' placeholder='vk.com/id1' onChange={(e) => handleTChange(e, 4)} />
							</div>
							<div className='field'>
								<input type='text' placeholder='vk.com/id1' onChange={(e) => handleTChange(e, 5)} />
							</div>
						</div>
						<div className='two fields'>
							<div className='field'>
								<input type='text' placeholder='vk.com/id1' onChange={(e) => handleTChange(e, 6)} />
							</div>
							<div className='field'>
								<input type='text' placeholder='vk.com/id1' onChange={(e) => handleTChange(e, 7)} />
							</div>
						</div>
						<div className='two fields'>
							<div className='field'>
								<input type='text' placeholder='vk.com/id1' onChange={(e) => handleTChange(e, 8)} />
							</div>
							<div className='field'>
								<input type='text' placeholder='vk.com/id1' onChange={(e) => handleTChange(e, 9)} />
							</div>
						</div>
					</div>
					<button
						className='ui button'
						style={buttonStyles}
						onClick={submit}
					>
						Next
					</button>
				</form>
			)}
		</main>
	);
}
