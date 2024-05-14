export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-content grid">
                    <div>
                        <h5>Socials:</h5>
                        <a href="https://www.instagram.com/neklerofficial_" target="_blank">
                            <img src="/static/iconmonstr-instagram-11.svg" alt="Instagram" /> neklerofficial_
                        </a>
                    </div>

                    <div className="location">
                        <a href="https://www.google.com/maps/place/%D0%BA%D0%B2.+%D0%9E%D1%80%D0%BB%D0%B0%D0%BD%D0%B4%D0%BE%D0%B2%D1%86%D0%B8,+%D1%83%D0%BB.+%E2%80%9E%D0%9F%D1%8A%D1%80%D0%B2%D0%B0+%D0%B1%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B0+%D0%B0%D1%80%D0%BC%D0%B8%D1%8F%E2%80%9C+33,+1225+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.7224906,23.3277777,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa8feb8bf9fb17:0x872ed7644d14af14!8m2!3d42.7224867!4d23.3303526!16s%2Fg%2F11c0yv4v8l?entry=ttu">
                            <img src="/static/location-outline.svg" /> Bulgaria, Sofia, kv. Orlandovtsi, ul. Parva Balgarska armia №33
                        </a>
                    </div>

                    <div>
                        <div>
                            <a href="tel:0988947809">
                                <img src="/static/call-outline.svg" /> 098 894 7809
                            </a>
                        </div>
 
                        <div>
                            <a href="mailto:neklerfamily@gmail.com">
                                <img src="/static/mail-open-outline.svg" /> neklerfamily@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}