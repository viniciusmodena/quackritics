//tools imports
import React from "react";
import { motion } from "framer-motion";
//styles imports
import { PageContainer } from "./style";

//components imports
import Logo from "../../components/Logo";
import Form from "../../components/Form";

const RegisterPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageContainer>
        <Logo />
        <Form name="Register" />
      </PageContainer>
    </motion.div>
  );
};

export default RegisterPage;
