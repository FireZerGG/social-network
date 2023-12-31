import c from './item.module.css' 

const Post = (props) => {
    return (
        <li className={c.post}>
            <div className={c.post__avatar}>
                <img alt='asd' className={c.post__avatarImg} src='https://i.pinimg.com/736x/59/3b/1b/593b1b23b9dd282b4a5bd339dd79ca58.jpg'/>
            </div>
            <p className={c.post__text}>
                {props.message}
            </p>
            <div className={c.post__likes}>
                <button className={c.likes__btn} id='likeBtn'>
                    <svg className={c.likes__btn_svg}
                        width="30" height="30" viewBox="0 0 1280 970">
                        <g transform="translate(0.000000,1228.000000) scale(0.100000,-0.100000)"
                            fill="rgb(200, 50, 30)" stroke="none">
                            <path d="M3580 10519 c-418 -47 -855 -233 -1197 -510 -191 -155 -415 -411
                            -552 -631 -303 -485 -468 -1037 -512 -1713 -76 -1171 375 -2000 1524 -2802
                            212 -148 408 -273 822 -523 570 -344 790 -490 1082 -717 659 -511 1296 -1213
                            1537 -1693 29 -58 58 -121 65 -140 l13 -35 18 50 c139 397 809 1167 1560 1795
                            329 275 617 476 1240 865 743 464 1044 683 1364 995 484 471 737 947 833 1567
                            24 155 24 661 0 863 -59 490 -166 864 -357 1240 -135 265 -301 491 -511 695
                            -369 358 -792 567 -1309 647 -133 20 -528 17 -665 -5 -787 -131 -1435 -583
                            -1911 -1332 -64 -100 -179 -313 -229 -426 l-39 -86 -101 201 c-55 111 -137
                            260 -182 332 -497 793 -1205 1275 -2008 1364 -105 12 -378 11 -485 -1z"    
                            />
                        </g>
                    </svg>
                </button>
                <p className={c.likes__count} >{props.likes}</p>
            </div>
        </li>
    )
}

export default Post;