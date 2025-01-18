import './styles/Landing_page.css'

export function Landing_page() {
    return (
        <>
            <header>
                <div className="left-header">
                    <div className="logo">
                        <img src="logo.png" alt="stockwise-logo" />
                    </div>
                    <div className="company-name">
                        <h1>Stockwise</h1>
                    </div>
                </div>
                <div className="right-header">
                        <button className='login'>Login</button>
                        <button className='sign-up'>Sign-up</button>
                </div>
            </header>
        </>
    )
}