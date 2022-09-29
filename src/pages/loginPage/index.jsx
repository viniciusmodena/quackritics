//tools import
import React from "react";
import { motion } from "framer-motion";
import { PageContainer } from "./style";
import Form from "../../components/Form";
import Logo from "../../components/Logo";

const LoginPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <PageContainer>
        <Logo />
        <Form name="Login" />
      </PageContainer>
    </motion.div>
  );
};

export default LoginPage;
