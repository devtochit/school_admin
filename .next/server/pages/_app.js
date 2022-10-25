"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./Utils/DataContext.js
var DataContext = __webpack_require__(56);
;// CONCATENATED MODULE: external "next-themes"
const external_next_themes_namespaceObject = require("next-themes");
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(41);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: ./components/Theme.jsx



//import react icons


const Theme = ()=>{
    const { theme , setTheme , systemTheme  } = (0,external_next_themes_namespaceObject.useTheme)();
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    (0,external_react_.useEffect)(()=>{
        themeChanger();
    }, []);
    //checking system theme
    const themeChanger = ()=>{
        if (!mounted) return null;
        const currentTheme = theme === "system" ? systemTheme : theme;
        if (currentTheme === "light") {
            lightTheme();
        } else {
            darkTheme();
        }
    };
    const lightTheme = ()=>{
        setTheme("light");
    };
    const darkTheme = ()=>{
        setTheme("dark");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-white dark:bg-night-blue flex flex-col items-center w-fit px-2 py-4 shadow-md rounded-lg fixed top-2/3 right-0 text-lg z-30",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "p-2 rounded-lg text-yellow-400 dark:bg-white/[0.2]",
                onClick: darkTheme,
                children: /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsMoonStarsFill, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: lightTheme,
                className: "p-2 rounded-lg text-orange-400 bg-gray-200 dark:bg-transparent mt-3",
                children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdWbSunny, {})
            })
        ]
    });
};
/* harmony default export */ const components_Theme = (Theme);

// EXTERNAL MODULE: external "react-icons/go"
var go_ = __webpack_require__(856);
// EXTERNAL MODULE: external "react-icons/im"
var im_ = __webpack_require__(924);
;// CONCATENATED MODULE: external "react-icons/ri"
const ri_namespaceObject = require("react-icons/ri");
;// CONCATENATED MODULE: external "react-icons/io"
const io_namespaceObject = require("react-icons/io");
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(290);
// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(989);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/ActiveLink.jsx




const ActiveLink = ({ children , href  })=>{
    const { handleSideClose  } = (0,external_react_.useContext)(DataContext/* DataContext */.R);
    const router = (0,router_namespaceObject.useRouter)();
    const isCurrentPath = router.pathname === href || router.asPath === href;
    const handleClick = (e)=>{
        e.preventDefault();
        router.push(href);
        handleSideClose();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: href,
        className: isCurrentPath ? "active" : "",
        onClick: handleClick,
        children: children
    });
};
/* harmony default export */ const components_ActiveLink = (ActiveLink);

;// CONCATENATED MODULE: ./components/Sidebar.jsx


//import icons








//import component

//import utilities

