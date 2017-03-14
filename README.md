# data-diver

I hate writing this:

	props.user &&
	props.user.friends &&
	props.user.friends[0] &&
	props.user.friends[0].friends
	

Facebook [has a solution](https://github.com/facebookincubator/idx) for it, but it requires additional build steps, so I wrote some code to make it easier.

## Usage 

	yarn add data-diver

	import dd from 'data-diver'
	let friends = dd(props, 'user.friends.0.friends');
	console.log(friends);
	

## Done
