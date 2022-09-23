import Layout from './HomeLayout';
import PageLayout from './PageLayout';
import SubPageLayout from './SubPageLayout';

export enum Layouts {
  home = 'home',
  page = 'page',
  subpage = 'subpage'
}

const LAYOUT_MAP = {
  [Layouts.home]: Layout,
  [Layouts.page]: PageLayout,
  [Layouts.subpage]: SubPageLayout
};

export default LAYOUT_MAP;
