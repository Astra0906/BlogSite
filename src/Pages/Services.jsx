import React from 'react';
import { FaPenNib, FaUserFriends, FaRocket, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate=useNavigate()
    const services = [
        {
            icon: <FaPenNib size={32} className="text-purple-400" />,
            title: "Content Creation",
            description: "Easily create and publish engaging blog posts and articles to share your ideas with the world.",
        },
        {
            icon: <FaUserFriends size={32} className="text-blue-400" />,
            title: "Community Building",
            description: "Connect with like-minded individuals, engage in discussions, and build your own audience.",
        },
        {
            icon: <FaRocket size={32} className="text-pink-400" />,
            title: "SEO Optimization",
            description: "Enhance your blog’s visibility with built-in SEO tools to reach a wider audience effortlessly.",
        },
        {
            icon: <FaShieldAlt size={32} className="text-red-400" />,
            title: "Secure Platform",
            description: "Our platform ensures top-notch security and privacy for all your content and user data.",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8">
                    Our <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Services</span>
                </h1>
                <p className="text-lg leading-relaxed mb-12">
                    BlogSite offers a wide range of services designed to help you create, connect, and grow. From content creation 
                    tools to SEO optimization, we’ve got everything you need to thrive.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-8 shadow-lg flex items-start gap-6">
                            {service.icon}
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                                <p className="text-base leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                    <p className="text-base leading-relaxed mb-8">
                        We are committed to empowering creators and building a supportive community. With user-friendly tools 
                        and advanced features, BlogSite ensures a seamless experience for all our users.
                    </p>
                    <button onClick={()=>navigate("/signup")} className="px-6 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;
