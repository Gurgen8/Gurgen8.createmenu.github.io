
function populateMenu(container, menu) {
    if (!menu || !menu.length) return;
    const ul = document.createElement("ul");
    for (const {label, url, items} of menu) {
        const li = document.createElement("li");
        li.textContent = label;
        li.className = "leaf";       
        if (items.length) {
            populateMenu(li, items);
            li.className = "collapsed";       
            li.addEventListener("click", (e) => { 
                if (e.target !== e.currentTarget) return;
                e.target.classList.toggle("expanded");
                e.target.classList.toggle("collapsed");
            });
        }
        ul.appendChild(li);
    }
    container.appendChild(ul);
}


    var menu = [
        {
            label: 'Home',
            url: '/home',
            items: []
        },
        {
            label: 'Categories',
            url: '#',
            items: [
                {
                    label: 'Cars',
                    url: '#',
                    items: [
                        {
                            label: 'Mersedes',
                            url: '/mersedes',
                            items: []
                        },
                        {
                            label: 'BMW',
                            url: '/bmw',
                            items: []
                        },
                        {
                            label: 'Audi',
                            url: '/audi',
                            items: []
                        },
                        {
                            label: 'Volvo',
                            url: '/volvo',
                            items: []
                        }
                    ]
                },
                {
                    label: 'Phones',
                    url: '#',
                    items: [
                        {
                            label: 'Iphone',
                            url: '/iphone',
                            items: [
                                {
                                    label: 'S3',
                                    url: '/s3',
                                    items: []
                                },
                                {
                                    label: 'S4',
                                    url: '/s4',
                                    items: []
                                },
                                {
                                    label: 'S5',
                                    url: '/s5',
                                    items: []
                                },
                                {
                                    label: 'S6',
                                    url: '/s6',
                                    items: []
                                },
                                {
                                    label: 'S7',
                                    url: '/s7',
                                    items: []
                                },
                            ]
                        },
                        {
                            label: 'Android',
                            url: '/android',
                            items: [
                                {
                                    label: 'Xiaomi',
                                    url: '/xiaomi',
                                    items: []
                                },
                                {
                                    label: 'LG V30',
                                    url: '/lgv30',
                                    items: []
                                },
                                {
                                    label: 'Sony Xperia XZ1',
                                    url: '/sony-xperia-XZ1',
                                    items: []
                                }
                            ]
                        },
                        {
                            label: 'Nokia',
                            url: '/nokia',
                            items: [
                                {
                                    label: 'Lumia',
                                    url: '/lumia',
                                    items: []
                                },
                                {
                                    label: 'Nokia 5',
                                    url: '/nokia-5',
                                    items: []
                                },
                                {
                                    label: 'Nokia 6',
                                    url: '/nokia-6',
                                    items: []
                                },
                            ]
                        }
                    ]
                },
                {
                    label: 'Computer Processors',
                    url: '#',
                    items: [
                        {
                            label: 'I3',
                            url: '/i3',
                            items: []
                        },
                        {
                            label: 'I5',
                            url: '/I5',
                            items: []
                        },
                        {
                            label: 'I7',
                            url: '/i7',
                            items: [],
                        }
                    ]
                }
            ]
        },
        {
            label: 'About Us',
            url: '/about-us',
            items: []
        },
        {
            label: 'Contact Us',
            url: '/contact-us',
            items: []
        },
        {
            label: 'My Account',
            url: '/my-account',
            items: [
                {
                    label: 'Log in',
                    url: '/log-in',
                    items: []
                },
                {
                    label: 'Sign In',
                    url: '/sign-in',
                    items: []
                }
            ]
        }
    ];

    
    
    populateMenu(document.querySelector("#menu"), menu)