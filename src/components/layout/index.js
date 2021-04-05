import Menu from './menu';
import TopHeader from './header'
const Layout = ({children}) => {
    return(
        <div className='Layout'>
            <TopHeader/>
            <Menu  />
            <div>{children}</div>
          
        </div>
    );
}
export default Layout;
