const msg: string = "Hello!";
alert(msg);

window.onload = function () {
    const styleLinksContainer = document.getElementById('styleLinks') as HTMLElement;
    const styleSheet = document.getElementById('styleSheet') as HTMLLinkElement;

    // Tablica stylów do dynamicznej zmiany
    const styles = [
        { id: 'style1', href: 'LABE.css', text: 'Styl 1' },
        { id: 'style2', href: 'LABE2.css', text: 'Styl 2' },
        { id: 'style3', href: 'LABE3.css', text: 'Styl 3 (zmienia tło w Stylu 2)' }
    ];

    // Funkcja zmieniająca styl na podstawie wybranego linku
    const changeStyle = (href: string) => {
        styleSheet.setAttribute('href', href);
    };

    // Tworzymy linki dynamicznie
    styles.forEach(style => {
        const link = document.createElement('a');
        link.href = '#';
        link.id = style.id;
        link.innerText = style.text;
        link.addEventListener('click', () => changeStyle(style.href));

        const listItem = document.createElement('li');
        listItem.appendChild(link);
        styleLinksContainer.appendChild(listItem);
    });
};
