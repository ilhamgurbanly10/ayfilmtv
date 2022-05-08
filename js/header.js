
// calling-functions

flashNavbarAnimations();

// the-end-of-calling-functions



// user-modal

userModal = () => {

	const toSignInBtn = document.querySelector('.user-modal-to-sign-in-btn');
	const signUpCloser = document.querySelector('#signUpModalContainer .fl-modal-con-closer');
	const signInBtn =  document.querySelector('.sign-in-btn');

	const toSignIn = () => { signUpCloser.click(); signInBtn.click(); }

	toSignInBtn.addEventListener('click', toSignIn);

}

userModal();

// the-end-of-user-modal