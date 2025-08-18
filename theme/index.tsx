import Theme from 'rspress/theme';
import { HomeFooter } from './HomeFooter';
import { HomeCard } from './HomeCard';
import { HomeFeature } from './HomeFeature';

// 以下展示所有的 Props
// const Layout = () => (
//   <Theme.Layout
//     beforeFeatures={<HomeCard />}
//   />
// );

// const Layout = () => <Theme.Layout beforeNavTitle={<div>some content</div>} />;
// const HomeLayout = () => <div>Home</div>;

export default {
  ...Theme,
  // HomeLayout,
  // Layout,
  HomeFooter,
};

export { HomeFeature };
export * from 'rspress/theme';

