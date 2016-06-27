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

		var dom = React.createElement(
			"div",
			{ className: this.props.className, onKeyDown: this.overlayPress },
			React.createElement(
				"div",
				{ className: "picbig" },
				React.createElement(
					"a",
					{ href: this.props.big, onClick: this.imgClick },
					React.createElement("img", { src: this.props.small, alt: this.props.title })
				),
				React.createElement(
					"div",
					{ className: picbigOverlayClass, onClick: this.overlayClick },
					React.createElement("button", { className: "picbig__close" }),
					React.createElement("img", { className: "picbig__img", src: this.props.big }),
					this.props.title && React.createElement(
						"p",
						{ className: "picbig__title" },
						this.props.title
					)
				)
			)
		);

		return dom;
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
