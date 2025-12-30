import {lazy} from "react";

const LazyAbout = lazy(() => import('./About'));

export { LazyAbout };
export default LazyAbout;
