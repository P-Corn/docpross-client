import React, { useState, useRef, FormEvent } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Toast } from "primereact/toast";
import { Card } from "primereact/card";
import { classNames } from "primereact/utils";
// import "./Login.css";

interface Props {}

export default function Login(props: Props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const toast = useRef<Toast | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (email && password) {
      toast.current?.show({ severity: "success", summary: "Login successful!" });
    } else {
      toast.current?.show({ severity: "error", summary: "Please enter email and password." });
    }
  };

  return (
    <div>
      <Toast ref={toast} />
      <Card title="Login" subTitle="Please enter your email and password" className="p-shadow-5">
        <form onSubmit={handleSubmit} className="p-fluid">
          <span className="p-float-label mb-4">
            <InputText
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              className={classNames("p-d-block", { "p-invalid": !email && password })}
            />
            <label htmlFor="email">
              Email
            </label>
          </span>
          <span className="p-float-label mb-5">
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              className={classNames("p-d-block", { "p-invalid": !password && email })}
              feedback={false}
            />
            <label htmlFor="password">
              Password
            </label>
          </span>
          <Button type="submit" label="Login" />
        </form>
      </Card>
    </div>
  );
};