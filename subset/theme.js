const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
};

const bgChange = () => {
    document.body.classList.toggle( 'bg-dark' );

    document.querySelector( 'form' ).style.borderColor = 'blue'
}

const theme = localStorage.getItem( 'theme' )
    || ( tmp = Object.keys( themeMap )[ 0 ],
        localStorage.setItem( 'theme', tmp ),
        tmp );
const bodyClass = document.body.classList;
bodyClass.add( theme );

function toggleTheme () {
    const current = localStorage.getItem( 'theme' );
    const next = themeMap[ current ];
    bgChange();
    bodyClass.replace( current, next );
    localStorage.setItem( 'theme', next );
}

document.getElementById( 'themeButton' ).onclick = toggleTheme;