import { Layout } from '../components';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import '../styles/globals.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<LazyMotion features={domAnimation}>
			<AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
				<m.div
					key={router.route.concat('Fade In')}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.7 }}
				>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</m.div>
			</AnimatePresence>
		</LazyMotion>
	);
}

export default MyApp;
