import './App.scss';
import subjx from 'subjx';
import 'subjx/dist/style/subjx.css';

const myInstance = subjx('.test-resize-block').drag({
	// parent container
	container: '.container',
	// "controls" append to this element
	controlsContainer: '.test-resize-block',
	// 'x' | 'y' | 'xy'
	axis: 'x',
	// snap to grid
	snap: {
		x: 10,
		y: 10,
		angle: 10
	},
	// mimic behavior with other '.draggable' elements
	each: {
		move: false,
		resize: false,
		rotate: false
	},
	// enable/disable actions
	draggable: true,
	resizable: true,
	rotatable: true,
	scalable: false,
	// preserve aspect ratio when resizing
	proportions: true,
	// restrict element dragging/resizing/rotation
	restrict: '.selector',
	//  'n' | 's' | 'w' | 'e'
	rotatorAnchor: 'e',
	// rotate offset
	rotatorOffset: 50,
});

function App() {
	return (
		<div className="App">
			<header className="header">

			</header>
			<div className="container">
				{/*<div draggable="true" className="test-resize-block"></div>*/}
				{/*<div draggable="true" className="test-resize-block"></div>*/}
				{/*<div draggable="true" className="test-resize-block"></div>*/}
				<div className="test-resize-block"></div>
				{/*<div className="test-resize-block"></div>*/}
				{/*<div className="test-resize-block"></div>*/}
			</div>
			<footer className="footer">

			</footer>
		</div>
	);
}

export default App;
