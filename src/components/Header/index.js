import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
        <>
            <section class="hero max-width is-info">
                <div class="hero-body has-text-centered">
                    <h1 class="title is-1">Christopher Lyko</h1>
                    <h2 class="is-size-4 subtitle mt-2">Future Software Engineer and Finance Major</h2>
                    <h2 class="is-size-4 subtitle mt-2">Email: chrislyko@gmail.com   |   Phone: (704)-993-8513</h2>
                    <h2 class="is-size-4 subtitle mt-2">Github Profile: <a class="is-italic" href="https://github.com/KrixLeekz" target="_blank"><u>KrixLeekz</u></a></h2>
                    <h2 class="is-size-4 subtitle mt-2">LinkedIn Profile: <a class="is-italic" href="https://www.linkedin.com/in/christopher-lyko-0194b714b/" target="_blank"><u>ChrisLyko</u></a></h2>
                </div>
            </section>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a class="navbar-item">
                            Home
                        </a>

                        <a className="navbar-item">
                            About Me
                        </a>

                        <a className="navbar-item">
                            Projects
                        </a>
                    </div>
                </div>
            </nav>
        </>
      )
    }
  }
  
  export default Header;