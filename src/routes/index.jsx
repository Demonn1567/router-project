import img from "./contact-mail.png";
import { motion } from "framer-motion";

export default function Index() {
    return (
        
        <div id="homme">
            <motion.img src={img} width={50} id="imgg" 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, x:480 }}
            transition={{ duration: 0.5 }} 
            />
            Home page
        </div>
    );
}