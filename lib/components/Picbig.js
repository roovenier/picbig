var React = require('react');
var classnames = require('classnames');

var Picbig = React.createClass({
	displayName: 'Picbig',

	getInitialState: function() {
		return {isActive: false};
	},

	render: function() {
		var picbigOverlayClass = classnames({
			'picbig__overlay': true,
			'picbig__overlay_active': this.state.isActive
		});

		return (
			<div className={this.props.className} onKeyDown={this.overlayPress}>
				<div className="picbig">
					<a href={this.props.big} onClick={this.imgClick}>
						<img src={this.props.small} alt={this.props.title} />
					</a>

					<div className={picbigOverlayClass} onClick={this.overlayClick}>
						<button className="picbig__close"></button>

						<img className="picbig__img" src={this.props.big} />

						{this.props.title && <p className="picbig__title">{this.props.title}</p>}
					</div>
				</div>
			</div>
		);
	},

	overlayClick: function(e) {
		if(e.target.classList.contains('picbig__overlay') || e.target.classList.contains('picbig__close')) {
			this.setState({isActive: false});
		}
	},

	imgClick: function(e) {
		e.preventDefault();
		this.setState({isActive: true});
	},

	overlayPress: function(e) {
		if(e.keyCode == 27) {
			this.setState({isActive: false});
		}
	}
});

module.exports = Picbig;