const Sidebar = ()=>{
    const { handleSideClose , isShown  } = (0,external_react_.useContext)(DataContext/* DataContext */.R);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: `sidebar bg-white dark:bg-night-blue  w-72 h-full fixed top-0 left-0 pt-10 overflow-y-auto flex flex-col z-50 ${isShown ? "animate-slideIn xl:animate-none" : "animate-slideOut xl:animate-none -left-96 xl:left-0"}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "sidebar__logo px-8 mb-12 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "uppercase font-bold text-2xl text-black dark:text-white",
                        children: "ipi."
                    }),
                    isShown ? /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoClose, {
                        onClick: handleSideClose,
                        className: "text-3xl cursor-pointer text-gray-500 dark:text-white xl:hidden"
                    }) : ""
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "sidebar__main-content px-6 mb-16",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        className: "uppercase text-sm text-gray-500 mb-5 ml-1",
                        children: "main menu"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "sidebar__ul text-dark-blue dark:text-gray-300",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_ActiveLink, {
                                        href: "/",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(go_.GoHome, {
                                                    className: "text-3xl mr-4"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Home"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_ActiveLink, {
                                        href: "/vehicles",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(im_.ImTruck, {
                                                    className: "text-3xl mr-4"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Vehicles"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_ActiveLink, {
                                        href: "/transporters",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(md_.MdPeople, {
                                                    className: "text-3xl mr-4"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Transporters"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_ActiveLink, {
                                        href: "/customers",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(go_.GoPerson, {
                                                    className: "text-3xl mr-4"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Customers"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_ActiveLink, {
                                        href: "/shippers",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaShip, {
                                                    className: "text-3xl mr-4"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Shippers"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "sidebar__internal-tools px-6 mb-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        className: "uppercase text-sm text-gray-500 mb-5 ml-1",
                        children: "Internal Tools"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "sidebar__ul text-dark-blue dark:text-gray-300",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_ActiveLink, {
                                        href: "/tickets",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(md_.MdSupport, {
                                                    className: "mr-4 text-3xl"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Support Tickets"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_ActiveLink, {
                                        href: "/invoices",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaReceipt, {
                                                    className: "text-3xl mr-4"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Invoices"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_ActiveLink, {
                                        href: "/analytics",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiBarChart2Fill, {
                                                    className: "text-3xl mr-4"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Analytics"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_ActiveLink, {
                                        href: "/payments",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(go_.GoCreditCard, {
                                                    className: "text-2xl mr-4"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Payments"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_ActiveLink, {
                                        href: "/settings",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(io_namespaceObject.IoIosSettings, {
                                                    className: "text-3xl mr-4"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Settings"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sidebar__logout text-center bg-gray-200 dark:bg-trans-white justify-self-end p-5 cursor-pointer",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#logOut",
                    children: "Log out"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Sidebar = (Sidebar);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/TopNav.jsx


//import utilities

//import icons



const TopNav = ()=>{
    const { handleSideOpen  } = (0,external_react_.useContext)(DataContext/* DataContext */.R);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "vertical__nav flex items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "xl:hidden cursor-pointer",
                onClick: handleSideOpen,
                children: /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoMenu, {
                    className: "text-3xl text-gray-500"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " ml-auto flex items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-14 h-14 bg-gray-200 dark:bg-night-white rounded-full flex justify-center items-center relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(io_namespaceObject.IoIosNotificationsOutline, {
                                className: "text-3xl "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "badge h-3 w-3 bg-orange-500 rounded-full absolute top-4 right-4 "
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "line w-1 h-14 bg-gray-300 dark:bg-gray-700 mx-4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-14 w-14 rounded-full relative",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "rounded-full",
                            src: "/avatar.jpg",
                            alt: "user pic",
                            layout: "fill",
                            objectFit: "cover"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_TopNav = (TopNav);

;// CONCATENATED MODULE: ./components/Tracking.jsx
/* eslint-disable @next/next/no-img-element */ 

const Tracking = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex items-center justify-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "h-72 mt-4 flex items-center",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " mx-auto lg:mx-0 h-28 w-28 rounded-full flex items-center justify-center bg-blue-pulse animate-beat",
                children: /*#__PURE__*/ jsx_runtime_.jsx(go_.GoSearch, {
                    className: "text-3xl text-dark-blue dark:text-white/60"
                })
            })
        })
    });
};
/* harmony default export */ const components_Tracking = (Tracking);

;// CONCATENATED MODULE: ./components/Found.jsx
/* eslint-disable @next/next/no-img-element */ 



const Found_Tracking = ()=>{
    const { currentItem  } = (0,external_react_.useContext)(DataContext/* DataContext */.R);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "lg:flex justify-between items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " lg:w-1/3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " border-b-2 bordr-gray-200 py-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-between items-start ",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "h-12 w-12 object-cover rounded-full",
                                            src: currentItem.img,
                                            alt: currentItem.driver
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "ml-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "font-semibold",
                                                    children: currentItem.driver
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-sm",
                                                    children: "Transporter"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "rounded-2xl mt-3 lg:mt-0 px-8 py-1 ml-2 outline-0 border-2 border-black/80 dark:border-white hover:bg-black hover:text-white capitalize",
                                    children: "view"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: " border-b-2 bordr-gray-200 py-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "font-semibold mb-1",
                                children: currentItem.current
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Current location"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: " border-b-2 bordr-gray-200 py-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "font-semibold mb-1",
                                children: "36mins"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Time spent so far"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "lg:flex-1 h-72 lg:ml-16 mt-4 lg:mt-0 bg-gray-200",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mapouter relative text-right h-full w-full",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "gmap_canvas overflow-hidden bg-none h-full w-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                width: "100%",
                                height: "500",
                                id: "gmap_canvas",
                                src: `https://maps.google.com/maps?q=${currentItem.current}&t=&z=13&ie=UTF8&iwloc=&output=embed`,
                                frameBorder: "0",
                                scrolling: "no",
                                marginHeight: "0",
                                marginWidth: "0"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "block",
                                href: "https://123movies-to.org"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.embedgooglemap.net",
                                children: "embed google map wordpress"
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Found = (Found_Tracking);

;// CONCATENATED MODULE: ./components/Modal.jsx
/* eslint-disable @next/next/no-img-element */ 






const Modal = ()=>{
    const { handleClose , currentItem , isFound  } = (0,external_react_.useContext)(DataContext/* DataContext */.R);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-overlay-black dark:bg-overlay-dark h-full w-full px-4 lg:px-6 xl:px-0 overflow-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 lg:flex justify-center items-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: " bg-white dark:bg-night-blue h-auto mx-auto lg:mx-0 my-10 lg:my-0 w-full xl:w-2/3 py-8 rounded-md px-6 lg:px-8 relative",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-center mb-6 text-black dark:text-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaRegWindowClose, {
                            onClick: handleClose,
                            className: "text-2xl rounded-md cursor-pointer absolute top-8 right-8"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-3xl font-semibold mb-2 mt-10 lg:mt-0",
                            children: isFound ? "Location Found" : "Tracking Vehicle"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: isFound ? "Vehicle has successfully been located" : "Please hold on. Locating vehicle on IPI network"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: isFound ? /*#__PURE__*/ jsx_runtime_.jsx(Found, {}) : /*#__PURE__*/ jsx_runtime_.jsx(components_Tracking, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mt-8 overflow-x-auto whitespace-nowrap text-black dark:text-white",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "capitalize",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-start ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(im_.ImTruck, {
                                            className: "text-3xl"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "ml-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "font-bold uppercase",
                                                    children: currentItem.reg
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-gray-400 text-sm",
                                                    children: currentItem.vehicle
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "capitalize mx-8 lg:mx-0",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "font-bold",
                                        children: [
                                            " ",
                                            currentItem.start
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "start location"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "capitalize",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-bold",
                                        children: currentItem.end
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "destination"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "capitalize ml-8 lg:ml-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-bold",
                                        children: currentItem.deliveryStatus
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "status"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Modal = (Modal);

;// CONCATENATED MODULE: ./components/Layout.jsx



//import utility

//import components




const Layout = ({ children  })=>{
    const { isOpen , isShown , handleSideClose  } = (0,external_react_.useContext)(DataContext/* DataContext */.R);
    //overflow is hidden when modal is opened.
    (0,external_react_.useEffect)(()=>{
        const body = document.querySelector("body");
        if (isOpen === true) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "layout__container relative",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Logistics Dashboard"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Sidebar, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "bg-lay-white dark:bg-lay-black text-gray-500 dark:text-white px-4 md:px-8 py-8 min-h-screen xl:ml-72 relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_TopNav, {}),
                    children,
                    isShown ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: handleSideClose,
                        className: "lg:hidden bg-white/60 dark:bg-night-black/80 h-full w-full absolute top-0 left-0 z-40"
                    }) : null
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Theme, {}),
            isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(components_Modal, {}) : ""
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(DataContext/* DataContextProvider */.x, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_themes_namespaceObject.ThemeProvider, {
            enableSystem: true,
            attribute: "class",
            children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 856:
/***/ ((module) => {

module.exports = require("react-icons/go");

/***/ }),

/***/ 924:
/***/ ((module) => {

module.exports = require("react-icons/im");

/***/ }),

/***/ 989:
/***/ ((module) => {

module.exports = require("react-icons/io5");

/***/ }),

/***/ 41:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,56], () => (__webpack_exec__(475)));
module.exports = __webpack_exports__;

})();