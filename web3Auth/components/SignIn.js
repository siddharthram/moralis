import Image from "next/image";
import { useMoralis } from "react-moralis";
import styles from "../styles/Home.module.css";
import Logo from "./images/Web3Auth.svg";
import { useState } from "react";
import { useEffect } from "react";
import Link from 'next/link';

export default function SignIn() {
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
useEffect(() => {
  if (isAuthenticated) {
    return (
      <Link href="/loggedin">
        <a> Logged in </a>
      </Link>
    );

  }
  const handleCustomLogin = async () => {
    await authenticate({
      provider: "web3Auth",
      clientId: "BNhICWy1YI9dVdaP0ldsuJ4p7gm5c5w4AbAA7vP6cmHJK7Hcyjf2ftYichqzXMWUnukJGVVRCzALhi-nD4etoLE",
      chainId: Moralis.Chains.POLYGON_MUMBAI,
    });

  };
},[isAuthenticated]);


  return (
    <div>
      <h1 className="text-3xl"> Reputed.xyz</h1>
      <h2>Manage your Reputation</h2>
    <div className={styles.card}>
      <Image className={styles.img} src={Logo} width={80} height={80} />
      {isAuthenticating && <p className={styles.green}>Authenticating</p>}
      {authError && (
        <p className={styles.error}>{JSON.stringify(authError.message)}</p>
      )}
      <div className={styles.buttonCard}>
        <button className={styles.loginButton} onClick={handleCustomLogin}>
          Login
        </button>
      </div>
    </div>
    </div>
  );
}
