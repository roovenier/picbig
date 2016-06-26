import React, { Component } from 'react';
import Picbig from '../lib/index';

export default class App extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-inverse">
					<div className="container">
						<div className="navbar-header">
							<a className="navbar-brand" href="/">Picbig</a>
						</div>
					</div>
				</nav>

				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1>Picbig examples</h1>

							<p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>

							<Picbig className="pb1" small="/examples/images/image1_s.jpg" big="/examples/images/image1_b.jpg" title="Star Wars" />

							<p className="lead">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>

							<Picbig className="pb2" small="/examples/images/image2_s.jpg" big="/examples/images/image2_b.jpg" />

							<p className="lead">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</p>

							<p className="lead">When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>

							<div className="pb-container">
								<Picbig className="pb3" group="gallery" small="/examples/images/image3_s.jpg" big="/examples/images/image3_b.jpg" />

								<Picbig className="pb5" group="gallery" small="/examples/images/image5_s.jpg" big="/examples/images/image5_b.jpg" title="Booker Dewitt" />

								<Picbig className="pb4" group="gallery" small="/examples/images/image4_s.jpg" big="/examples/images/image4_b.jpg" title="Last of Us art" />
							</div>

							<br />

							<p className="lead">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
