import { styled } from 'linaria/react'

const CSSReset = styled.div`
	:global() {
		/* https://hankchizljaw.com/wrote/a-modern-css-reset/ */
		/* Box sizing rules */
		*,
		*::before,
		*::after {
			box-sizing: border-box;
		}

		/* Remove default padding */
		ul[class],
		ol[class] {
			padding: 0;
		}

		/* Remove default margin */
		body,
		h1,
		h2,
		h3,
		h4,
		p,
		ul[class],
		ol[class],
		li,
		figure,
		figcaption,
		blockquote,
		dl,
		dd {
			margin: 0;
		}

		/* Set core body defaults */
		body {
			min-height: 100vh;
			scroll-behavior: smooth;
			text-rendering: optimizeSpeed;
			line-height: 1.5;
		}

		/* Remove list styles on ul, ol elements with a class attribute */
		ul[class],
		ol[class] {
			list-style: none;
		}

		/* A elements that don't have a class get default styles */
		a:not([class]) {
			text-decoration-skip-ink: auto;
		}

		/* Make images easier to work with */
		img {
			max-width: 100%;
			display: block;
		}

		/* Natural flow and rhythm in articles by default */
		article > * + * {
			margin-top: 1em;
		}

		/* Inherit fonts for inputs and buttons */
		input,
		button,
		textarea,
		select {
			font: inherit;
		}

		/* Remove _all_ animations and transitions for people that prefer not to see them */
		@media (prefers-reduced-motion: reduce) {
			* {
				animation-play-state: paused !important;
				transition: none !important;
				scroll-behavior: auto !important;
			}
		}
	}
`

export default CSSReset
