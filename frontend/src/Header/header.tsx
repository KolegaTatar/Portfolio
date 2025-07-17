import './header.scss';

const Header = ()=>{
    return (
        <header className="header">
            <div className="header_logo" >
                <a className="logo_text"> #
                    <span className="span1"> T </span>
                    <span className="dotted_color">.</span>
                </a>
            </div>

            <div className="header_content">
                <button>
                    Say Hello!
                </button>

            </div>


        </header>
    )
}
export default Header