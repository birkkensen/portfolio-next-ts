import { Layout } from '../components';
import { m, domAnimation, AnimatePresence, LazyMotion, MotionConfig } from 'framer-motion';
import '../styles/globals.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps, router }: AppProps) {
	const variants = {
		hidden: { opacity: 0 },
		enter: { opacity: 1 },
		exit: { opacity: 0 },
	};
	return (
		// <MotionConfig reducedMotion='user'>
		// 	<LazyMotion features={domAnimation}>
		// 		<AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
		// 			<m.div
		// 				key={router.route}
		// 				initial='hidden'
		// 				animate='enter'
		// 				exit='exit'
		// 				transition={{ duration: 5 }}
		// 				variants={variants}
		// 			>

		// 			</m.div>
		// 		</AnimatePresence>
		// 	</LazyMotion>
		// </MotionConfig>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
