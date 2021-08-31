import classes from './Layout.module.css'
import MainNavigation from './mainNavigation'

function Layout(props){
    return (
        <div className={classes.layout}>
            <MainNavigation />
            <main>{props.children}</main>
        </div>
    );
}

export default Layout