import Image from "../components/image"

const servicesData = [
    {
        title: "Blog, Portfolio Website",
        description: "Build your own personalized blog, and share your story with the world",
        image: <Image filename={'blog-website'} />
    },
    {
        title: "Mobile Responsive Website",
        description: "Make your website look great not just in one device, but across many platforms.",
        image: <Image filename={'responsive-website'} />
    },
    {
        title: "Custom Development",
        description: "Have a custom feature idea or design? we can build it for you.",
        image: <Image filename={'custom-website'} />
    },    {
        title: "PWA",
        description: "Build not just a website, make it an App and power it with the ability to work offline and feels like part of native platform.",
        image: <Image filename={'pwa'} />
    },    {
        title: "E-Commerce Website",
        description: "Enjoy the power of modern e-commerce web application.",
        image: <Image filename={'e-commerce'} />
    }
]

export default servicesData