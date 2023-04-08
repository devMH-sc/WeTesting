import { ReactNode, createContext, useEffect, useRef, useState } from 'react';

interface GlobalProviderProps {
	children: ReactNode;
}

interface GlobalContextProps {
	size: { width: number; height: number };
	isMobile: boolean;
	isTablet: boolean;
	isNotebook: boolean;
	isDesktop: boolean;
}

const GlobalContext = createContext<GlobalContextProps>({
	size: { width: 0, height: 0 },
	isMobile: false,
	isTablet: false,
	isNotebook: false,
	isDesktop: false,
});

function GlobalProvider(props: GlobalProviderProps) {
	const { children } = props;
	const [size, setSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	const isMobile = useRef(false);
	const isTablet = useRef(false);
	const isNotebook = useRef(false);
	const isDesktop = useRef(false);

	useEffect(() => {
		function handleResize() {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		let width = size.width;
		if (width >= 0 && width <= 425) {
			isMobile.current = true;
			isTablet.current = false;
			isNotebook.current = false;
			isDesktop.current = false;
		} else if (width >= 426 && width <= 768) {
			isMobile.current = false;
			isTablet.current = true;
			isNotebook.current = false;
			isDesktop.current = false;
		} else if (width >= 769 && width <= 1024) {
			isMobile.current = false;
			isTablet.current = false;
			isNotebook.current = true;
			isDesktop.current = false;
		} else if (width >= 1025) {
			isMobile.current = false;
			isTablet.current = false;
			isNotebook.current = false;
			isDesktop.current = true;
		}
	}, [size.width]);

	const contextValue: GlobalContextProps = {
		size: size,
		isMobile: isMobile.current,
		isTablet: isTablet.current,
		isNotebook: isNotebook.current,
		isDesktop: isDesktop.current,
	};

	return (
		<GlobalContext.Provider value={contextValue}>
			{children}
		</GlobalContext.Provider>
	);
}

export { GlobalContext, GlobalProvider };
