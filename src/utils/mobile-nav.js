
const mobileNav = () => {
    // selector 
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    // state 
    let isMobileNavOpen = false;

    // on mount

    // handlers
    const handleHeaderBtnDisplay = () => {
        isMobileNavOpen = !isMobileNavOpen;
        if( isMobileNavOpen){
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    }
    const handleMobileLinksDisplay = () => {
        isMobileNavOpen  = false;
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto'; 
    }
    // events
    headerBtn.addEventListener('click', handleHeaderBtnDisplay); 

    mobileLinks.forEach(link => {
        link.addEventListener('click', handleMobileLinksDisplay);
    });
};

export default mobileNav;
