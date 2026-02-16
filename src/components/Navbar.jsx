import { motion } from "framer-motion";
import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaWhatsapp
} from "react-icons/fa";

import logo from "../assets/BHARATSINGH.png";

const Navbar = () => {
    return (
        <motion.nav
            className="flex items-center justify-between py-6"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Logo */}
            <motion.div
                className="flex shrink-0 items-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}   // 👈 mobile fix
                transition={{ type: "spring", stiffness: 300 }}
            >
                <a href="/" aria-label="Home">
                    <img
                        src={logo}
                        alt="Bharat Singh Logo"
                        className="mx-2 h-10 w-auto"
                    />
                </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
                className="m-8 flex items-center justify-center gap-6 text-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.15 }
                    }
                }}
            >
                {[
                    { icon: <FaLinkedin />, link: "https://linkedin.com/in/your-linkedin-profile" },
                    { icon: <FaGithub />, link: "https://github.com/BHARATSINGH-20" },
                    { icon: <FaInstagram />, link: "https://instagram.com/bharat_singh_9078" },
                    { icon: <FaWhatsapp />, link: "https://wa.me/916367733285" },
                ].map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.3, rotate: 5 }}
                        whileTap={{ scale: 0.9 }} // 👈 mobile animation
                        variants={{
                            hidden: { y: 20, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}
                    >
                        {item.icon}
                    </motion.a>
                ))}
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
 