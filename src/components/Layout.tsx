import React from 'react'
import CSSReset from './CSSReset'
import SEO from './SEO'

const Layout = ({ children, ...props }) => (
	<CSSReset>
		<SEO />
		{children}
	</CSSReset>
)

export default Layout
