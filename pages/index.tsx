import { Layouts } from '../components/Layout';
import { ComponentCustom } from './_app';

const Home: ComponentCustom = () => {
  return <div>Home page</div>;
};

Home.layout = Layouts.home;

export default Home;
