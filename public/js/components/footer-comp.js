Vue.component('FooterComp', {
    template: `
    <div>
    <section class="subcribe">
        <div class="container subscribe_blocks">
            <div class="subscribe_quote">
                <img src="img/photo_subscribe.png" class="photo_subscribe" alt="photo">
                <p class="pg_subscribe">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus
                    condimentum“</p>
            </div>
            <div class="input_subscribe_block">
                <p class="pg_input_subscribe"><span class="bold_pg_input">SUBSCRIBE</span>
                    <br>FOR OUR NEWLETTER AND PROMOTION
                </p>
                <form action="#" class="form_subscribe">
                    <input type="email" class="input_subscribe" placeholder="Your Email" required>
                    <button type="submit" class="button_subscribe">Subscribe</button>
                </form>
            </div>
        </div>
    </section>
    <footer class="footer">
        <div class="container footer_blocks">
            <div class="copyright_footer">
                <p class="pg_footer">&copy; 2022 Brand All Rights Reserved.</p>
            </div>
            <div class="footer_icons">
                <a href="" class="social_icon padding_icon">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="" class="social_icon padding_icon">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="" class="social_icon padding_icon">
                    <i class="fa-brands fa-pinterest-p"></i>
                </a>
                <a href="" class="social_icon">
                    <i class="fa-brands fa-twitter"></i>
                </a>
            </div>
        </div>
    </footer></div>
    `
})