import React from 'react';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap';
 
export default class Login extends React.Component {
    constructor(props) {
        super(props); 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.hasTransitioned = false;
    }
    
    componentDidUpdate () {
        if(this.props.mappedUserState.isLoggedIn && !this.hasTransitioned){
            this.hasTransitioned = true;
            this.props.router.push('/');
        }
    }
 
    handleChange(e) {        
        const { name, value } = e.target;
        this.props.mappedChangeInput(name, value);
    }
 
    handleSubmit(e) {
        e.preventDefault();
        this.props.mappedSubmit();
        if (this.props.mappedUserState.username && this.props.mappedUserState.password) {
            this.props.mappedLogin(this.props.mappedUserState.username,this.props.mappedUserState.password);
        }
    }
 
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (this.props.mappedUserState.submitted && !this.props.mappedUserState.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={this.props.mappedUserState.username} onChange={this.handleChange} />
                        {this.props.mappedUserState.submitted && !this.props.mappedUserState.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (this.props.mappedUserState.submitted && !this.props.mappedUserState.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={this.props.mappedUserState.password} onChange={this.handleChange} />
                        {this.props.mappedUserState.submitted && !this.props.mappedUserState.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        {this.props.mappedUserState.isFetching &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                </form>
                {this.props.mappedUserState.error &&
                    <div className="text-danger">
                        <Glyphicon glyph="exclamation-sign" /> Invalid username and password
                    </div>
                }
            </div>
        );
    }
}