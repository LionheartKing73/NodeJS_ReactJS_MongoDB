'use strict';
const React = require('react');
const ReactRouter = require('react-router');
const ClassNames = require('classnames');


const Link = ReactRouter.Link;
const propTypes = {
    location: React.PropTypes.object
};


class Navbar extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            navBarOpen: false
        };
    }

    componentWillReceiveProps() {

        this.setState({ navBarOpen: false });
    }

    isPathActive(path) {

        return ClassNames({
            active: this.props.location.pathname === path
        });
    }

    toggleMenu() {

        this.setState({ navBarOpen: !this.state.navBarOpen });
    }

    render() {

        const navBarCollapse = ClassNames({
            'navbar-collapse': true,
            collapse: !this.state.navBarOpen
        });

        return (
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">

                    </div>
                    <div className={navBarCollapse}>
                        <ul className="nav navbar-nav">

                            <li className={this.isPathActive('/account/settings')}>
                                <Link to="/account/settings">Settings</Link>
                            </li>

                            <li className={this.isPathActive('/account/image')}>
                                <Link to="/account/image">Image</Link>
                            </li>
                            <li className={this.isPathActive('/account/image')}>
                                <Link to="/account/mathdata">Math Data</Link>
                            </li>                            

                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="/login/logout">Sign out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

Navbar.propTypes = propTypes;


module.exports = Navbar;
