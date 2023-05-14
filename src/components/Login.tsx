import React, { useState, useRef, FormEvent, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Toast } from "primereact/toast";
import { Card } from "primereact/card";
import { classNames } from "primereact/utils";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
import axios from "axios";
import { useRouter } from 'next/router';

interface Props {}

export default function Login(props: Props) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const toast = useRef<Toast | null>(null);
  const router = useRouter()

  const attemptLogin = async () => { 
    try {
      await axios.post(`${baseUrl}/login`, { username, password }, {
        withCredentials: true
      })
    } catch(err) {
      toast.current?.show(
        {
          severity:'error', 
          summary: 'Error', 
          detail:'Login failed', 
          life: 3000
        }
      )

      setUsername('')
      setPassword('')
      return
    }
    
    await router.push('/Dashboard')
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    attemptLogin()
  };

  return (
    <div>
      <Toast ref={toast} />
      <Card title="Login" subTitle="Please enter your username and password" className="p-shadow-5">
        <form onSubmit={handleSubmit} className="p-fluid">
          <span className="p-float-label mb-4">
            <InputText
              id="username"
              type="username"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
              className={classNames("p-d-block", { "p-invalid": !username && password })}
            />
            <label htmlFor="username">
              Username
            </label>
          </span>
          <span className="p-float-label mb-5">
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              className="p-d-block"
              feedback={false}
            />
            <label htmlFor="password">
              Password
            </label>
          </span>
          <Button disabled={!password || !username} type="submit" label="Login" />
        </form>
      </Card>
    </div>
  );
};